let x = 85
let y = 90

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(300);
  line (30, 20, 85, 20);
  strokeWeight (10);
  stroke (255,192,203);
  
  line (85, 20, 85, 70);
  line (85, 75, 30, 75);
  line (85, 150, 30, 75);
  
  rect (85, 150, 40, 60);
  fill (255,192,203);
  
  square (x, 170, 10);
  square (y, 200, 10);
  
x = x +5
  y = y + 5
  
if (x > width) {
  x = 85
}
if (y > width) {
  y = 86
}
  arch(85, 310, 120, 40)
  arch (185, 310, 120, 40)
  arch (285, 310, 120, 40)
  arch (-15, 310, 120, 40)
  arch (385, 310, 120, 40)
}

function arch (xPos, yPos, body, head) {
  rect (xPos, yPos, 40, body);
  circle (xPos + 20, yPos, 40);
}

 