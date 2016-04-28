var params = {
  fondCouleur : "#FFFFFF",
  traitCouleur : "#000000",
  epaisseur : 3,
  taille : 5,
  vitesse : 50,
  densité : 10,
  angleMotif : 90,
  écart : 2
};

var gui = new dat.GUI();
gui.add(params,'epaisseur', 0.5, 10);
gui.add(params, 'taille', 1, 40);
//gui.add(params, 'vitesse', 1, 100);
gui.add(params, 'densité', 1, 60);
gui.add(params, 'écart', 1, 10);
gui.add(params, 'angleMotif', 1, 360);
gui.addColor(params,'fondCouleur', 10, 40);
gui.addColor(params,'traitCouleur', 10, 40);


function setup() {
  createCanvas(windowWidth,windowHeight);
}
 
function draw() {
  background(params.fondCouleur);
  stroke(params.traitCouleur);
  

  translate(width/2, height/2);
  for (var i = 0; i < 360; i+=params.écart) {
    for (var q = 0; q < 360; q+=params.angleMotif) {
      var x = map(sin(radians(q+i+params.vitesse))*i, - params.densité, params.densité*2, i, -i);
      var y = map(cos(radians(q+i+params.vitesse))*i, - params.densité, params.densité*2, -i, i);
       
      var x2 = map(sin(radians(q+i+6+frameCount/2))*(i+6), -params.taille/2, params.taille, i+6, -(i+6));
      var y2 = map(cos(radians(q+i+6+frameCount/2))*(i+6), -params.taille/2, params.taille, -(i+6), i+6);
      strokeWeight(params.epaisseur);
      line(x, y, x2, y2);
      line(-x, -y, -x2, -y2);
      
      strokeWeight(params.epaisseur/4); 
      line(y, x, y2, x2);
      line(-y, -x, -y2, -x2);
      
      
      
    }
  }
}


//// CARRE ////


// var params = {
//   bgColor : "#e3e3e3",
//   color : "#FFFFFF",
//   strokeColor : "#000000",
//   strokeW : 3,
//   size : 5,
//   speed : 50,
//   ecart : 40,
//   prevEcart: 40,
//   agentW : 20
// };

// var gui = new dat.GUI();
// gui.add(params,'ecart', 20, 100);
// gui.add(params,'strokeW', 0.5, 10);
// gui.add(params, 'size', 1, 40);
// gui.add(params, 'speed', 1, 100);
// gui.add(params, 'agentW', 1, 60);
// gui.addColor(params,'bgColor', 10, 40);
// gui.addColor(params,'strokeColor', 10, 40);
// gui.addColor(params,'color', 10, 100);


// function setup () {
//   createCanvas(windowWidth, windowHeight);
//   smooth();
   
//   rectMode (CENTER);
// }
 
// function draw ()
// {
//   background (0);
//   drawRaster();
// }
 
// function drawRaster ()
// {
//   var rows = params.agentW;
//   var columns = 30;
//   var mySquare = 15;
 
//   var margin = 15;      // abstand zum Fensterrand
 
//   var totalSpaceWidth = width - 2*margin;
//   var totalSpaceHeight = height - 2*margin;
 
//   var  stepsX = (totalSpaceWidth) / columns;
//   var stepsY = (totalSpaceHeight) / rows;
 
//   var  maxDistance = dist(margin, margin, width/2, height/2);
 
//   var i = 0;
 
//   while (i < rows)
//   {
//     var j = 0;
//     while (j < columns)
//     {
//       var y = margin + mySquare /2 + i * (stepsY) ;
//       var x = margin + mySquare /2  + j*(stepsX);
 
//       var distance = dist (x, y, width/2, height/2);
//       var s = map (distance, 0, maxDistance, 2, mySquare);
//       var angle = map (distance, 0, maxDistance, PI/2, 0);
 
//       // rechteck ----------------------------
//       fill (244,203,200);
//       stroke (params.strokeColor);
//       strokeWeight (params.strokeW);
 
//       push();
//       translate (x, y);
//       rotate (angle);
//       rect (0, 0, params.size*s, params.size*s);
//       pop();
 
//       j = j +1;
//     }
 
//     i = i + 1;
//   }
// }







//// CERCLE ////

// var startRadius;
// var endRadius;
 
// var noiseScale = 300;
// var num = 30;
 
// var m = 0;
 
// function setup() {
//   createCanvas(600, 600);
 
//   startRadius = random (width/2-50);
//   endRadius = random (width/2-50);
 
//   frameRate (30);
// }
 
 
 
 
// function draw() {
//   fill (255, 233, 80);
//   noStroke();
//   rect (0, 0, width, height);
 
//   fill (0);
//   noStroke();
 
//   var rad = lerp (startRadius, endRadius, sin (m));
   
//   if (mousePressed && mouseButton == LEFT) num = map (mouseX, 0, width, 1, 200);
//   else if (mousePressed && mouseButton == RIGHT) noiseScale = map (mouseY, 0, height, 1, 500);
 
//   var i = 0;
//   while (i < num)
//   {
//     var angle = noise (frameCount / noiseScale) * TWO_PI + map (i, 0, num, 0, TWO_PI);
//     var x = width/2 + cos (angle) * rad;
//     var y = height/2 + sin (angle) * rad;
 
//     ellipse (x, y, 10, 10);
//     i = i+1;
//   }
 
//   m+= 0.02;
 
//   if (m >= PI/2)
//   {
//     m = 0;
//     startRadius = endRadius;
//     endRadius = random (width/2-50);
//   }
// }

// function mousePressed() {
// }

