export default class Collage {
  constructor (cells, finalWidth, finalHeight) {
    this.cells = cells;
    this.finalCanvasWidth = finalWidth;
    this.finalCanvasHeight = finalHeight;
    this.cellWidth = this.finalCanvasWidth / this.cells;
    this.subCanvases = [];

    this.init();
  }

  init () {
    for (let i = 0; i < this.cells; i++) {
      this.createSubCanvas(i);
    }

    const finalCanvas = doument.createElement('canvas');
    finalCanvas.setAttribute('id', 'finalCanvas');
    finalCanvas.width = this.finalCanvasWidth;
    finalCanvas.height = this.finalCanvasHeight;
    finalCanvas.style.display = 'none';
    document.body.appendChild(finalCanvas);
  }

  createSubCanvas(i) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.setAttribute('id', `canvas${i}`);
    canvas.width = this.cellWidth;
    canvas.height = this.finalCanvasHeight;
    document.body.appendChild(canvas);
    const subCanvas = {canvas: canvas, ctx: ctx, imageId: null};
    this.subCanvases.push(subCanvas);
  }

  addImage (imageId, cell) {
    const canvas = this.subCanvases[cell - 1].canvas;
    const ctx = this.subCanvases[cell - 1].ctx;
    this.subCanvases[cell - 1].imageId = imageId;
    const imgSrc = `http://proxy.topixcdn.com/ipicimg/${imgID}-rszh${canvas.height}`;
    const img = new Image();
    img.style.display = 'none';
    img.onload = () => {
      Collage.drawImageProp(ctx, img, 0, 0, canvas.width, canvas.height, 0.0, 0.0); // add vars for these offsets
    }
    img.src = imgSrc;
  }

  removeImage (cell) {
    const canvas = this.subCanvases[cell - 1].canvas;
    const ctx = this.subCanvases[cell - 1].ctx;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.subCanvases[cell - 1].imageId = null;
  }

  changeXOffset () {
    // remove previous image
    // redraw with new coordinates
  }

  resizeImageHeight(cell) {
    const canvas = this.subCanvases[cell - 1];
    this.removeImage(cell);
    this.addImage(this.subCanvases[cell - 1].imageId, cell); // with different rszh value
  }

  swapImages (cell1, cell2) {
    const img1 = this.subCanvases[cell1 - 1].imageId;
    const img2 = this.subCanvases[cell2 - 1].imageId;
    this.removeImage(cell1);
    this.remoteImage(cell2);
    this.addImage(cell1, img2);
    this.addImage(cell2, img1);
  }

  removeCell () {
    // delete rightmost image and resize remaining (redraw)
  }

  addCell () {
    // add new cell to right side and resize remaining (redraw)
  }

  exportFinalImage () {
    try {
      // export image
    } catch (err) {
      // tainted canvas!
    }
  }

  static drawImageProp (ctx, img, x, y, w, h, offsetX, offsetY) {
    if (arguments.length === 2) {
      x = y = 0;
      w = ctx.canvas.width;
      h = ctx.canvas.height;
    }

    /// default offset is center
    offsetX = typeof offsetX === 'number' ? offsetX : 0.5;
    offsetY = typeof offsetY === 'number' ? offsetY : 0.5;

    /// keep bounds [0.0, 1.0]
    if (offsetX < 0) offsetX = 0;
    if (offsetY < 0) offsetY = 0;
    if (offsetX > 1) offsetX = 1;
    if (offsetY > 1) offsetY = 1;

    var iw = img.width,
    ih = img.height,
    r = Math.min(w / iw, h / ih),
    nw = iw * r,   /// new prop. width
    nh = ih * r,   /// new prop. height
    cx, cy, cw, ch, ar = 1;

    /// decide which gap to fill
    if (nw < w) ar = w / nw;
    if (nh < h) ar = h / nh;
    nw *= ar;
    nh *= ar;

    /// calc source rectangle
    cw = iw / (nw / w);
    ch = ih / (nh / h);

    cx = (iw - cw) * offsetX;
    cy = (ih - ch) * offsetY;

    /// make sure source rectangle is valid
    if (cx < 0) cx = 0;
    if (cy < 0) cy = 0;
    if (cw > iw) cw = iw;
    if (ch > ih) ch = ih;

    /// fill image in dest. rectangle
    ctx.drawImage(img, cx, cy, cw, ch,  x, y, w, h);
  }
}