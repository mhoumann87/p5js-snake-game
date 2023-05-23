function Snake() {
  this.x = 0;
  this.y = 0;
  this.xSpeed = 0;
  this.ySpeed = 0;

  this.update = function () {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  };

  this.show = function () {
    fill(255);
    rect(this.x, this.y, 10, 10);
  };
}
