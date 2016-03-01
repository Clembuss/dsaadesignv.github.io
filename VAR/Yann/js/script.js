var TableauPoisNoirs;
var TableauPoisBlancs;
gammedecouleur = ["#3d61e9","#3ee8aa","#ff485e","#fff352","#ffd6da"];
var choixgammedecouleur_rectAPois = gammedecouleur[ Math.floor((Math.random() * 5))];
var choixgammedecouleur_rondAPois = gammedecouleur[ Math.floor((Math.random() * 5))];
var choixgammedecouleur_rectAPois2 = gammedecouleur[ Math.floor((Math.random() * 5))];
var choixgammedecouleur_rectNoir = gammedecouleur[ Math.floor((Math.random() * 5))];
var choixgammedecouleur_fond = gammedecouleur[ Math.floor((Math.random() * 5))];

var Instruction =" Appuyez sur Entrée pour générer des formes et Espace pour enregistrer ";

function setup(){
	createCanvas(windowWidth, windowHeight);
}

function draw(){
	background(choixgammedecouleur_fond);
	noStroke();
	textSize(40);
	textAlign(CENTER);
	textFont(fontBold);
	fill(255);
	text(Instruction,windowWidth/2,windowHeight/2);
	if (keyCode == 13){
		AfficherLesFormes();
	}	else {

	}
}

paramsRond = {
	x : Math.floor((Math.random() * window.innerWidth) + 1),
	y : Math.floor((Math.random() * window.innerHeight) + 1),
	Diametre: Math.floor((Math.random() * window.innerWidth) + 150)
};

paramsRectangleNoirApoisBlanc = {
	x : Math.floor((Math.random() * window.innerWidth) + 1),
	y : Math.floor((Math.random() * window.innerHeight) + 1),
	Largeur: Math.floor((Math.random() * window.innerWidth) + 150),
	Hauteur:Math.floor((Math.random() * window.innerHeight) + 150)
};

paramsRectangleNoir = {
	x : Math.floor((Math.random() * window.innerWidth) + 1),
	y : Math.floor((Math.random() * window.innerHeight) + 1),
	Largeur: Math.floor((Math.random() * window.innerWidth) + 150),
	Hauteur: Math.floor((Math.random() * window.innerHeight) + 150)
};

paramsPoisNoir= {
	x : Math.floor((Math.random() * window.innerWidth) + 1),
	y : Math.floor((Math.random() * window.innerHeight) + 1),
	Largeur: Math.floor((Math.random() * window.innerWidth) + 150),
	Hauteur: Math.floor((Math.random() * window.innerHeight) + 150)
};

paramsOndulation = {
	a : Math.floor((Math.random() * window.innerWidth) + 150),
	b : Math.floor((Math.random() * window.innerWidth) + 300),
	y1: Math.floor((Math.random() * window.innerHeight/2) + 1),
	y2: Math.floor((Math.random() * window.innerHeight/2) + 1),
	y3: Math.floor((Math.random() * window.innerHeight) + 1)
};



var gui = new dat.GUI();
	gui.close();
var f1 = gui.addFolder('Rond');
	f1.add(paramsRond,"x",1,window.innerWidth).listen();
	f1.add(paramsRond,"y",1,window.innerHeight).listen();
	f1.add(paramsRond,"Diametre",1,window.innerWidth).listen();
	f1.close();

var f2 = gui.addFolder('Pois blancs');
	f2.add(paramsRectangleNoirApoisBlanc,"x",1,window.innerWidth).listen();
	f2.add(paramsRectangleNoirApoisBlanc,"y",1,window.innerHeight).listen();
	f2.add(paramsRectangleNoirApoisBlanc,"Largeur",1,window.innerWidth).listen();
	f2.add(paramsRectangleNoirApoisBlanc,"Hauteur",1,window.innerHeight).listen();
	f2.close();

var f3 = gui.addFolder('Rectangle');
	f3.add(paramsRectangleNoir,"x",1,window.innerWidth).listen();
	f3.add(paramsRectangleNoir,"y",1,window.innerHeight).listen();
	f3.add(paramsRectangleNoir,"Largeur",1,window.innerWidth).listen();
	f3.add(paramsRectangleNoir,"Hauteur",1,window.innerHeight).listen();
	f3.close();

var f4 = gui.addFolder('Pois Noirs');
	f4.add(paramsPoisNoir,"x",1,window.innerWidth).listen(); 
	f4.add(paramsPoisNoir,"y",1,window.innerHeight).listen();
	f4.add(paramsPoisNoir,"Largeur",1,window.innerWidth).listen();
	f4.add(paramsPoisNoir,"Hauteur",1,window.innerHeight).listen();
	f4.close();

var f5 = gui.addFolder('Ondulation');
	f5.add(paramsOndulation,"a",1,window.innerWidth).listen(); 
	f5.add(paramsOndulation,"b",1,window.innerWidth).listen();
	f5.add(paramsOndulation,"y1",1,window.innerHeight).listen();
	f5.add(paramsOndulation,"y2",1,window.innerHeight).listen();
	f5.add(paramsOndulation,"y3",1,window.innerHeight).listen();
	f5.close();


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

function Ondulation(a, b, y1, y2, y3){
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
	if(keyCode == 32){
		saveCanvas("imageduswag", "jpg");
	} else if (keyCode == 13){
		FormeEtCouleurAleatoire();
		Instruction = "";
	}
}


function FormeEtCouleurAleatoire(){

	choixgammedecouleur_rectAPois = gammedecouleur[ Math.floor((Math.random() * 5))];
	choixgammedecouleur_rondAPois = gammedecouleur[ Math.floor((Math.random() * 5))];
	choixgammedecouleur_rectAPois2 = gammedecouleur[ Math.floor((Math.random() * 5))];
	choixgammedecouleur_rectNoir = gammedecouleur[ Math.floor((Math.random() * 5))];
	choixgammedecouleur_fond = gammedecouleur[ Math.floor((Math.random() * 5))];


	paramsRond.x = Math.floor((Math.random() * window.innerWidth) + 1);
	paramsRond.y = Math.floor((Math.random() * window.innerHeight) + 1);
	paramsRond.Diametre = Math.floor((Math.random() * window.innerWidth) + 150);

	paramsRectangleNoirApoisBlanc.x = Math.floor((Math.random() * window.innerWidth) + 1);
	paramsRectangleNoirApoisBlanc.y = Math.floor((Math.random() * window.innerHeight) + 1);
	paramsRectangleNoirApoisBlanc.Largeur = Math.floor((Math.random() * window.innerWidth) + 150);
	paramsRectangleNoirApoisBlanc.Hauteur = Math.floor((Math.random() * window.innerHeight) + 150);

	paramsRectangleNoir.x = Math.floor((Math.random() * window.innerWidth) + 1);
	paramsRectangleNoir.y = Math.floor((Math.random() * window.innerHeight) + 1);
	paramsRectangleNoir.Largeur = Math.floor((Math.random() * window.innerWidth) + 150);
	paramsRectangleNoir.Hauteur = Math.floor((Math.random() * window.innerHeight) + 150);

	paramsPoisNoir.x = Math.floor((Math.random() * window.innerWidth) + 1);
	paramsPoisNoir.y = Math.floor((Math.random() * window.innerHeight) + 1);
	paramsPoisNoir.Largeur = Math.floor((Math.random() * window.innerWidth) + 150);
	paramsPoisNoir.Hauteur = Math.floor((Math.random() * window.innerHeight) + 150);

	paramsOndulation.a = Math.floor((Math.random() * window.innerWidth) + 150);
	paramsOndulation.b = Math.floor((Math.random() * window.innerWidth) + 300);
	paramsOndulation.y1 = Math.floor((Math.random() * window.innerHeight/2) + 1);
	paramsOndulation.y2 = Math.floor((Math.random() * window.innerHeight/2) + 1);
	paramsOndulation.y3 = Math.floor((Math.random() * window.innerHeight) + 1);

}


function AfficherLesFormes(){
	rectAPoisNoir(
		paramsPoisNoir.x,
		paramsPoisNoir.y,
		paramsPoisNoir.Largeur,
		paramsPoisNoir.Hauteur,
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
	Ondulation(
		paramsOndulation.a,
		paramsOndulation.b,
		paramsOndulation.y1,
		paramsOndulation.y2,
		paramsOndulation.y3
	)

}



var fontBold;
function preload() {
   fontBold = loadFont("font/BebasNeueBold.otf");
}