// Variable for the snake, starting position and size
let snake;
let posX = 0;
let posY = 0;
const size = 10;

function setup() {
  // Create the canvas and put it in a div on the page
  const canvas = createCanvas(600, 600);
  canvas.parent('canvas');

  // Create a new snake
  snake = new Snake(posX, posY, size);
}

function draw() {
  background(51);

  // Use the keyPressed function to move the snake
  keyPressed();
  snake.update();
  snake.show();
}

// Use the arrow keys to change the direction of the snake
function keyPressed() {
  // Use `keyCodes` to set direction
  if (keyCode === UP_ARROW) {
    snake.dir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    snake.dir(0, 1);
  } else if (keyCode === RIGHT_ARROW) {
    snake.dir(1, 0);
  } else if (keyCode === LEFT_ARROW) {
    snake.dir(-1, 0);
  }
}
