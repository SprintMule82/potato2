let size = 20;

function setup() {
  createCanvas(1000, 800);
}

function draw() {
  if (mouseIsPressed) {
    fill(200, 234, 5 );
    ellipse(mouseX, mouseY, size, size);
  }
}

function keyPressed() {
  switch(keyCode) {
    case 32:
      background(255);
      break;
    case UP_ARROW:
      size += 10;
      break;
    case DOWN_ARROW:
      size -= 10;
      break;
    default:
      break;
  }
}1
