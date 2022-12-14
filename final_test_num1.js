let src = cv.imread('canvasInput');
let dst = cv.Mat.zeros(src.cols, src.rows, cv.CV_8UC3);
cv.putText(dst, "circle", {x:70,y:90}, cv.FONT_HERSHEY_SIMPLEX, 0.5, [0, 255,0,0], 1)
cv.putText(dst, "rectangle", {x:250,y:90}, cv.FONT_HERSHEY_SIMPLEX, 0.5, [0, 255,0,0], 1)
cv.putText(dst, "pentagon", {x:140,y:160}, cv.FONT_HERSHEY_SIMPLEX, 0.5, [0, 255,0,0], 1)
cv.putText(dst, "triangle", {x:50,y:250}, cv.FONT_HERSHEY_SIMPLEX, 0.5, [0, 255,0,0], 1)
cv.putText(dst, "hexagon", {x:250,y:230}, cv.FONT_HERSHEY_SIMPLEX, 0.5, [0, 255,0,0], 1)
cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY, 0);
cv.threshold(src, src, 200, 200, cv.THRESH_BINARY);
let contours = new cv.MatVector();
let hierarchy = new cv.Mat();
// You can try more different parameters
cv.findContours(src, contours, hierarchy, cv.RETR_CCOMP, cv.CHAIN_APPROX_SIMPLE);
// draw contours with random Scalar
for (let i = 0; i < contours.size(); ++i) {
    let color = new cv.Scalar(Math.round(Math.random() * 255), Math.round(Math.random() * 255),
                              Math.round(Math.random() * 255));
    cv.drawContours(dst, contours, i, color, 3, cv.LINE_8, hierarchy, 100);
}
cv.imshow('canvasOutput', dst);
src.delete(); dst.delete(); contours.delete(); hierarchy.delete();
