var agents;

var params = {
	agentW : 10,
	bgColor : "#e3e3e3",
	strokeColor : "#FFFFFF",
	strokeW : 3,
	ecart : 20,
	speed : 50,
};

var gui = new dat.GUI();
gui.add(params,'agentW', 10, 100);
gui.add(params,'ecart', 10, 100);
gui.add(params,'speed', 10, 200);
gui.add(params,'strokeW', 0.5, 10);
gui.addColor(params,'bgColor', 10, 40);
gui.addColor(params,'strokeColor', 10, 40);


function setup(){
	createCanvas( windowWidth, windowHeight );
	frameRate(255);
	initialize();
}

function initialize() {
	agents = [];
	for (var x = 0; x < width; x += params.ecart) {
		for (var y = 0; y < height; y += params.ecart) {
			agents.push (new Agent(x, y, params.agentW));
		}
	}
}

function draw() {
	background (params.bgColor);
	stroke(params.strokeColor);
	strokeWeight (params.strokeW);
	noFill();


	for(var index = 0; index < agents.length; index ++) {
		agents[index].update();
		agents[index].display();
	}
}

var Agent = function( _x, _y, _w){
	this.x = _x;
	this.y = _y;
	this.w = _w;	
	this.n = 0;		
}

Agent.prototype.update = function(){
	this.n = noise( this.x / 150, this.y / 150, frameCount / params.speed);	// noise variation de 0 à 1
}

 Agent.prototype.display = function(){
	 push();
	 translate( this.x + this.w / 2, this.y + this.w / 2); //déplacement du point d'origine à chaque fois
	 	//rotate( TWO_PI * this.n );
	rotate( 2 * TWO_PI * this.n ); // 2 fois plus vite
	line(0,0, params.agentW,0)
	pop();
 }






