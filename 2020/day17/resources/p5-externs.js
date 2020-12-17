/**********************************************************************
 * Extern for p5
 * Generated by http://jmmk.github.io/javascript-externs-generator
 **********************************************************************/
var p5 = {
  "Camera": function () {},
  "Color": {
    "_parseInputs": function () {}
  },
  "ColorConversion": {
    "_hsbaToHSLA": function () {},
    "_hsbaToRGBA": function () {},
    "_hslaToHSBA": function () {},
    "_hslaToRGBA": function () {},
    "_rgbaToHSBA": function () {},
    "_rgbaToHSLA": function () {}
  },
  "Element": {
    "_adjustListener": function () {},
    "_attachListener": function () {},
    "_detachListener": function () {}
  },
  "File": {
    "_createLoader": function () {},
    "_load": function () {}
  },
  "Font": function () {},
  "Geometry": function () {},
  "Graphics": function () {},
  "Image": function () {},
  "Matrix": {
    "identity": function () {}
  },
  "MediaElement": function () {},
  "NumberDict": function () {},
  "PrintWriter": function () {},
  "RenderBuffer": function () {},
  "Renderer": function () {},
  "Renderer2D": function () {},
  "RendererGL": function () {},
  "Shader": function () {},
  "StringDict": function () {},
  "Table": function () {},
  "TableRow": function () {},
  "Texture": function () {},
  "TypedDict": function () {},
  "ValidationError": {
    "stackTraceLimit": {}
  },
  "Vector": {
    "add": function () {},
    "cross": function () {},
    "dist": function () {},
    "div": function () {},
    "dot": function () {},
    "fromAngle": function () {},
    "fromAngles": function () {},
    "lerp": function () {},
    "mag": function () {},
    "mult": function () {},
    "random2D": function () {},
    "random3D": function () {},
    "rem": function () {},
    "sub": function () {}
  },
  "XML": function () {},
  "_checkForUserDefinedFunctions": function () {},
  "_clearValidateParamsCache": function () {},
  "_fesErrorMonitor": function () {},
  "_fesLogCache": {},
  "_fesLogger": {},
  "_friendlyAutoplayError": function () {},
  "_friendlyError": function () {},
  "_friendlyFileLoadError": function () {},
  "_friendlyParamError": function () {},
  "_getErrorStackParser": function () {},
  "_getValidateParamsArgTree": function () {},
  "_validateParameters": function () {},
  "disableFriendlyErrors": {},
  "instance": {}
};
p5.prototype = {
  "ADD": function () {},
  "ALT": function () {},
  "ARROW": function () {},
  "AUDIO": function () {},
  "AUTO": function () {},
  "AXES": function () {},
  "BACKSPACE": function () {},
  "BASELINE": function () {},
  "BEVEL": function () {},
  "BEZIER": function () {},
  "BLEND": function () {},
  "BLUR": function () {},
  "BOLD": function () {},
  "BOLDITALIC": function () {},
  "BOTTOM": function () {},
  "BURN": function () {},
  "CENTER": function () {},
  "CHORD": function () {},
  "CLAMP": function () {},
  "CLOSE": function () {},
  "CONTROL": function () {},
  "CORNER": function () {},
  "CORNERS": function () {},
  "CROSS": function () {},
  "CURVE": function () {},
  "DARKEST": function () {},
  "DEGREES": function () {},
  "DEG_TO_RAD": function () {},
  "DELETE": function () {},
  "DIFFERENCE": function () {},
  "DILATE": function () {},
  "DODGE": function () {},
  "DOWN_ARROW": function () {},
  "ENTER": function () {},
  "ERODE": function () {},
  "ESCAPE": function () {},
  "EXCLUSION": function () {},
  "FILL": function () {},
  "GRAY": function () {},
  "GRID": function () {},
  "HALF_PI": function () {},
  "HAND": function () {},
  "HARD_LIGHT": function () {},
  "HSB": function () {},
  "HSL": function () {},
  "IMAGE": function () {},
  "IMMEDIATE": function () {},
  "INVERT": function () {},
  "ITALIC": function () {},
  "LANDSCAPE": function () {},
  "LEFT": function () {},
  "LEFT_ARROW": function () {},
  "LIGHTEST": function () {},
  "LINEAR": function () {},
  "LINES": function () {},
  "LINE_LOOP": function () {},
  "LINE_STRIP": function () {},
  "MIRROR": function () {},
  "MITER": function () {},
  "MOVE": function () {},
  "MULTIPLY": function () {},
  "NEAREST": function () {},
  "NORMAL": function () {},
  "OPAQUE": function () {},
  "OPEN": function () {},
  "OPTION": function () {},
  "OVERLAY": function () {},
  "P2D": function () {},
  "PI": function () {},
  "PIE": function () {},
  "POINTS": function () {},
  "PORTRAIT": function () {},
  "POSTERIZE": function () {},
  "PROJECT": function () {},
  "QUADRATIC": function () {},
  "QUADS": function () {},
  "QUAD_STRIP": function () {},
  "QUARTER_PI": function () {},
  "RADIANS": function () {},
  "RADIUS": function () {},
  "RAD_TO_DEG": function () {},
  "REMOVE": function () {},
  "REPEAT": function () {},
  "REPLACE": function () {},
  "RETURN": function () {},
  "RGB": function () {},
  "RIGHT": function () {},
  "RIGHT_ARROW": function () {},
  "ROUND": function () {},
  "SCREEN": function () {},
  "SHIFT": function () {},
  "SOFT_LIGHT": function () {},
  "SQUARE": function () {},
  "STROKE": function () {},
  "SUBTRACT": function () {},
  "TAB": function () {},
  "TAU": function () {},
  "TESS": function () {},
  "TEXT": function () {},
  "TEXTURE": function () {},
  "THRESHOLD": function () {},
  "TOP": function () {},
  "TRIANGLES": function () {},
  "TRIANGLE_FAN": function () {},
  "TRIANGLE_STRIP": function () {},
  "TWO_PI": function () {},
  "UP_ARROW": function () {},
  "VIDEO": function () {},
  "WAIT": function () {},
  "WEBGL": function () {},
  "_CTX_MIDDLE": function () {},
  "_DEFAULT_FILL": function () {},
  "_DEFAULT_LEADMULT": function () {},
  "_DEFAULT_STROKE": function () {},
  "_DEFAULT_TEXT_FILL": function () {},
  "_angleMode": function () {},
  "_areDownKeys": function () {},
  "_assert3d": function () {},
  "_axesIcon": function () {},
  "_checkFileExtension": function () {},
  "_copyHelper": function () {},
  "_frameRate": function () {},
  "_fromRadians": function () {},
  "_getContainer": function () {},
  "_getTintedImageCanvas": function () {},
  "_grid": function () {},
  "_handleMotion": function () {},
  "_hasMouseInteracted": function () {},
  "_helpForMisusedAtTopLevelCode": function () {},
  "_isSafari": function () {},
  "_lastFrameTime": function () {},
  "_lcg": function () {},
  "_lcgSetSeed": function () {},
  "_legacyPreloadGenerator": function () {},
  "_makeFrame": function () {},
  "_mouseWheelDeltaY": function () {},
  "_normalizeArcAngles": function () {},
  "_onblur": function () {},
  "_onclick": function () {},
  "_ondblclick": function () {},
  "_ondevicemotion": function () {},
  "_ondeviceorientation": function () {},
  "_ondragend": function () {},
  "_ondragover": function () {},
  "_onkeydown": function () {},
  "_onkeypress": function () {},
  "_onkeyup": function () {},
  "_onmousedown": function () {},
  "_onmousemove": function () {},
  "_onmouseup": function () {},
  "_onresize": function () {},
  "_ontouchend": function () {},
  "_ontouchmove": function () {},
  "_ontouchstart": function () {},
  "_onwheel": function () {},
  "_pWriters": function () {},
  "_pmouseWheelDeltaY": function () {},
  "_preloadMethods": function () {},
  "_promisePreloads": function () {},
  "_registeredMethods": function () {},
  "_registeredPreloadMethods": function () {},
  "_renderEllipse": function () {},
  "_renderRect": function () {},
  "_setMouseButton": function () {},
  "_setupPromisePreloads": function () {},
  "_targetFrameRate": function () {},
  "_toDegrees": function () {},
  "_toRadians": function () {},
  "_updateMouseCoords": function () {},
  "_updateNextMouseCoords": function () {},
  "_updatePAccelerations": function () {},
  "_updatePRotations": function () {},
  "_updateTextMetrics": function () {},
  "_updateTouchCoords": function () {},
  "_validateParameters": function () {},
  "_wrapElement": function () {},
  "_wrapPromisePreload": function () {},
  "abs": function () {},
  "accelerationX": function () {},
  "accelerationY": function () {},
  "accelerationZ": function () {},
  "acos": function () {},
  "alpha": function () {},
  "ambientLight": function () {},
  "ambientMaterial": function () {},
  "angleMode": function () {},
  "append": function () {},
  "applyMatrix": function () {},
  "arc": function () {},
  "arrayCopy": function () {},
  "asin": function () {},
  "atan": function () {},
  "atan2": function () {},
  "background": function () {},
  "beginContour": function () {},
  "beginShape": function () {},
  "bezier": function () {},
  "bezierDetail": function () {},
  "bezierPoint": function () {},
  "bezierTangent": function () {},
  "bezierVertex": function () {},
  "blend": function () {},
  "blendMode": function () {},
  "blue": function () {},
  "boolean": function () {},
  "box": function () {},
  "brightness": function () {},
  "byte": function () {},
  "camera": function () {},
  "ceil": function () {},
  "char": function () {},
  "circle": function () {},
  "clear": function () {},
  "clearStorage": function () {},
  "color": function () {},
  "colorMode": function () {},
  "concat": function () {},
  "cone": function () {},
  "constrain": function () {},
  "copy": function () {},
  "cos": function () {},
  "createA": function () {},
  "createAudio": function () {},
  "createButton": function () {},
  "createCamera": function () {},
  "createCanvas": function () {},
  "createCapture": function () {},
  "createCheckbox": function () {},
  "createColorPicker": function () {},
  "createDiv": function () {},
  "createElement": function () {},
  "createFileInput": function () {},
  "createGraphics": function () {},
  "createImage": function () {},
  "createImg": function () {},
  "createInput": function () {},
  "createNumberDict": function () {},
  "createP": function () {},
  "createRadio": function () {},
  "createSelect": function () {},
  "createShader": function () {},
  "createSlider": function () {},
  "createSpan": function () {},
  "createStringDict": function () {},
  "createVector": function () {},
  "createVideo": function () {},
  "createWriter": function () {},
  "cursor": function () {},
  "curve": function () {},
  "curveDetail": function () {},
  "curvePoint": function () {},
  "curveTangent": function () {},
  "curveTightness": function () {},
  "curveVertex": function () {},
  "cylinder": function () {},
  "day": function () {},
  "debugMode": function () {},
  "degrees": function () {},
  "deltaTime": function () {},
  "deviceOrientation": function () {},
  "directionalLight": function () {},
  "displayDensity": function () {},
  "displayHeight": function () {},
  "displayWidth": function () {},
  "dist": function () {},
  "downloadFile": function () {},
  "ellipse": function () {},
  "ellipseMode": function () {},
  "ellipsoid": function () {},
  "emissiveMaterial": function () {},
  "endContour": function () {},
  "endShape": function () {},
  "erase": function () {},
  "exitPointerLock": function () {},
  "exp": function () {},
  "fill": function () {},
  "filter": function () {},
  "float": function () {},
  "floor": function () {},
  "focused": function () {},
  "fract": function () {},
  "frameCount": function () {},
  "frameRate": function () {},
  "frustum": function () {},
  "fullscreen": function () {},
  "get": function () {},
  "getFrameRate": function () {},
  "getItem": function () {},
  "getURL": function () {},
  "getURLParams": function () {},
  "getURLPath": function () {},
  "green": function () {},
  "height": function () {},
  "hex": function () {},
  "hour": function () {},
  "httpDo": function () {},
  "httpGet": function () {},
  "httpPost": function () {},
  "hue": function () {},
  "image": function () {},
  "imageMode": function () {},
  "int": function () {},
  "isKeyPressed": function () {},
  "isLooping": function () {},
  "join": function () {},
  "key": function () {},
  "keyCode": function () {},
  "keyIsDown": function () {},
  "keyIsPressed": function () {},
  "lerp": function () {},
  "lerpColor": function () {},
  "lightFalloff": function () {},
  "lightness": function () {},
  "lights": function () {},
  "line": function () {},
  "loadBytes": function () {},
  "loadFont": function () {},
  "loadImage": function () {},
  "loadJSON": function () {},
  "loadModel": function () {},
  "loadPixels": function () {},
  "loadShader": function () {},
  "loadStrings": function () {},
  "loadTable": function () {},
  "loadXML": function () {},
  "log": function () {},
  "loop": function () {},
  "mag": function () {},
  "map": function () {},
  "match": function () {},
  "matchAll": function () {},
  "max": function () {},
  "millis": function () {},
  "min": function () {},
  "minute": function () {},
  "model": function () {},
  "month": function () {},
  "mouseButton": function () {},
  "mouseIsPressed": function () {},
  "mouseX": function () {},
  "mouseY": function () {},
  "movedX": function () {},
  "movedY": function () {},
  "nf": function () {},
  "nfc": function () {},
  "nfp": function () {},
  "nfs": function () {},
  "noCanvas": function () {},
  "noCursor": function () {},
  "noDebugMode": function () {},
  "noErase": function () {},
  "noFill": function () {},
  "noLights": function () {},
  "noLoop": function () {},
  "noSmooth": function () {},
  "noStroke": function () {},
  "noTint": function () {},
  "noise": function () {},
  "noiseDetail": function () {},
  "noiseSeed": function () {},
  "norm": function () {},
  "normalMaterial": function () {},
  "orbitControl": function () {},
  "ortho": function () {},
  "pAccelerationX": function () {},
  "pAccelerationY": function () {},
  "pAccelerationZ": function () {},
  "pRotateDirectionX": function () {},
  "pRotateDirectionY": function () {},
  "pRotateDirectionZ": function () {},
  "pRotationX": function () {},
  "pRotationY": function () {},
  "pRotationZ": function () {},
  "perspective": function () {},
  "pixelDensity": function () {},
  "pixels": function () {},
  "plane": function () {},
  "pmouseX": function () {},
  "pmouseY": function () {},
  "point": function () {},
  "pointLight": function () {},
  "pop": function () {},
  "popMatrix": function () {},
  "popStyle": function () {},
  "pow": function () {},
  "print": function () {},
  "push": function () {},
  "pushMatrix": function () {},
  "pushStyle": function () {},
  "pwinMouseX": function () {},
  "pwinMouseY": function () {},
  "quad": function () {},
  "quadraticVertex": function () {},
  "radians": function () {},
  "random": function () {},
  "randomGaussian": function () {},
  "randomSeed": function () {},
  "rect": function () {},
  "rectMode": function () {},
  "red": function () {},
  "redraw": function () {},
  "registerPromisePreload": function () {},
  "removeElements": function () {},
  "removeItem": function () {},
  "requestPointerLock": function () {},
  "resetMatrix": function () {},
  "resetShader": function () {},
  "resizeCanvas": function () {},
  "reverse": function () {},
  "rotate": function () {},
  "rotateX": function () {},
  "rotateY": function () {},
  "rotateZ": function () {},
  "rotationX": function () {},
  "rotationY": function () {},
  "rotationZ": function () {},
  "round": function () {},
  "saturation": function () {},
  "save": function () {},
  "saveCanvas": function () {},
  "saveFrames": function () {},
  "saveGif": function () {},
  "saveJSON": function () {},
  "saveJSONArray": function () {},
  "saveJSONObject": function () {},
  "saveStrings": function () {},
  "saveTable": function () {},
  "scale": function () {},
  "second": function () {},
  "select": function () {},
  "selectAll": function () {},
  "set": function () {},
  "setAttributes": function () {},
  "setCamera": function () {},
  "setFrameRate": function () {},
  "setMoveThreshold": function () {},
  "setShakeThreshold": function () {},
  "shader": function () {},
  "shearX": function () {},
  "shearY": function () {},
  "shininess": function () {},
  "shorten": function () {},
  "shuffle": function () {},
  "sin": function () {},
  "smooth": function () {},
  "sort": function () {},
  "specularColor": function () {},
  "specularMaterial": function () {},
  "sphere": function () {},
  "splice": function () {},
  "split": function () {},
  "splitTokens": function () {},
  "spotLight": function () {},
  "sq": function () {},
  "sqrt": function () {},
  "square": function () {},
  "storeItem": function () {},
  "str": function () {},
  "stroke": function () {},
  "strokeCap": function () {},
  "strokeJoin": function () {},
  "strokeWeight": function () {},
  "subset": function () {},
  "tan": function () {},
  "text": function () {},
  "textAlign": function () {},
  "textAscent": function () {},
  "textDescent": function () {},
  "textFont": function () {},
  "textLeading": function () {},
  "textSize": function () {},
  "textStyle": function () {},
  "textWidth": function () {},
  "texture": function () {},
  "textureMode": function () {},
  "textureWrap": function () {},
  "tint": function () {},
  "torus": function () {},
  "touches": function () {},
  "translate": function () {},
  "triangle": function () {},
  "trim": function () {},
  "turnAxis": function () {},
  "unchar": function () {},
  "unhex": function () {},
  "updatePixels": function () {},
  "vertex": function () {},
  "width": function () {},
  "winMouseX": function () {},
  "winMouseY": function () {},
  "windowHeight": function () {},
  "windowWidth": function () {},
  "writeFile": function () {},
  "year": function () {}
};
p5.Camera.prototype = {
  "_computeCameraDefaultSettings": function () {},
  "_getLocalAxes": function () {},
  "_isActive": function () {},
  "_orbit": function () {},
  "_resize": function () {},
  "_rotateView": function () {},
  "_setDefaultCamera": function () {},
  "camera": function () {},
  "copy": function () {},
  "frustum": function () {},
  "lookAt": function () {},
  "move": function () {},
  "ortho": function () {},
  "pan": function () {},
  "perspective": function () {},
  "setPosition": function () {},
  "tilt": function () {}
};
p5.Color.prototype = {
  "_calculateLevels": function () {},
  "_getAlpha": function () {},
  "_getBlue": function () {},
  "_getBrightness": function () {},
  "_getGreen": function () {},
  "_getHue": function () {},
  "_getLightness": function () {},
  "_getMaxes": function () {},
  "_getMode": function () {},
  "_getRed": function () {},
  "_getSaturation": function () {},
  "_storeModeAndMaxes": function () {},
  "setAlpha": function () {},
  "setBlue": function () {},
  "setGreen": function () {},
  "setRed": function () {},
  "toString": function () {}
};
p5.Element.prototype = {
  "_rotate": function () {},
  "_setProperty": function () {},
  "_translate": function () {},
  "addClass": function () {},
  "attribute": function () {},
  "center": function () {},
  "changed": function () {},
  "child": function () {},
  "class": function () {},
  "doubleClicked": function () {},
  "dragLeave": function () {},
  "dragOver": function () {},
  "drop": function () {},
  "hasClass": function () {},
  "hide": function () {},
  "html": function () {},
  "id": function () {},
  "input": function () {},
  "mouseClicked": function () {},
  "mouseMoved": function () {},
  "mouseOut": function () {},
  "mouseOver": function () {},
  "mousePressed": function () {},
  "mouseReleased": function () {},
  "mouseWheel": function () {},
  "parent": function () {},
  "position": function () {},
  "remove": function () {},
  "removeAttribute": function () {},
  "removeClass": function () {},
  "show": function () {},
  "size": function () {},
  "style": function () {},
  "toggleClass": function () {},
  "touchEnded": function () {},
  "touchMoved": function () {},
  "touchStarted": function () {},
  "value": function () {}
};
p5.Font.prototype = {
  "_getGlyphs": function () {},
  "_getPath": function () {},
  "_getPathData": function () {},
  "_getSVG": function () {},
  "_handleAlignment": function () {},
  "_renderPath": function () {},
  "_scale": function () {},
  "_textAscent": function () {},
  "_textDescent": function () {},
  "_textWidth": function () {},
  "textBounds": function () {},
  "textToPoints": function () {}
};
p5.Geometry.prototype = {
  "_edgesToVertices": function () {},
  "_getFaceNormal": function () {},
  "_makeTriangleEdges": function () {},
  "averageNormals": function () {},
  "averagePoleNormals": function () {},
  "computeFaces": function () {},
  "computeNormals": function () {},
  "normalize": function () {},
  "reset": function () {}
};
p5.Graphics.prototype = {
  "_rotate": function () {},
  "_setProperty": function () {},
  "_translate": function () {},
  "addClass": function () {},
  "attribute": function () {},
  "center": function () {},
  "changed": function () {},
  "child": function () {},
  "class": function () {},
  "doubleClicked": function () {},
  "dragLeave": function () {},
  "dragOver": function () {},
  "drop": function () {},
  "hasClass": function () {},
  "hide": function () {},
  "html": function () {},
  "id": function () {},
  "input": function () {},
  "mouseClicked": function () {},
  "mouseMoved": function () {},
  "mouseOut": function () {},
  "mouseOver": function () {},
  "mousePressed": function () {},
  "mouseReleased": function () {},
  "mouseWheel": function () {},
  "parent": function () {},
  "position": function () {},
  "remove": function () {},
  "removeAttribute": function () {},
  "removeClass": function () {},
  "reset": function () {},
  "show": function () {},
  "size": function () {},
  "style": function () {},
  "toggleClass": function () {},
  "touchEnded": function () {},
  "touchMoved": function () {},
  "touchStarted": function () {},
  "value": function () {}
};
p5.Image.prototype = {
  "_animateGif": function () {},
  "_getPixel": function () {},
  "_setProperty": function () {},
  "blend": function () {},
  "copy": function () {},
  "delay": function () {},
  "filter": function () {},
  "get": function () {},
  "getCurrentFrame": function () {},
  "isModified": function () {},
  "loadPixels": function () {},
  "mask": function () {},
  "numFrames": function () {},
  "pause": function () {},
  "play": function () {},
  "reset": function () {},
  "resize": function () {},
  "save": function () {},
  "set": function () {},
  "setFrame": function () {},
  "setModified": function () {},
  "updatePixels": function () {}
};
p5.Matrix.prototype = {
  "apply": function () {},
  "copy": function () {},
  "determinant": function () {},
  "get": function () {},
  "inverseTranspose": function () {},
  "invert": function () {},
  "invert3x3": function () {},
  "mult": function () {},
  "ortho": function () {},
  "perspective": function () {},
  "rotate": function () {},
  "rotateX": function () {},
  "rotateY": function () {},
  "rotateZ": function () {},
  "scale": function () {},
  "set": function () {},
  "translate": function () {},
  "transpose": function () {},
  "transpose3x3": function () {}
};
p5.MediaElement.prototype = {
  "_ensureCanvas": function () {},
  "_getPixel": function () {},
  "_onTimeUpdate": function () {},
  "_rotate": function () {},
  "_setProperty": function () {},
  "_setupAutoplayFailDetection": function () {},
  "_translate": function () {},
  "addClass": function () {},
  "addCue": function () {},
  "attribute": function () {},
  "autoplay": function () {},
  "center": function () {},
  "changed": function () {},
  "child": function () {},
  "class": function () {},
  "clearCues": function () {},
  "connect": function () {},
  "copy": function () {},
  "disconnect": function () {},
  "doubleClicked": function () {},
  "dragLeave": function () {},
  "dragOver": function () {},
  "drop": function () {},
  "duration": function () {},
  "get": function () {},
  "hasClass": function () {},
  "hide": function () {},
  "hideControls": function () {},
  "html": function () {},
  "id": function () {},
  "input": function () {},
  "isModified": function () {},
  "loadPixels": function () {},
  "loop": function () {},
  "mask": function () {},
  "mouseClicked": function () {},
  "mouseMoved": function () {},
  "mouseOut": function () {},
  "mouseOver": function () {},
  "mousePressed": function () {},
  "mouseReleased": function () {},
  "mouseWheel": function () {},
  "noLoop": function () {},
  "onended": function () {},
  "parent": function () {},
  "pause": function () {},
  "pixels": function () {},
  "play": function () {},
  "position": function () {},
  "remove": function () {},
  "removeAttribute": function () {},
  "removeClass": function () {},
  "removeCue": function () {},
  "set": function () {},
  "setModified": function () {},
  "show": function () {},
  "showControls": function () {},
  "size": function () {},
  "speed": function () {},
  "stop": function () {},
  "style": function () {},
  "time": function () {},
  "toggleClass": function () {},
  "touchEnded": function () {},
  "touchMoved": function () {},
  "touchStarted": function () {},
  "updatePixels": function () {},
  "value": function () {},
  "volume": function () {}
};
p5.NumberDict.prototype = {
  "_addObj": function () {},
  "_keyTest": function () {},
  "_validate": function () {},
  "_valueTest": function () {},
  "add": function () {},
  "clear": function () {},
  "create": function () {},
  "div": function () {},
  "get": function () {},
  "hasKey": function () {},
  "maxKey": function () {},
  "maxValue": function () {},
  "minKey": function () {},
  "minValue": function () {},
  "mult": function () {},
  "print": function () {},
  "remove": function () {},
  "saveJSON": function () {},
  "saveTable": function () {},
  "set": function () {},
  "size": function () {},
  "sub": function () {}
};
p5.RenderBuffer.prototype = {
  "_prepareBuffer": function () {}
};
p5.Renderer.prototype = {
  "_applyDefaults": function () {},
  "_isOpenType": function () {},
  "_rotate": function () {},
  "_setProperty": function () {},
  "_translate": function () {},
  "_updateTextMetrics": function () {},
  "addClass": function () {},
  "attribute": function () {},
  "center": function () {},
  "changed": function () {},
  "child": function () {},
  "class": function () {},
  "doubleClicked": function () {},
  "dragLeave": function () {},
  "dragOver": function () {},
  "drop": function () {},
  "get": function () {},
  "hasClass": function () {},
  "hide": function () {},
  "html": function () {},
  "id": function () {},
  "input": function () {},
  "mouseClicked": function () {},
  "mouseMoved": function () {},
  "mouseOut": function () {},
  "mouseOver": function () {},
  "mousePressed": function () {},
  "mouseReleased": function () {},
  "mouseWheel": function () {},
  "parent": function () {},
  "pop": function () {},
  "position": function () {},
  "push": function () {},
  "remove": function () {},
  "removeAttribute": function () {},
  "removeClass": function () {},
  "resize": function () {},
  "show": function () {},
  "size": function () {},
  "style": function () {},
  "text": function () {},
  "textAlign": function () {},
  "textAscent": function () {},
  "textDescent": function () {},
  "textLeading": function () {},
  "textSize": function () {},
  "textStyle": function () {},
  "toggleClass": function () {},
  "touchEnded": function () {},
  "touchMoved": function () {},
  "touchStarted": function () {},
  "value": function () {}
};
p5.Renderer2D.prototype = {
  "_acuteArcToBezier": function () {},
  "_applyDefaults": function () {},
  "_applyTextProperties": function () {},
  "_doFillStrokeClose": function () {},
  "_getFill": function () {},
  "_getPixel": function () {},
  "_getStroke": function () {},
  "_getTintedImageCanvas": function () {},
  "_isOpenType": function () {},
  "_renderText": function () {},
  "_rotate": function () {},
  "_setFill": function () {},
  "_setProperty": function () {},
  "_setStroke": function () {},
  "_translate": function () {},
  "_updateTextMetrics": function () {},
  "addClass": function () {},
  "applyMatrix": function () {},
  "arc": function () {},
  "attribute": function () {},
  "background": function () {},
  "bezier": function () {},
  "blend": function () {},
  "blendMode": function () {},
  "center": function () {},
  "changed": function () {},
  "child": function () {},
  "class": function () {},
  "clear": function () {},
  "curve": function () {},
  "doubleClicked": function () {},
  "dragLeave": function () {},
  "dragOver": function () {},
  "drop": function () {},
  "ellipse": function () {},
  "endShape": function () {},
  "erase": function () {},
  "fill": function () {},
  "get": function () {},
  "hasClass": function () {},
  "hide": function () {},
  "html": function () {},
  "id": function () {},
  "image": function () {},
  "input": function () {},
  "line": function () {},
  "loadPixels": function () {},
  "mouseClicked": function () {},
  "mouseMoved": function () {},
  "mouseOut": function () {},
  "mouseOver": function () {},
  "mousePressed": function () {},
  "mouseReleased": function () {},
  "mouseWheel": function () {},
  "noErase": function () {},
  "parent": function () {},
  "point": function () {},
  "pop": function () {},
  "position": function () {},
  "push": function () {},
  "quad": function () {},
  "rect": function () {},
  "remove": function () {},
  "removeAttribute": function () {},
  "removeClass": function () {},
  "resetMatrix": function () {},
  "resize": function () {},
  "rotate": function () {},
  "scale": function () {},
  "set": function () {},
  "show": function () {},
  "size": function () {},
  "stroke": function () {},
  "strokeCap": function () {},
  "strokeJoin": function () {},
  "strokeWeight": function () {},
  "style": function () {},
  "text": function () {},
  "textAlign": function () {},
  "textAscent": function () {},
  "textDescent": function () {},
  "textLeading": function () {},
  "textSize": function () {},
  "textStyle": function () {},
  "textWidth": function () {},
  "toggleClass": function () {},
  "touchEnded": function () {},
  "touchMoved": function () {},
  "touchStarted": function () {},
  "translate": function () {},
  "triangle": function () {},
  "updatePixels": function () {},
  "value": function () {}
};
p5.RendererGL.prototype = {
  "_applyBlendMode": function () {},
  "_applyColorBlend": function () {},
  "_applyDefaults": function () {},
  "_applyTextProperties": function () {},
  "_arraysEqual": function () {},
  "_bezierCoefficients": function () {},
  "_bezierToCatmull": function () {},
  "_bindBuffer": function () {},
  "_calculateEdges": function () {},
  "_calculateNormals": function () {},
  "_drawArrays": function () {},
  "_drawElements": function () {},
  "_drawImmediateFill": function () {},
  "_drawImmediateStroke": function () {},
  "_drawPoints": function () {},
  "_flatten": function () {},
  "_freeBuffers": function () {},
  "_getColorShader": function () {},
  "_getEmptyTexture": function () {},
  "_getFontShader": function () {},
  "_getImmediateFillShader": function () {},
  "_getImmediateModeShader": function () {},
  "_getImmediatePointShader": function () {},
  "_getImmediateStrokeShader": function () {},
  "_getLightShader": function () {},
  "_getLineShader": function () {},
  "_getNormalShader": function () {},
  "_getPixel": function () {},
  "_getPointShader": function () {},
  "_getRetainedFillShader": function () {},
  "_getRetainedLineShader": function () {},
  "_getRetainedStrokeShader": function () {},
  "_initBufferDefaults": function () {},
  "_initContext": function () {},
  "_initTessy": function () {},
  "_isOpenType": function () {},
  "_isTypedArray": function () {},
  "_processVertices": function () {},
  "_quadraticCoefficients": function () {},
  "_renderText": function () {},
  "_resetContext": function () {},
  "_rotate": function () {},
  "_setAttributeDefaults": function () {},
  "_setFillUniforms": function () {},
  "_setPointUniforms": function () {},
  "_setProperty": function () {},
  "_setStrokeUniforms": function () {},
  "_tesselateShape": function () {},
  "_translate": function () {},
  "_triangulate": function () {},
  "_update": function () {},
  "_updateTextMetrics": function () {},
  "_vToNArray": function () {},
  "addClass": function () {},
  "applyMatrix": function () {},
  "arc": function () {},
  "attribute": function () {},
  "background": function () {},
  "beginShape": function () {},
  "bezier": function () {},
  "bezierVertex": function () {},
  "blendMode": function () {},
  "center": function () {},
  "changed": function () {},
  "child": function () {},
  "class": function () {},
  "clear": function () {},
  "createBuffers": function () {},
  "curve": function () {},
  "curveVertex": function () {},
  "doubleClicked": function () {},
  "dragLeave": function () {},
  "dragOver": function () {},
  "drawBuffers": function () {},
  "drawBuffersScaled": function () {},
  "drop": function () {},
  "ellipse": function () {},
  "endShape": function () {},
  "erase": function () {},
  "fill": function () {},
  "filter": function () {},
  "geometryInHash": function () {},
  "get": function () {},
  "getTexture": function () {},
  "hasClass": function () {},
  "hide": function () {},
  "html": function () {},
  "id": function () {},
  "image": function () {},
  "input": function () {},
  "line": function () {},
  "loadPixels": function () {},
  "mouseClicked": function () {},
  "mouseMoved": function () {},
  "mouseOut": function () {},
  "mouseOver": function () {},
  "mousePressed": function () {},
  "mouseReleased": function () {},
  "mouseWheel": function () {},
  "noErase": function () {},
  "parent": function () {},
  "point": function () {},
  "pop": function () {},
  "position": function () {},
  "push": function () {},
  "quad": function () {},
  "quadraticVertex": function () {},
  "rect": function () {},
  "remove": function () {},
  "removeAttribute": function () {},
  "removeClass": function () {},
  "resetMatrix": function () {},
  "resize": function () {},
  "rotate": function () {},
  "rotateX": function () {},
  "rotateY": function () {},
  "rotateZ": function () {},
  "scale": function () {},
  "show": function () {},
  "size": function () {},
  "stroke": function () {},
  "strokeCap": function () {},
  "strokeJoin": function () {},
  "strokeWeight": function () {},
  "style": function () {},
  "text": function () {},
  "textAlign": function () {},
  "textAscent": function () {},
  "textDescent": function () {},
  "textLeading": function () {},
  "textSize": function () {},
  "textStyle": function () {},
  "textWidth": function () {},
  "toggleClass": function () {},
  "touchEnded": function () {},
  "touchMoved": function () {},
  "touchStarted": function () {},
  "translate": function () {},
  "triangle": function () {},
  "value": function () {},
  "vertex": function () {}
};
p5.Shader.prototype = {
  "_loadAttributes": function () {},
  "_loadUniforms": function () {},
  "_setMatrixUniforms": function () {},
  "bindShader": function () {},
  "bindTextures": function () {},
  "compile": function () {},
  "enableAttrib": function () {},
  "init": function () {},
  "isColorShader": function () {},
  "isLightShader": function () {},
  "isNormalShader": function () {},
  "isStrokeShader": function () {},
  "isTexLightShader": function () {},
  "isTextureShader": function () {},
  "setUniform": function () {},
  "unbindShader": function () {},
  "unbindTextures": function () {},
  "updateTextures": function () {},
  "useProgram": function () {}
};
p5.StringDict.prototype = {
  "_addObj": function () {},
  "_validate": function () {},
  "clear": function () {},
  "create": function () {},
  "get": function () {},
  "hasKey": function () {},
  "print": function () {},
  "remove": function () {},
  "saveJSON": function () {},
  "saveTable": function () {},
  "set": function () {},
  "size": function () {}
};
p5.Table.prototype = {
  "addColumn": function () {},
  "addRow": function () {},
  "clearRows": function () {},
  "findRow": function () {},
  "findRows": function () {},
  "get": function () {},
  "getArray": function () {},
  "getColumn": function () {},
  "getColumnCount": function () {},
  "getNum": function () {},
  "getObject": function () {},
  "getRow": function () {},
  "getRowCount": function () {},
  "getRows": function () {},
  "getString": function () {},
  "matchRow": function () {},
  "matchRows": function () {},
  "removeColumn": function () {},
  "removeRow": function () {},
  "removeTokens": function () {},
  "set": function () {},
  "setNum": function () {},
  "setString": function () {},
  "trim": function () {}
};
p5.TableRow.prototype = {
  "get": function () {},
  "getNum": function () {},
  "getString": function () {},
  "set": function () {},
  "setNum": function () {},
  "setString": function () {}
};
p5.Texture.prototype = {
  "_getTextureDataFromSource": function () {},
  "bindTexture": function () {},
  "init": function () {},
  "setInterpolation": function () {},
  "setWrapMode": function () {},
  "unbindTexture": function () {},
  "update": function () {}
};
p5.TypedDict.prototype = {
  "_addObj": function () {},
  "_validate": function () {},
  "clear": function () {},
  "create": function () {},
  "get": function () {},
  "hasKey": function () {},
  "print": function () {},
  "remove": function () {},
  "saveJSON": function () {},
  "saveTable": function () {},
  "set": function () {},
  "size": function () {}
};
p5.ValidationError.prototype = {
  "name": function () {}
};
p5.Vector.prototype = {
  "add": function () {},
  "angleBetween": function () {},
  "array": function () {},
  "copy": function () {},
  "cross": function () {},
  "dist": function () {},
  "div": function () {},
  "dot": function () {},
  "equals": function () {},
  "heading": function () {},
  "lerp": function () {},
  "limit": function () {},
  "mag": function () {},
  "magSq": function () {},
  "mult": function () {},
  "normalize": function () {},
  "reflect": function () {},
  "rem": function () {},
  "rotate": function () {},
  "set": function () {},
  "setMag": function () {},
  "sub": function () {},
  "toString": function () {}
};
p5.XML.prototype = {
  "addChild": function () {},
  "getAttributeCount": function () {},
  "getChild": function () {},
  "getChildren": function () {},
  "getContent": function () {},
  "getName": function () {},
  "getNum": function () {},
  "getParent": function () {},
  "getString": function () {},
  "hasAttribute": function () {},
  "hasChildren": function () {},
  "listAttributes": function () {},
  "listChildren": function () {},
  "removeChild": function () {},
  "serialize": function () {},
  "setAttribute": function () {},
  "setContent": function () {},
  "setName": function () {}
};
/**********************************************************************
 * End Generated Extern for p5
/**********************************************************************/
