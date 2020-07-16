export class BoxSettings {
  constructor({
    height,
    width,
    top,
    left,
    heightAdjust,
    widthAdjust,
    topOffset,
    leftOffset,
  }) {
    this.height = height + heightAdjust;
    this.width = width + widthAdjust;
    this.top = top - topOffset - heightAdjust / 2;
    this.left = left - leftOffset - widthAdjust / 2;
  }
}
