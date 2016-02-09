var agents;

var params = {
    epaisseur: 1,
    fragmentation: 3,
    densite: 5
};

var gui = new dat.GUI( );
gui.add( params, 'epaisseur', 0.1, 5 );
gui.add( params, 'fragmentation', 0, 50 );
gui.add( params, 'densite', 0, 30 );

function setup( ) {
    createCanvas( windowWidth, windowHeight );
    smooth( );
    frameRate( 20 );
}

function draw( ) {
    background( 255 );
    noFill( );
    stroke( 0 );
    strokeWeight( params.epaisseur );

    for ( var y = 0; y <= height; y += params.densite ) {
        beginShape( );
        for ( var x = 0; x <= width; x += params.fragmentation ) {
            vertex( x, y + ( noise( x * 0.01, ( frameCount * 0.05 ), y * 0.01 ) * screen.height ) );
        }
        endShape( );
    }
}
