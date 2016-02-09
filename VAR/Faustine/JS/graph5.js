var params = {
    bgColor: "#000000", //une clé, et une valeur
    agentW: 40, //largeur d'une module
    ecart: 20, //ecart entre les différents modules, ceux-ci pouvant se chevaucher
    speed: 40
}

var gui = new dat.GUI( ); //dat.GUI est une interface faite pour régler des variables depuis la page web
gui.add( params, 'agentW', 10, 100 ); //dat.GUI crée quelque chose dans le HTML avec une class dg (o le voit dans la console)
gui.add( params, 'ecart', 5, 25 );
gui.add( params, 'speed', 10, 60 );
gui.addColor( params, 'bgColor' ); // on peut contrôler la couleur du background

var agents, img;

function setup( ) {
    createCanvas( windowWidth, windowHeight );

    initialize( );
}

function initialize( ) {
    agents = [ ]; //on crée un tableau agents

    for ( var x = 0; x < width; x = x + params.ecart ) {
        for ( var y = 0; y < height; y = y + params.ecart ) {
            agents.push( new Agent( x, y, params.agentW, color(random(255)) ) ); // on crée des Agent qu'on push dans le tableau agents de 20 en 20 de x tant que c'est inférieur à width
        }
    }
}

function draw( ) {
    background( params.bgColor ); //on va chercher l'élément bgColor dans la variable params

    // image( img, 0, 0 );

    noStroke( );
    for ( var index = 0; index < agents.length; index++ ) {
        agents[ index ].update( ); //affecter la valeur n et r selon le noise, pour chaque agent crée
        agents[ index ].display( ); //afficher avec une translation en fction de x, w, etc

    }

}

var Agent = function( _x, _y, _w, _color ) {
    this.x = _x;
    this.y = _y;
    this.w = _w; //w c'est pour widt
    // this.brightness = brightness( this.color );
    this.n = 0; //noise pour angle de rotation
};

Agent.prototype.update = function( ) {
    this.n = noise( this.x / 150, this.y / 150, frameCount / params.speed );
    this.r = noise( this.x / 50, this.y / 50, frameCount / params.speed + 10 );
}

Agent.prototype.display = function( ) {
    push( );
    translate( this.x + this.w / 2, this.y + this.w / 2 ); //on change le repère
    rotate( 2 * TWO_PI * this.n );
    fill( 255 * this.n );
    quad( 0, 0, this.w / 2 + this.r / 2, 0, this.w / 2 + this.r / 2, this.w / 2 + this.r / 2, 0, this.w / 2 + this.r / 2 );
    pop( );
}

function keyPressed( ) {
    saveCanvas( "export", "png" );
}

function mousePressed( ) {
    // params.agentW = random( 10, 100 ); 
    // params.ecart = random( 10, 40 );
    initialize( );
}
