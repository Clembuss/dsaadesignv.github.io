var cercle, cercle2, cercle3;
var cercles = [];

function setup(){
	createCanvas( 1135, 800 );

//push = envoyer un "circle" à chaque fois
	/*cercles.push( new Circle( random(width), random(height), 5 ) );
	cercles.push( new Circle( random(width), random(height), 5 ) );
	cercles.push( new Circle( random(width), random(height), 5 ) );

//cercle = fois x circle
//à virer car tableau
	cercle = new Circle( random(width), random(height), 5 );
	cercle2 = new Circle( random(width), random(height), 5 );
	cercle3 = new Circle( random(width), random(height), 5 );*/

	/*var index = 0;
	while( index < 300 ){
		cercles.push( new Circle( random(width), random(height), 5 ) );
		//"++" pareil que "+1"
		index ++;

		console.log(index);
	}*/

	var x = 0;
	while( x < width ){
		var y = 0;
		while( y < height ){
		cercles.push( new Circle( x, y, 200 * noise( x / 400, y / 400,
			frameCount / 100 ) ) );
		y = y + 10;
	}
	
	x = x + 10;
}

	console.log( "cercles.length:", cercles.length );
}

function draw(){
	background( 'FFFFFF' );

	fill( 0 );
	noStroke();
	/*cercle.display();
	cercle.move();
	cercle.grow();

	fill( 255, 0, 0 );
	cercle2.display();
	cercle2.move();
	cercle2.grow()

	fill( 0, 0, 255 );
	cercle3.display();
	cercle3.move();
	cercle3.grow()*/

	//cercles[ 0 ].display();
	//cercles[ 1 ].display();
	//cercles[ 2 ].display();

	var index = 0;
	while( index < cercles.length ){
		cercles[ index ].diameter = 14 * noise( 
			cercles[ index ].x / 100, 
			cercles[ index ].y / 100, 
			frameCount / 10  );

		cercles[ index ].display();
		index ++;
	}

}

function windowsResized(){
	resizeCanvas( windowWidth, windowHeight );
}

//déclare une nouvelle variable et ses fonctions
//applique des paramètres à remplir dans "cercle" en haut = plus besoin de remplir les valeurs ici
var Circle = function( _x, _y, _diameter ){
	this.x = _x;
	this.y = _y;
	this.diameter = _diameter;
};

Circle.prototype.display = function(){
	ellipse( this.x, this.y, mouseX, this.diameter );
};

Circle.prototype.move = function(){
	this.x = this.x + random( -5, 5 );
	this.y = this.y + random( -5, 5 );
};

Circle.prototype.grow = function(){
	this.diameter = this.diameter + random ( -5, 5 );
};


function keyPressed(){
    if( keyCode === LEFT_ARROW  ){
        saveCanvas("###", "png");
    }
}
