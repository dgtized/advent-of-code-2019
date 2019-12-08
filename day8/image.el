(require 's)
(require 'f)

(defvar image-width 25)
(defvar image-height 6)
(defvar layer-width (* image-width image-height))

(defun image->layers (filename)
  (let* ((image (s-trim (f-read-text filename))))
    (cl-loop for i from 0 below (length image) by layer-width
             collect (substring image i (+ i layer-width)))))

;; (s-count-matches "0" "00120") => 3

(defun image-checksum ()
  "Find the layer with least number of zeroes and count product of count of 1's and 2's. "
  (let ((counts (cl-loop for layer in (image->layers "input")
                         collect (list (s-count-matches "0" layer)
                                       (* (s-count-matches "1" layer)
                                          (s-count-matches "2" layer))))))
    (car (cl-sort counts '< :key 'car))))

;; (image-checksum)

(defun transposed-pixels ()
  "Transpose each layer into a list of pixels, where each pixel
is a list of the pixel values across every layers."
  (cl-loop for i below layer-width
           collect (cl-loop for layer in (image->layers "input")
                            collect (substring layer i (1+ i)))))

(defun first-visible (pixels)
  "Drops all leading transparent pixels and returns first pixel after."
  (car (seq-drop-while (lambda (pixel) (equalp "2" pixel)) pixels)))

(defun visible-layer ()
  "Build a layer of visible pixels from the transposed list"
  (cl-loop for pixels in (transposed-pixels)
           concat (first-visible pixels)))

(defun generate-image (layer)
  "Render an image from a particular layer, split into individual rows."
  (with-temp-file "image.sif"
    (cl-loop for i below layer-width by image-width
             do (insert (substring layer i (+ i image-width)) "\n"))))

;; (generate-image (visible-layer))
