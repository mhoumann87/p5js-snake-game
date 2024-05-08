let snake;

function setup() {
  createCanvas(600, 600);

  // Create a snake
  snake = new Snake();

  // Set the framerate for the canvas
  frameRate(10); // TODO change this
}

function draw() {
  background(0);

  keyPressed();
  snake.update();
  snake.show();
}

// Function to move the snake based on the key pressed
function keyPressed() {
  switch (keyCode) {
    case UP_ARROW:
      snake.dir(0, -1);
      break;
    case DOWN_ARROW:
      snake.dir(0, 1);
      break;
    case RIGHT_ARROW:
      snake.dir(1, 0);
      break;
    case LEFT_ARROW:
      snake.dir(-1, 0);
      break;
  }
}
