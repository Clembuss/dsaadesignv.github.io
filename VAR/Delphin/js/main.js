var agents = [ ];
var noiseScale = 0.005;
var canvas, context;

var params = {
    styleDechirure1: 150,
    amplitudeDechirure1: 500,
    styleDechirure2: 100,
    amplitudeDechirure2: 500,

    rotation: 0.9,
    epaisseurTraits: 3
}

var gui = new dat.GUI( );
gui.add( params, "styleDechirure1", 20, 200 );
gui.add( params, "amplitudeDechirure1", 300, 1748 );
gui.add( params, "styleDechirure2", 20, 200 );
gui.add( params, "amplitudeDechirure2", 0, 900 );
gui.add( params, "epaisseurTraits", 1, 10 );
gui.add( params, "rotation", 0, 1 );

function setup( ) {
    createCanvas( windowWidth, windowHeight );
}

function draw( ) {
    background( 255 );

    // ROTATION DU CONTENU
    push( );
    translate( width / 2, height / 2 );
    rotate( params.rotation * TWO_PI );

    // DÉCHIRURES TRAITS
    stroke( 0 );
    strokeWeight( params.epaisseurTraits );
    fill( 255 );
    for ( var _y = 180; _y >= 20; _y -= 20 ) {
        beginShape( );
        for ( var x = -width; x < width; x++ ) {
            var noiseVal = noise( x * noiseScale, params.styleDechirure2 * noiseScale + _y / 300. );
            vertex( x, -noiseVal * ( params.amplitudeDechirure2 + _y ) );
        }
        for ( var x = width; x > -width; x-- ) {
            var noiseVal2 = noise( x * noiseScale, params.styleDechirure1 * noiseScale + _y / 300. );
            vertex( x, noiseVal2 * ( params.amplitudeDechirure1 + _y ) );
        }
        endShape( );
    }

    // DESSIN DE LA DÉCHIRURE
    noStroke( );
    fill( 0 );
    beginShape( );
    for ( var x = -width; x < width; x++ ) {
        var noiseVal = noise( x * noiseScale, params.styleDechirure2 * noiseScale );
        vertex( x, -noiseVal * params.amplitudeDechirure2 );
    }
    for ( var x = width; x > -width; x-- ) {
        var noiseVal2 = noise( x * noiseScale, params.styleDechirure1 * noiseScale );
        vertex( x, noiseVal2 * params.amplitudeDechirure1 );
    }
    endShape( CLOSE );

    pop( );

}

function keyPressed( ) {
    if ( keyCode == ENTER ) {
        saveCanvas( "export", "tiff" );
    }
}
