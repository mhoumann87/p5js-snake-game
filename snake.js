class Snake {
  constructor(_x, _y, _size) {
    this.x = _x;
    this.y = _y;
    this.size = _size;
    this.xSpeed = 0;
    this.ySpeed = 0;
  }

  update() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }

  show() {
    fill(255);
    rect(this.x, this.y, this.size, this.size);
  }
}
