#lang racket

(require racket/string)

(define (parse-program source)
  (list->vector (map string->number (string-split source ","))))

(define (load-program filename)
  (parse-program (car (file->lines filename))))

(struct cpu (memory pc relative-base input output condition))

(define (init-cpu memory input output)
  (cpu memory 0 0 input output 'run))

(define (print-memory cpu)
  (println (list "pc:" (cpu-pc cpu)
                 " rb: " (cpu-relative-base cpu)
                 " input: " (cpu-input cpu)
                 " output: " (cpu-output cpu)
                 " condition: " (cpu-condition cpu)))
  (println (string-join (map number->string (vector->list (cpu-memory cpu))) ",")))

(define (fetch memory offset)
  (if (> offset (vector-length memory))
      0
      (vector-ref memory offset)))

(define (cpu-fetch cpu offset)
  (vector-ref (cpu-memory cpu) offset))

(define (store memory offset value)
  (if (> offset (vector-length memory))
      (let ((newmem (make-vector (exact-floor (* offset 1.5)))))
        (vector-copy! newmem 0 memory 0)
        (vector-set! newmem offset value)
        newmem)
      (let ((newmem (vector-copy memory)))
        (vector-set! newmem offset value)
        newmem)))

(define (match-operand operand)
  (case operand
    [(1) '(add 4)]
    [(2) '(multiply 4)]
    [(3) '(read 2)]
    [(4) '(write 2)]
    [(5) '(jump-if-true 3)]
    [(6) '(jump-if-false 3)]
    [(7) '(less-than 4)]
    [(8) '(equals 4)]
    [(9) '(relative-base 2)]
    [(99) '(halt 0)]))

(define (parameter-flags operand)
  (list
   (modulo (quotient operand 100) 10)
   (modulo (quotient operand 1000) 10)
   (modulo (quotient operand 10000) 10)))

(define (fetch-operand memory pc)
  (let ((operand (fetch memory pc)))
    (append (match-operand (modulo operand 100))
            (list (parameter-flags operand)))))

(define (parameter-value machine flags param)
  (let* ((memory (cpu-memory machine))
         (pc (cpu-pc machine))
         (relative-base (cpu-relative-base machine))
         (immediate (fetch memory (+ pc param))))
    (case (list-ref flags (- param 1))
      [(0) (fetch memory immediate)]
      [(1) immediate]
      [(2) (fetch memory (+ relative-base immediate))])))

(define (store-parameter machine flags param)
  (let* ((memory (cpu-memory machine))
         (pc (cpu-pc machine))
         (relative-base (cpu-relative-base machine))
         (value (fetch memory (+ pc param))))
    (case (list-ref flags (- param 1))
      [(0) value]
      [(1) value]
      [(2) (+ relative-base value)])))

(define (read-port! ports port)
  (let ((channel (vector-ref ports port)))
    (if (empty? channel)
        'blocked
        (let ((value (car channel)))
          (vector-set! ports port (cdr channel))
          value))))

(define (write-port! ports port value)
  (let ((channel (vector-ref ports port)))
    (vector-set! ports port (append channel (list value)))))

(define debugging #f)
(define (step machine ports)
  (define (debug lst)
    (when debugging (println lst)))

  (match-define (cpu memory pc _ input output _) machine)
  (match (fetch-operand memory pc)
    [(list 'add args flags)
     (let ((a (parameter-value machine flags 1))
           (b (parameter-value machine flags 2))
           (r (store-parameter machine flags 3)))
       (debug (list pc "addition " flags (+ a b) r))
       (struct-copy cpu machine
                    [memory (store memory r (+ a b))]
                    [pc (+ pc args)]))]
    [(list 'multiply args flags)
     (let ((a (parameter-value machine flags 1))
           (b (parameter-value machine flags 2))
           (r (store-parameter machine flags 3)))
       (debug (list pc "multiply" flags (* a b) r))
       (struct-copy cpu machine
                    [memory (store memory r (* a b))]
                    [pc (+ pc args)]))]
    [(list 'read args flags)
     (let ((value (read-port! ports input)))
       (if (eq? value 'blocked)
           (struct-copy cpu machine [condition 'read])
           (let ((r (store-parameter machine flags 1)))
             (debug (list pc "read" flags value r (fetch memory (+ pc 1))))
             (struct-copy cpu machine
                          [memory (store memory r value)]
                          [pc (+ pc args)]))))]
    [(list 'write args flags)
     (let ((value (parameter-value machine flags 1)))
       (debug (list pc "write" flags value))
       (write-port! ports output value)
       (struct-copy cpu machine
                    [pc (+ pc args)]))]
    [(list 'jump-if-true args flags)
     (let ((cnd (parameter-value machine flags 1))
           (jmp (parameter-value machine flags 2)))
       (debug (list pc "jump-if-true" flags cnd jmp))
       (struct-copy cpu machine
                    [pc (if (> cnd 0) jmp (+ pc args))]))]
    [(list 'jump-if-false args flags)
     (let ((cnd (parameter-value machine flags 1))
           (jmp (parameter-value machine flags 2)))
       (debug (list pc "jump-if-false" flags cnd jmp))
       (struct-copy cpu machine
                    [pc (if (= cnd 0) jmp (+ pc args))]))]
    [(list 'less-than args flags)
     (let ((a (parameter-value machine flags 1))
           (b (parameter-value machine flags 2))
           (r (store-parameter machine flags 3)))
       (debug (list pc "less-than" flags (if (< a b) 1 0) r))
       (struct-copy cpu machine
                    [memory (store memory r (if (< a b) 1 0))]
                    [pc (+ pc args)]))]
    [(list 'equals args flags)
     (let ((a (parameter-value machine flags 1))
           (b (parameter-value machine flags 2))
           (r (store-parameter machine flags 3)))
       (debug (list pc "equals" flags (if (= a b) 1 0) r))
       (struct-copy cpu machine
                    [memory (store memory r (if (= a b) 1 0))]
                    [pc (+ pc args)]))]
    [(list 'relative-base args flags)
     (let ((base (parameter-value machine flags 1)))
       (debug (list pc "relative-base" flags base (cpu-relative-base machine)))
       (struct-copy cpu machine
                    [relative-base (+ (cpu-relative-base machine) base)]
                    [pc (+ pc args)]))]
    [(list 'halt _ _)
     (debug (list pc "halt"))
     (struct-copy cpu machine [condition 'halt])]))

(define (run-until-blocked machine ports)
  (match (cpu-condition machine)
    ['run
     (run-until-blocked (step machine ports) ports)]
    ['read
     (struct-copy cpu machine
                  [condition 'run])]
    ['halt
     machine]))

(define (step-all machines ports)
  (map (lambda (m) (run-until-blocked m ports)) machines))

(define (any-running? machines)
  (ormap (lambda (m) (eq? 'run (cpu-condition m)))
          machines))

(define (run-all machines ports)
  (if (any-running? machines)
      (run-all (step-all machines ports) ports)
      machines))

(define (port-output ports)
  (vector-ref ports 1))

(struct robot (x y cardinal))

(define/match (turn cardinal rotate)
  [('north 0) 'west]
  [('north 1) 'east]
  [('east 0) 'north]
  [('east 1) 'south]
  [('south 0) 'east]
  [('south 1) 'west]
  [('west 0) 'south]
  [('west 1) 'north])

(define (advance bot rotate)
  (match bot
    [(robot x y cardinal)
     (let ((new-cardinal (turn cardinal rotate)))
       (case new-cardinal
         [(north) (struct-copy robot bot
                                [y (+ y 1)] [cardinal new-cardinal])]
         [(east) (struct-copy robot bot
                                [x (+ x 1)] [cardinal new-cardinal])]
         [(south) (struct-copy robot bot
                                [y (- y 1)] [cardinal new-cardinal])]
         [(west) (struct-copy robot bot
                              [x (- x 1)] [cardinal new-cardinal])]))]))

(struct panel (x y color))

(define (matching-pane px py)
  (lambda (pane)
    (match pane
        [(panel x y _) (and (= px x) (= py y))])))

(define (run-robot cpu ports bot panels)
  (match-let* ([(robot px py _) bot]
               [panel-at-pos (findf (matching-pane px py) panels)]
               [pcolor (if panel-at-pos (panel-color panel-at-pos) 0)])
    ;; (println (list"@ " px py pcolor))
    (write-port! ports 0 pcolor)
    (let* ((cpu (run-until-blocked cpu ports))
           (output (vector-ref ports 1))
           (new-bot (advance bot (cadr output)))
           (new-panel (panel (robot-x bot) (robot-y bot) (car output))))
      (if (equal? 'halt (cpu-condition cpu))
          (reverse panels)
          (run-robot cpu (list->vector (list '() '()))
                     new-bot
                     (cons new-panel panels))))))

(let ((ports (list->vector '(() ())))
      (cpu (init-cpu (load-program "input") 0 1))
      (bot (robot 0 0 'north))
      (path (list (panel 0 0 0))))
  (set-count (list->set (map (lambda (pane) (match pane [(panel x y _) (list x y)]))
                             (run-robot cpu ports bot path)))))

;; paint
(let* ((ports (list->vector '(() ())))
       (cpu (init-cpu (load-program "input") 0 1))
       (bot (robot 50 50 'north))
       (path (run-robot cpu ports bot (list (panel 50 50 1))))
       (grid (build-vector 100 (lambda (x) (make-string 100 #\ )))))
  (for ([pane path])
    (match pane
      [(panel x y color)
       (vector-set! grid y (let ((copy (string-copy (vector-ref grid y))))
                             (string-set! copy x (if (= color 0) #\ #\+))
                             copy))]))
  (for ([row (reverse (vector->list grid))])
    (println row)))

