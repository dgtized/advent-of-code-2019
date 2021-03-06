(ns conway.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as mw]
            [clojure.string :as str]))

;; Usage:
;; npm install # overrides p5.js version to latest
;; clojure -m figwheel.main # browser should open with 3d display, n goes to next step

(enable-console-print!)

(def input ".#######
#######.
###.###.
#....###
.#..##..
#.#.###.
###..###
.#.#.##.")

(def example ".#.
..#
###")

(defn parse
  "Parse grid string `s` into list of active points."
  [s]
  (let [lines (str/split-lines s)
        size (count lines)]
    (apply sorted-set
           (for [y (range 0 size)
                 x (range 0 size)
                 :let [v (subs (nth lines y) x (+ x 1))]
                 :when (= v "#")]
             [x y 0 0]))))

(comment (= (parse example)
            #{[1 0 0 0] [0 2 0 0] [2 2 0 0] [1 2 0 0] [2 1 0 0]})
         (= (count (parse input))
            42))

(defn neighbor-coords
  "Generate all the neighboring coordinates of a point."
  [[x y z w]]
  (for [dx (range -1 2)
        dy (range -1 2)
        dz (range -1 2)
        dw (range -1 2)
        :when (not= dx dy dz dw 0)]
    [(+ x dx) (+ y dy) (+ z dz) (+ w dw)]))

(defn neighbors-of
  "For a given point, return all neighboring points that are active in index"
  [point points]
  (filter (fn [coord] (get points coord))
          (neighbor-coords point)))

(defn cube-bounds
  "Calculate the upper and lower bounds for each axis"
  [points]
  (for [idx (range 0 4)]
    [(dec ((apply min-key #(nth % idx) points) idx))
     (+ 2 ((apply max-key #(nth % idx) points) idx))]))

(comment (= 80 (count (neighbor-coords [0 0 0 0])))
         (= (neighbors-of [1 1 0 0] (parse example))
            [[0 2 0 0] [1 0 0 0] [1 2 0 0] [2 1 0 0] [2 2 0 0]])
         (= (cube-bounds (parse example))
            [[-1 4] [-1 4] [-1 2] [-1 2]]))

(defn active-point
  "For a given position, return a position if it should be active from current state."
  [position points]
  (let [current-point (get points position)
        neighbors (count (neighbors-of position points))]
    (cond (and current-point (#{2 3} neighbors))
          current-point
          (and (not current-point) (= 3 neighbors))
          position)))

(defn next-state
  "Calculate next set of active points."
  [points]
  (let [bounds (cube-bounds points)]
    (apply sorted-set
           (for [x (apply range (nth bounds 0))
                 y (apply range (nth bounds 1))
                 z (apply range (nth bounds 2))
                 w (apply range (nth bounds 3))
                 :let [point (active-point [x y z w] points)]
                 :when point]
             point))))

(comment ;; solution
  ;; note this is broken up because of timeout problems
  (time (def e5 (nth (iterate next-state (parse example)) 5)))
  (time (count e5))
  (time (= 848 (count (next-state e5))))

  ;; problems with timeout, works when clicking n 6 times for displayed example
  (def i5 (nth (iterate next-state (parse input)) 5))
  (= 2812 (count i5))
  ;; something unhappy about lazy evaluation, blows stack
  (= 2296 (count (next-state i5))))

;; Visualization using Quil
(defn setup []
  {:points (parse input)})

(defn keypress [state event]
  (cond (= :n (:key event))
        (let [state (time (update-in state [:points] next-state))]
          (println "Points: " (count (:points state)))
          state)
        :else state))

(defn draw [{:keys [points] :as state}]
  (q/background "white")
  (q/stroke 0)
  (q/no-fill)
  (q/stroke-weight 10)
  (q/scale 20)
  (q/translate 10 10 -20)
  (doseq [p points]
    (apply q/point (butlast p))))

(q/defsketch conway
  :host "quil-host"
  :renderer :p3d
  :size [500 500]
  :setup setup
  :draw draw
  :key-pressed keypress
  :middleware [mw/fun-mode mw/navigation-3d]
  :navigation-3d {:position [200 200 50]})

