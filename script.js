var final = false;

var markerLetterU = document.getElementById("markerLetterU");
var markerLetterS = document.getElementById("markerLetterS");


var palavra = [];

var verificarLetra = (letra) => {
  // Essa função é chamada para verificar
  // se já existe algum letra no array "palavra"
  
  this.
  
  var existe = false;
  palavra.forEach(item => { 
     if (item === letra) {
       existe = true;
     } 
  });
  
  if(existe == false){
    palavra.push(letra);
    alert(palavra);
  }else{
    alert("Essa letra já existe, a palavra é: " + palavra);
  };
};

markerLetterU.addEventListener('markerFound', function(){
  verificarLetra("U");
});

markerLetterS.addEventListener('markerFound', function(){
  verificarLetra("S");
});

markerLetterU.addEventListener('markerLost', function(){
  palavra.filter( e => e !== 'U')
});

