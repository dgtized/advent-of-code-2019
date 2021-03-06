(ns operation-order
  (:require [instaparse.core :as insta]
            [clojure.string :as str]))
;; For details on instaparse;
;; https://cljdoc.org/d/instaparse/instaparse/1.4.10/doc/readme
;; https://samrat.me/posts/2014-03-15-arithmetic-with-instaparse/
;; https://cljdoc.org/d/instaparse/instaparse/1.4.10/doc/instaparse-experimental-features#predefined-whitespace-parsers

;; Use an ABNF parser generator with left associative rules
;; parens precedence is encoded in the grammar
(def left-parser (insta/parser "P = expr
<expr> = parens | add | multiply | number
add = expr <'+'> (number | parens)
multiply = expr <'*'> (number | parens)
<parens> = <'('> expr <')'>
number = #'[\\d]+'
" :auto-whitespace :standard))

;; Adjust original grammar to ensure addition is a higher precedence
(def adv-left-parser (insta/parser "P = expr
<expr> = parens | multiply | add | number
<parens> = <'('> expr <')'>
add = (number | parens) (<'+'> (add | number | parens))
multiply = (number | parens | add) (<'*'> expr)
number = #'[\\d]+'
" :auto-whitespace :standard))

(comment
  ;; Verify parses are not ambigious and succeed
  (insta/parses left-parser "1 + 2 * 3")
  (insta/parses left-parser "1 * 2 + 3")
  (insta/parses left-parser "1 + (2 * 3)")
  (insta/parses left-parser "(1 + 2) + 2")
  (insta/parses left-parser "2 * 3 + (4 * 5)")
  (insta/parses left-parser "((2 + 4 * 9) * (6 + 9 * 8 + 6) + 6) + 2 + 4 * 2")

  (insta/parses adv-left-parser "1 + 2 * 3 + 4 * 5 + 6")
  (insta/parses adv-left-parser "2 * 3 + (4 * 5)"))

(defn read-eval [parser line]
  (let [tree (parser line)
        transformations {:P identity ;; lift evaluation out of tree
                         :number read-string ;; parse "6" => 6
                         :add +
                         :multiply *}]
    ;; Applies functions to matching tokens from bottom up
    (insta/transform transformations tree)))

(defn evaluate-sum [parser filename]
  (->> filename
       slurp
       str/split-lines
       (map (partial read-eval parser))
       (reduce +)))

(def first-star (partial evaluate-sum left-parser))
(def second-star (partial evaluate-sum adv-left-parser))

(comment
  (= (first-star "example") 26409)
  (= (first-star "input") 29839238838303)

  (= (second-star "example") 694125)
  (= (second-star "input") 201376568795521))
