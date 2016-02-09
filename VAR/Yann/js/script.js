var TableauPoisNoirs;
var TableauPoisBlancs;
gammedecouleur = ["#3d61e9","#3ee8aa","#ff485e","#fff352","#ffd6da"];
var choixgammedecouleur_rectAPois = gammedecouleur[ Math.floor((Math.random() * 5))];
var choixgammedecouleur_rondAPois = gammedecouleur[ Math.floor((Math.random() * 5))];
var choixgammedecouleur_rectAPois2 = gammedecouleur[ Math.floor((Math.random() * 5))];
var choixgammedecouleur_rectNoir = gammedecouleur[ Math.floor((Math.random() * 5))];
var choixgammedecouleur_fond = gammedecouleur[ Math.floor((Math.random() * 5))];

function setup(){
	createCanvas(windowWidth, windowHeight);
}

function draw(){
	background(choixgammedecouleur_fond);
	noStroke();
	rectAPoisNoir(
		paramsRectangleApoisNoir.x,
		paramsRectangleApoisNoir.y,
		paramsRectangleApoisNoir.Largeur,
		paramsRectangleApoisNoir.Hauteur,
		15,
		30,
		color(255),
		color(0)
	);

	rondAPois(
		paramsRond.x,
		paramsRond.y,
		paramsRond.Diametre,
		5,
		15,
		color(choixgammedecouleur_rondAPois),
		color(255)
	);

	rectAPois(
		paramsRectangleNoirApoisBlanc.x,
		paramsRectangleNoirApoisBlanc.y,
		paramsRectangleNoirApoisBlanc.Largeur,
		paramsRectangleNoirApoisBlanc.Hauteur,
		30,
		60,
		color(choixgammedecouleur_rectAPois),
		color(255)
	);

	rectNoir(
		paramsRectangleNoir.x,
		paramsRectangleNoir.y,
		paramsRectangleNoir.Largeur,
		paramsRectangleNoir.Hauteur,
		color(choixgammedecouleur_rectNoir)
	);

	fill(255);
	RectangleAvecVague(
		paramsRectangleVague.a,
		paramsRectangleVague.b,
		paramsRectangleVague.y1,
		paramsRectangleVague.y2,
		paramsRectangleVague.y3
	)
}

var paramsRond = {
	x : Math.floor((Math.random() * window.innerWidth) + 1),
	y : Math.floor((Math.random() * window.innerHeight) + 1),
	Diametre: Math.floor((Math.random() * window.innerWidth) + 150)
};

var paramsRectangleNoirApoisBlanc = {
	x : Math.floor((Math.random() * window.innerWidth) + 1),
	y : Math.floor((Math.random() * window.innerHeight) + 1),
	Largeur: Math.floor((Math.random() * window.innerWidth) + 150),
	Hauteur:Math.floor((Math.random() * window.innerHeight) + 150)
};

var paramsRectangleNoir = {
	x : Math.floor((Math.random() * window.innerWidth) + 1),
	y : Math.floor((Math.random() * window.innerHeight) + 1),
	Largeur: Math.floor((Math.random() * window.innerWidth) + 150),
	Hauteur: Math.floor((Math.random() * window.innerHeight) + 150)
};

var paramsRectangleApoisNoir = {
	x : Math.floor((Math.random() * window.innerWidth) + 1),
	y : Math.floor((Math.random() * window.innerHeight) + 1),
	Largeur: Math.floor((Math.random() * window.innerWidth) + 150),
	Hauteur: Math.floor((Math.random() * window.innerHeight) + 150)
};

var paramsRectangleVague = {
	a : Math.floor((Math.random() * window.innerWidth) + 150),
	b : Math.floor((Math.random() * window.innerWidth) + 300),
	y1: Math.floor((Math.random() * window.innerHeight/2) + 1),
	y2: Math.floor((Math.random() * window.innerHeight/2) + 1),
	y3: Math.floor((Math.random() * window.innerHeight) + 1)
};

var gui = new dat.GUI();
var f1 = gui.addFolder('Rond noir à pois');
	f1.add(paramsRond,"x",1,window.innerWidth);
	f1.add(paramsRond,"y",1,window.innerHeight);
	f1.add(paramsRond,"Diametre",1,window.innerWidth);
	f1.open();

var f2 = gui.addFolder('Pois blancs');
	f2.add(paramsRectangleNoirApoisBlanc,"x",1,window.innerWidth);
	f2.add(paramsRectangleNoirApoisBlanc,"y",1,window.innerHeight);
	f2.add(paramsRectangleNoirApoisBlanc,"Largeur",1,window.innerWidth);
	f2.add(paramsRectangleNoirApoisBlanc,"Hauteur",1,window.innerHeight);
	f2.open();

var f3 = gui.addFolder('Rectangle');
	f3.add(paramsRectangleNoir,"x",1,window.innerWidth);
	f3.add(paramsRectangleNoir,"y",1,window.innerHeight);
	f3.add(paramsRectangleNoir,"Largeur",1,window.innerWidth);
	f3.add(paramsRectangleNoir,"Hauteur",1,window.innerHeight);
	f3.open();

var f4 = gui.addFolder('Pois Noirs');
	f4.add(paramsRectangleApoisNoir,"x",1,window.innerWidth); 
	f4.add(paramsRectangleApoisNoir,"y",1,window.innerHeight);
	f4.add(paramsRectangleApoisNoir,"Largeur",1,window.innerWidth);
	f4.add(paramsRectangleApoisNoir,"Hauteur",1,window.innerHeight);
	f4.open();

var f5 = gui.addFolder('Rectangle avec Vague');
	f5.add(paramsRectangleVague,"a",1,window.innerWidth); 
	f5.add(paramsRectangleVague,"b",1,window.innerWidth);
	f5.add(paramsRectangleVague,"y1",1,window.innerHeight);
	f5.add(paramsRectangleVague,"y2",1,window.innerHeight);
	f5.add(paramsRectangleVague,"y3",1,window.innerHeight);
	f5.open();


function rectAPois( x, y, w, h, poisWeight, ecart, bgColor, poisColor ){
	noStroke();
	fill(bgColor);
	rect(x,y,w,h);

	fill(poisColor);
	for( var x1 = 0; x1 <= w; x1 += ecart ){
		for( var y1 = 0; y1 <= h; y1 += ecart ){
			ellipse( x+x1, y+y1, poisWeight, poisWeight );
		}
	}
}

function rondAPois( x, y, diam, poisWeight, ecart, bgColor, poisColor ){
	noStroke();
	fill(bgColor);
	ellipse(x,y,diam,diam);

	fill(poisColor);
	for( var x1 = - diam / 2; x1 <= diam / 2; x1 += ecart ){
		for( var y1 = - diam / 2; y1 <= diam / 2; y1 += ecart ){
			if( dist( x, y, x + x1, y + y1 ) < diam / 2 ) ellipse( x + x1, y + y1, poisWeight, poisWeight );
		}
	}
}

function rectNoir( x, y, w, h, bgColor){
	noStroke();
	fill(bgColor);
	rect(x,y,w,h);
}

function rectAPoisNoir( x, y, w, h, poisWeight, ecart, bgColor, poisColor ){
	noStroke();
	fill(bgColor);
	rect(x,y,w,h);

	fill(poisColor);
	for( var x1 = 0; x1 <= w; x1 += ecart ){
		for( var y1 = 0; y1 <= h; y1 += ecart ){
			ellipse( x+x1, y+y1, poisWeight, poisWeight );
		}
	}
}

function RectangleAvecVague(a, b, y1, y2, y3){
var c = ((b-a)/4)+a;
var d = c+((b-a)/4);
var e = d +((b-a)/4);
beginShape();
  vertex(a, y1);
  bezierVertex(((c-a)/2)+a, y1, ((c-a)/2)+a, y2, c, y2);
  bezierVertex(((d-c)/2)+c, y2, ((d-c)/2)+c, y1, d, y1);
  bezierVertex(((e-d)/2)+d, y1, ((e-d)/2)+d, y2, e, y2);
  bezierVertex(((b-e)/2)+e, y2, ((b-e)/2)+e, y1, b, y1);
  vertex(b,y1);
  vertex(b,y3);
  vertex(a,y3);
  vertex(a,y1);
endShape();
}


function keyPressed(){
	if(keyCode == ENTER){
		saveCanvas("imageduswag", "jpg");
	}
}