// Use a class for the snake

class Snake {
  // Create and initializes the snake
  constructor(_x, _y, _size) {
    // Place the starting point for the snake
    this.x = _x;
    this.y = _y;
    // Set the size
    this.size = _size;
    // Set the speed for the snake
    this.xSpeed = 0;
    this.ySpeed = 0;
  }

  // Move the snake
  update() {
    this.x = this.xSpeed;
    this.y = this.ySpeed;
  }

  // Display the snake
  show() {
    fill(255);
    rect(this.x, this.y, this.size, this.size);
  }

  dir(x, y) {
    this.xSpeed += x;
    this.ySpeed += y;
  }
}
