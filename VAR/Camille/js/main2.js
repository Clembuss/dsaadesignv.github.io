var params ={
	bgColor : "#FFFFFF",

	agentW : 50,
	ecart : 20

};

var gui = new dat.GUI();
gui.add( params, 'ecart', 10, 100 );
gui.add( params, 'agentW', 10, 40 );
gui.addColor( params, 'bgColor' );


var agents, img;

function preload(){
	img = loadImage( "data/img.jpg");
}


function setup(){
	createCanvas( 1135, 800 );

	initialize();

}

function initialize(){
	agents = [];

	for (var x = 0; x < width; x = x += params.ecart ){
		for( var y = 0; y < height; y = y + params.ecart ){
			var imgX = int( map( x, 0, width, 0, img.width ) );
			var imgY = int( map( y, 0, height, 0, img.height ) );
			agents.push( new Agent( x, y, params.agentW, img.get( imgX, imgY ) ) );
		}
	}

}

function draw(){
	background( params.bgColor );
	//image( img, mouseX, mouseY );
	// stroke(3);
	// stroke( params.agColor );

	for( var index = 0; index < agents.length; index ++ ){
		agents[ index ].update();
		strokeWeight(agents[ index ].n * 5 );
		agents[ index ].display();
	}	

/*	camera(mouseX, mouseY, sin(frameCount * 0.01) * 100);
 	plane(120, 120);

  	rotateX(frameCount * 0.01);
 	rotateY(frameCount * 0.01);
  	box(random(width), random(height), 20);
}*/
	
}

var Agent = function( _x, _y, _w, _color ){
	this.x = _x;
	this.y = _y;
	this.color = _color;
	this.brightness = brightness( this.color );
	this.w = _w; //taille
	this.n = 0; //noise pour angle de rotation
}

Agent.prototype.update = function(){
	this.n = noise( this.x / 250, this.y / 250, frameCount / 50 );
}



Agent.prototype.display = function(){
	push();
		translate( this.x + this.w / 2, this.y + this.w / 2);
		rotate( 2 * TWO_PI * (this.brightness / 255) );
		stroke(0);
		line( 0, 0, this.w, 0 );

		// if( this.x < 640 ){
		// 	fill(0,39,70);
		// 	line(10);
		// }
	pop();
}


function keyPressed(){
	if( key == 's'  ){
		saveCanvas("###", "png");
	}
}

function mousePressed(){
	//params.agentsW = random( 10, 100 );
	//params.ecart = int(random( 10, 40 ));
	initialize();
}

function windowsResized(){
	resizeCanvas( windowWidth, windowHeight );
}
