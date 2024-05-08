class Snake {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.xSpeed = 0;
    this.ySpeed = 0;
    this.size = 20;
  }

  update() {
    // Add speed to the "snake"
    this.x += this.xSpeed * this.size;
    this.y += this.ySpeed * this.size;

    this.x = constrain(this.x, 0, width - this.size);
    this.y = constrain(this.y, 0, height - this.size);
  }

  show() {
    rect(this.x, this.y, this.size, this.size);
  }

  dir(x, y) {
    this.xSpeed = x;
    this.ySpeed = y;
  }
}
