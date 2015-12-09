var data;

function preload(){
	data = loadJSON("data/colours.json");
	// data = loadJSON( "http://www.colourlovers.com/api/palettes/top?format=json&numResults=100&showPaletteWidths=1" );
}

function setup(){
	createCanvas( windowWidth, windowHeight );
}

function draw(){
	var hauteur = windowHeight / data.length;
	for (var j = 0; j < data.length; j++) {
		var colors = data[ j ];
		var x = 0;
		for (var i = 0; i < data[ j ].colors.length; i++) {
			fill( unhex( [
				data[ j ].colors[ i ].substring( 0, 2 ),
				data[ j ].colors[ i ].substring( 2, 4 ),
				data[ j ].colors[ i ].substring( 4, 6 )
			] ) );
			noStroke();
			var largeur = width * data[ j ].colorWidths[ i ];
			rect( x, j * hauteur, largeur, hauteur );
			x += largeur;
		}
	}
}

function windowResized(){
	resizeCanvas( windowWidth, windowHeight );
}

function mouseMoved(){
	var h1 = document.getElementById( "grosTitre" );
	h1.innerHTML = data[ Math.floor( mouseY / ( windowHeight / data.length ) ) ].title;
}