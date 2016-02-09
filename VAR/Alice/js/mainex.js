var params = {
    sizeCircle: 100,
    lengthLines: 10,
    steps: 36,
    strokeWeight: 2,
    ecartLines: 36,
    ecart: 200,
    speed: 10,

};

var gui = new dat.GUI( );
gui.add( params, "sizeCircle", 50, 200 );
gui.add( params, "lengthLines", 2, 100 );
gui.add( params, "steps", 2, 36 );
gui.add( params, "strokeWeight", 2, 10 );
gui.add( params, "ecartLines", 20, 50 );
gui.add( params, "ecart", 70, 400 );
gui.add( params, "speed", 10, 200 );

var agents, img;

function preload( ) {}

function setup( ) {
    createCanvas( windowWidth, windowHeight );

    initialize( );
}

function initialize( ) {
    agents = [ ]; // modification de la variable

    for ( var x = 0; x < width; x += params.ecart ) { // boucle de répétition à l'horizontale
        for ( var y = 0; y < height; y = y + params.ecart ) { // répétition à la verticale
            agents.push( new Agent( x, y, params.sizeCircle ) );
        }
    }
}

function draw( ) {
    background( "white" );

    for ( var index = 0; index < agents.length; index++ ) {
        agents[ index ].update( );
        strokeWeight( params.strokeWeight );
        //strokeWeight(agents[index].n * 5);
        agents[ index ].display( );

    }
}

var Agent = function( _x, _y, _w ) {
    this.x = _x;
    this.y = _y;
    this.w = _w; // taille
};

Agent.prototype.update = function( ) { // calcul
    this.n = noise( this.x / 500, this.y / 500, frameCount / params.speed );
}

Agent.prototype.display = function( ) { // dessiner
    push( );
    translate( this.x, this.y ); // déplacement du point de pivot
    rotate( this.n * TWO_PI * 2 );
    stroke( 0 );
    noFill( );

    if ( params.steps == params.ecartLines ) ellipse( 0, 0, this.w, this.w );
    else arc( 0, 0, this.w, this.w, 0, TWO_PI / params.ecartLines * params.steps );

    for ( var i = 0; i < params.steps; i++ ) {
        var x1 = cos( TWO_PI / params.ecartLines * i ) * this.w / 2,
            y1 = sin( TWO_PI / params.ecartLines * i ) * this.w / 2,
            x2 = cos( TWO_PI / params.ecartLines * i ) * ( this.w / 2 + params.lengthLines ),
            y2 = sin( TWO_PI / params.ecartLines * i ) * ( this.w / 2 + params.lengthLines );

        line( x1, y1, x2, y2 );
    }

    pop( ); // push et pop, enregistrer indépendamment chacun de nos agents

}

function mousePressed( ) {
    initialize( );
}
