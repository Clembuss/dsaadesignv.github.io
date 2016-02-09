var params = {
    bgColor: "#FFFFFF",
    strokeColor: "#000000",

    translationX: 50,
    translationY: 50,
    ecart: 20,
    ecart2: 20,
    positionX: 20,
    positionY: 20,
    rotation: 5,
    angle: 5,
    angletwo: 5,
    strokeWeight: 3,
    division: 5,
    division2: 5,

};

var gui = new dat.GUI( );

gui.add( params, 'translationX', 0, 1748 );
gui.add( params, 'translationY', 0, 2480 );
gui.add( params, 'positionX', 0, 1748 );
gui.add( params, 'positionY', 0, 2480 );
gui.add( params, 'ecart', 0, 200 );
gui.add( params, 'ecart2', 0, 200 );
gui.add( params, 'rotation', 0, 10 );
gui.add( params, 'angle', -10, 10 );

gui.add( params, 'division', 0, 10 );
gui.add( params, 'division2', 0, 10 );

gui.add( params, 'strokeWeight', 0, 6 );

gui.addColor( params, 'bgColor' );
gui.addColor( params, 'strokeColor' );

var angle = 0;

function setup( ) {
    createCanvas( windowWidth, windowHeight );
    fill( 255 );
}

function draw( ) {
    background( params.bgColor );
    strokeWeight( params.strokeWeight );
    stroke( params.strokeColor );

    var angle2 = PI;
    for ( var i = 1; i < width; i++ ) {
        translate( params.translationX, params.translationY );
        quad( i * params.ecart, height / params.division, i * params.ecart2, height / params.division2 + tan( angle2 ) * height / params.division2, params.positionX, params.positionY );

        rotate( params.rotation );
        angle2 += params.angle;
    }
    angle += 0.32;
}

function keyPressed( ) {
    if ( keyCode === RIGHT_ARROW ) {
        saveCanvas( "###", "png" );
    }
}
