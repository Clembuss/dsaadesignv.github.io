var maVariable = 15;
maVariable = 20;
maVariable = maVariable + 10;
maVariable = "du texte"; 
console.log( maVariable );

function sayHello( nom ){
	console.log("Hello " + nom);
}

sayHello( "me" );
sayHello( "you" );

var array = [ "lorem", "([2])", 3, 4, 5, "du texte" ];
console.log( array);
console.log( "longueur", array.length );
console.log( array[ 0 ] );
console.log( array[ array.length-1 ] );

for ( var i = 0; i < array.length; i++ ) {
	console.log( array[ i ] * 2 );
}

function random1(max){
	return Math.random() * max;
}

function random2(min, max){
	return min + Math.random() * (max - min);
}

var array2 = [];
array2.push(5);
array2.push(random1(30));
array2.push(random2(300, 500));
console.log(array2);

var unePersonne = {
	nom: "Sam",
	age: 28,
	jambes: 2,
	tete: true,
	hobbies: ["peinture", "velo"],
	animaux:[
		{
			nom: "neko",
			type: "chat",
			age: 4
		},
		{
			nom: "sparky",
			type: "chien",
			age: 3
		}
	]
};
console.log(unePersonne);
console.log(unePersonne.nom);
console.log(unePersonne.hobbies[0]);

console.log(unePersonne.animaux.length);
console.log(unePersonne.animaux[0].nom);