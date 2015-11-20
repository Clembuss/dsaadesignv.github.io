$(document).ready(function(){ //quand le document est prêt
    $.getJSON("https://api.nasa.gov/planetary/apod?api_key=WmBMhWaWxah92XV9zpZjqnWk6unLqawq7BlIGger&format=JSON")//je me connecte à l'API de la NASA avec ma clé personnelle
    .done(function(data){// quand les données sont récupérées
        console.log(data.title);// je les affiche dans la console
        $("#image-titre").html(data.title); // j'insère le titre entre les balises ayant l'ID #images-titre
        $("#image-description").html(data.explanation); // l'explication
        $("#image-nasa")
            .attr("src",data.url) // l'url de l'image dans l'attribut src de la balise
            .attr("alt",data.title) // le titre dans l'attribut alt
            .hide() // je masque l'image
            .fadeIn(2000); // et l'affiche en fadeIn d'une durée de 2s
    });
});

