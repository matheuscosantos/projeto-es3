var final = false;

var markerLetterU = document.getElementById("markerLetterU");
var markerLetterS = document.getElementById("markerLetterS");


var palavra = [];

markerLetterU.addEventListener('markerFound', function(){
  var existe = false;
  palavra.forEach(item => { 
     if (item === "U") {
       existe = true;
     } 
  });
  
  if(existe == false){
    palavra.push("U");
    alert(palavra);
  }else{
    alert("Essa letra já existe, a palavra é: " + palavra);
  };
  
});

markerLetterS.addEventListener('markerFound', function(){
  palavra.push("S");
  alert(palavra);
});

markerLetterU.addEventListener('markerLost', function(){
  palavra.filter( e => e !== 'U')
});

