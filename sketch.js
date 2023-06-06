let s;
let posX = 0;
let posY = 0;
const size = 10;

function setup() {
  const canvas = createCanvas(600, 600);
  canvas.parent('canvas');

  s = new Snake(posX, posY, size);
}

function draw() {
  background(0);

  s.update();
  s.show();
}
