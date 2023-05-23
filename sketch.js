let s;

function setup() {
  const canvas = createCanvas(600, 600);
  canvas.parent('canvas');

  s = new Snake();
}

function draw() {
  background(0);

  s.update();
  s.show();
}
