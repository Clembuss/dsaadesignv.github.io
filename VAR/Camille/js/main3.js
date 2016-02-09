var params ={
	bgColor : "#4f3636"
};

var agents = [];

function setup(){

}

function draw(){

	background(255);
	fill(0);
	for( var index = 0; index < agents.length; index ++ ){
		agents[ index ].update();
		agents[ index ].display();
	}	
}