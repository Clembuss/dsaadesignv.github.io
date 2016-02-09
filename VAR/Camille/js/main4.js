var params = {
    bgColor : "#000000",

    noiseScale : 50,
    riseX : 50,
    riseY : 50,
    random1 : 250,
    random2 : 250,
    Xnoiseval : 255,
    deplacementX : 800,
    deplacementY : 1240

};

var noiseScale=params.noiseScale;

var gui = new dat.GUI();
gui.add( params, 'noiseScale', 0, 5 );
gui.add( params, 'riseY', 0, 1740 );
gui.add( params, 'riseX', 0, 2480 );
gui.add( params, 'Xnoiseval', 0, 500 );
gui.add( params, 'random1', 0, 500 );
gui.add( params, 'random2', 0, 500 );
gui.add( params, 'deplacementX', 0,1740);
gui.add( params, 'deplacementY', 0,2480);

gui.addColor( params, 'bgColor' );

function setup(){
  createCanvas( 1740, 2480 );
}

function draw() {
  background(params.bgColor);

  for (var x=0; x < width; x++) {

    // var noiseVal = noise( params.riseX + x) * noiseScale, params.riseY * noiseScale ;
    var noiseVal = noise( ( params.riseX + x) * params.noiseScale, params.riseY * params.noiseScale );

    stroke(noiseVal*params.Xnoiseval);

    line(x, params.random1+noiseVal*params.random2, params.deplacementX, params.deplacementY);
  }
}