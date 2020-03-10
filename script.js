var final = false;

var markerLetterU = document.getElementById("markerLetterU");

var palavra = [];

markerLetterU.addEventListener('markerFound', function(){
      palavra.push("U");
});


markerLetterU.addEventListener('markerLost', function(){
  alert(palavra)
});
