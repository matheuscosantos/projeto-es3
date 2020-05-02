var final = false;

var markerLetterU = document.getElementById("markerLetterU");
var markerLetterS = document.getElementById("markerLetterS");


var palavra = [];

markerLetterU.addEventListener('markerFound', function(){
  palavra.push("U");
  alert(palavra);
});

markerLetterS.addEventListener('markerFound', function(){
  palavra.push("S");
  alert(palavra);
});

markerLetterU.addEventListener('markerLost', function(){
  palavra.filter( e => e !== 'U')
});

