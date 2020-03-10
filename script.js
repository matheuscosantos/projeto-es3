var final = false;

var markerLetterU = document.getElementById("markerLetterU");

var palavra = [];

async function leMarcador(){
  
}

markerLetterU.addEventListener('markerFound', function(){
  palavra.push("U");
  alert(palavra);
});


markerLetterU.addEventListener('markerLost', function(){
  palavra.pop();
  alert(palavra);
});
