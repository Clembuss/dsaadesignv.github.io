var agents;

var params = {é
    paisseur: 1,
    fragmentation: 3,
    densité: 5,
    //prevEcart : 50
};

var gui = new dat.GUI( );
gui.add( params, 'épaisseur', 0.1, 5 );
// gui.add(params, 'speed', 50, 300);
gui.add( params, 'fragmentation', 0, 50 );
gui.add( params, 'densité', 0, 30 );

function setup( ) {
    createCanvas( windowWidth, windowHeight );
    smooth( );
    frameRate( 20 );

}

function draw( ) {
    background( 255 );
    noFill( );
    stroke( 0 );
    strokeWeight( params.épaisseur );

    //for(var i = 0; i < 100; i+=1)

    for ( var y = 0; y <= height; y += params.densité ) {
        beginShape( );
        for ( var x = 0; x <= width; x += params.fragmentation ) {
            vertex( x, y + ( noise( x * 0.01, ( frameCount * 0.05 ), y * 0.01 ) * screen.height ) );
        }
        endShape( );
    }

}
/*

function keyPressed(){
  if( key = 'm'){
  saveCanvas("export", "png");
  }
}*/
