var number = 1;
var last,last2;
var number = 1;
var last,last2;
var[] fibs= new var [1];
 
var px,py,r,degree;
var[] xpos = new var[0];
var[] ypos = new var[0];
 
var spacing = 6;
var startWeight = 2;
var maxWeight = 5;
var weight = startWeight;
var guldenSnede = ((sqrt(5) - 1 ) / 2);
 
var lastX, lastY;
 
function setup()
{
  size(1280, 800);
  background(255);
  smooth();
  stroke(0);
  frameRate(30);
  px = width/2;
  py = height/2;
}

function draw()
{
    lastX = px;
    lastY = py;
    degree = (frameCount * guldenSnede) * 360;
    r = sqrt(frameCount)*spacing;
    calculatePoint(width/2, height/2, r, (degree % 360));
    strokeWeight(weight);
    point(px,py);
    //line(lastX, lastY, px,py);
    weight += 0.00015;
    println(degree % 360);
    //spacing += 0.00075;
}
 
function calculatePoint(_x, _y, _r, _graden){
  px = x + cos(radians(_graden))*(r/2);
  py = y + sin(radians(_graden))*(r/2);
}
[] fibs= new float [1];
 
var px,py,r,degree;
var[] xpos = new var[0];
var[] ypos = new var[0];
 
var spacing = 6;
var startWeight = 2;
var maxWeight = 5;
var weight = startWeight;
var guldenSnede = ((sqrt(5) - 1 ) / 2);
 
var lastX, lastY;
 
function setup()
{
  size(1280, 800);
  background(255);
  smooth();
  stroke(0);
  frameRate(30);
  px = width/2;
  py = height/2;
}
 
function draw()
{
    lastX = px;
    lastY = py;
    degree = (frameCount * guldenSnede) * 360;
    r = sqrt(frameCount)*spacing;
    calculatePoint(width/2, height/2, r, (degree % 360));
    strokeWeight(weight);
    point(px,py);
    //line(lastX, lastY, px,py);
    weight += 0.00015;
    println(degree % 360);
    //spacing += 0.00075;
}
 
function calculatePoint(_x, _y, _r, _graden){
  px = x + cos(radians(_graden))*(r/2);
  py = y + sin(radians(_graden))*(r/2);
}
