
function consoleLogMat(mat,width) {
    let canvas = document.createElement("canvas");
    cv.imshow(canvas, mat);
    consoleLogCanvas(canvas,width);
}

function consoleLogCanvas(canvas,width) {
    let dataUrl = canvas.toDataURL('image/png');
    if (typeof width === 'undefined') {
        width = canvas.width;
    }
    let rasio = canvas.height / canvas.width
    consoleLogDataUrl(dataUrl,width,rasio);
}

function consoleLogDataUrl(dataUrl,width,rasio) {
    if (typeof width === 'undefined') {
        width = 800;
    }
    if (typeof rasio === 'undefined') {
        rasio = 9.0 / 16.0;
    }
    let paddingh = width / 2.0;
    let paddingv = paddingh * rasio;
    console.log('%c ', `
      font-size: 0;
      padding: ${paddingv}px ${paddingh}px;
      background-image: url(${dataUrl});
      background-size: contain;
      background-repeat: no-repeat;
      border: solid 1px red;
    `);
}

