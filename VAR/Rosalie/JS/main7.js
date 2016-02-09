var params = {
    bgColor: "#000000",
    taillecarre: 20,
    ecartvertical: 20,
    ecarthorizontal: 20,
    colorCarre: "#FFFFFF",
    strokeW: 1,
    speed: 50
};

var gui = new dat.GUI( );
gui.add( params, 'taillecarre', 1, 30 );
gui.add( params, 'ecartvertical', 10, 40 );
gui.add( params, 'ecarthorizontal', 10, 40 );
gui.addColor( params, 'bgColor', 10, 40 );
gui.add( params, 'speed', 10, 200 );
gui.add( params, 'strokeW', 0.1, 40 );
gui.addColor( params, 'colorCarre', 0, 100 );

var agents = [ ];

function setup( ) {
    createCanvas( windowWidth, windowHeight );
    // 2480, 1748

    initialize( );

    /*
	var y =0;
	while(y<height){
	y=y+20;
	}
	*/

    //boucle for dans une boucle fort 
}

function initialize( ) {
    agents = [ ];

    for ( var x = 0; x < width; x += params.ecartvertical ) {
        for ( var y = 0; y < height; y = y + params.ecarthorizontal ) {
            agents.push( new Agent( x, y, params.taillecarre ) );
        }
    }

}

//tableau

function draw( ) {
    background( params.bgColor );
    // image( img, 0, 0);

    fill( params.colorCarre );
    stroke( 0 );
    for ( var index = 0; index < agents.length; index++ ) {
        agents[ index ].update( );
        strokeWeight( agents[ index ].n * params.strokeW )
        agents[ index ].display( );

    }
}

var Agent = function( _x, _y, _w ) { //w=largeur
    this.x = _x;
    this.y = _y;
    this.w = _w; //taille
    this.n = 0; //noise pour angle de rotation
}

Agent.prototype.update = function( ) {
    this.n = noise( this.x / 600, this.y / 600, frameCount / params.speed );
};

Agent.prototype.display = function( ) {
    push( );
    translate( this.x + this.w / 2, this.y + this.w / 2 );

    if ( this.n < 0.33 ) {
        ellipse( 20 - this.w / 2, 20 - this.w / 2, this.w, this.w );
        // ellipse ( 0, 0, this.w, this.w);
    } else if ( this.n < 0.66 ) {
        ellipse( 90 - this.w / 2, 90 - this.w / 2, this.w, this.w );
        // ellipse ( 0, 0, this.w, this.w);
    } else {
        rect( 20 - this.w / 2, 20 - this.w / 2, this.w, this.w );
    }
    pop( );
};

//boucle while créé conteur puis -> tant que ("while") on a les éléments

function keyPressed( ) {
    if ( keyCode == LEFT_ARROW ) {
        saveCanvas( "export", "png" );
    }
}

function mousePressed( ) {
    // params.agentw= random(10, 100);
    // params.ecart = int( random(10,40));
    initialize( );
}
