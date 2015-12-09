$(document).ready(function(){ //quand le document est prêt
    var sol = 1000; // la valeur sol de base
    var cam; // création variable cam
    $( "#sol" ).html("1000 sol"); // écriture du sol de base dans la div #sol

    // méthode jquery ui slider
    $( "#slider" ).slider({
      value:1000,// valeur de base
      min: 0,// valeur min
      max: 1162,// valeur max
      step: 1,// de 1 en 1
      slide: function( event, ui ) { // quand on déplace la "poignée"
        $( "#sol" ).html(ui.value+" sol"); // update valeur dans la div #sol
        sol = ui.value; // affectation la nouvelle valeur à la variable sol
      }
    });

    // clic sur grab
    $("#grab").on("click",function(){ // quand on clique sur le bouton #grab
        cam = $('#cameras option:selected').text(); // récupération et affectation de la valeur à la variable cam
        $("#images").empty(); // effacement des images de la section #images
        $("#results").removeClass("opacity-full").addClass("opacity-none"); // effacement de l'élément #results
        $.getJSON("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol="+sol+"&camera="+cam+"&api_key=WmBMhWaWxah92XV9zpZjqnWk6unLqawq7BlIGger&format=JSON") // récupération du json depuis l'API
        .done(function( data ) { // quand c'est fait
          $.each( data.photos, function( i, photo ) { // pour chacun des objets
            $( "<img>" ).attr( "src", photo.img_src).appendTo("#images"); // ajout d'un élément image avec attribut src
          });
        })
        .fail(function() { // si il n'ya pas d'images pour ce jour et cette caméra
            $("#results").removeClass("opacity-none").addClass("opacity-full").html("No photos this day."); // affichage d'un message
        })
        return false; // cette ligne empêche le rafraîchissement de la page
    });
});

