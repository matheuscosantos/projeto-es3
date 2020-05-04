var final = false;

var markerLetterU = document.getElementById("markerLetterU");
var markerLetterR = document.getElementById("markerLetterR");
var markerLetterS = document.getElementById("markerLetterS");
var markerLetterO = document.getElementById("markerLetterO");

var palavra = [];

var verificarLetra = (letra) => {
  // Essa função é chamada para verificar
  // se já existe algum letra no array "palavra"
  
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

markerLetterR.addEventListener('markerFound', function(){
  
  verificarLetra("R");
  
});

markerLetterS.addEventListener('markerFound', function(){
  
  verificarLetra("S");
  
});

markerLetterO.addEventListener('markerFound', function(){
  
  verificarLetra("O");
  
});

