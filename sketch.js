var font;
var vehicles = [];

function preload() {
  font = loadFont('assets/RobotoMono-Bold.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
  textAlign(CENTER);
}


function draw() {

  var mx = map(mouseX,0,windowWidth,0,255);
  var my = map(mouseY,0,windowHeight,0,255);
  var a = sin(radians(frameCount)) * mx;
  var b = sin(radians(frameCount)) * my;
  var c = cos(radians(frameCount))*100;

  background(a,b,c);
  fill(-a,-b,-c);
  push();
  noStroke();
  textFont(font);
  text('CLICK FOR TIME', windowWidth/2,windowHeight-50,110);
  pop();


  for (var i = 0; i < vehicles.length; i = i = i + 1) {
    var v = vehicles[i];
    v.behaviors();
    v.update();
    v.show();
  }


}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mousePressed(){

  var timeH = hour();
  var timeM = minute();

var points = font.textToPoints(timeH+':'+timeM, 100, windowHeight/2+100, 400, {
  sampleFactor: 0.5
});

for (var i = 0; i < points.length; i++) {
  var pt = points[i];
  var vehicle = new Vehicle(pt.x, pt.y);
  vehicles.push(vehicle);
}

  redraw();
}
