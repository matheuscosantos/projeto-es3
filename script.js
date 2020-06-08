var teste = document.getElementById('teste');

/*
Usar a tag iframe pra colocar todo o Html dentro da página criar todo o front-end
da aplicação conforme foi ideializado
*/

teste.addEventListener('mouseover', function(){
  alert("foi filhão");
});

var final = false;

var markerLetterU = document.getElementById("markerLetterU");
var markerLetterR = document.getElementById("markerLetterR");
var markerLetterS = document.getElementById("markerLetterS");
var markerLetterO = document.getElementById("markerLetterO");

var palavra = [];
var palavraUrso = ["U","R","S","O"];



function addLetter(letter) {
  let letraHtml = document.getElementById(letter);
  letraHtml
}

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
    
    addLetter(letra);
    
    console.log(palavra)
    
  } 
};

markerLetterU.addEventListener('markerFound', function(){
  
  verificarLetra("U");

  if(palavra[0] == palavraUrso[0] && palavra[1] == palavraUrso[1] && palavra[2] == palavraUrso[2] && palavra[3] == palavraUrso[3]){
    console.log("Palavra correta.");
  }
  
});

markerLetterR.addEventListener('markerFound', function(){
  
  verificarLetra("R");

  if(palavra[0] == palavraUrso[0] && palavra[1] == palavraUrso[1] && palavra[2] == palavraUrso[2] && palavra[3] == palavraUrso[3]){
    console.log("Palavra correta.");
  }
  
});

markerLetterS.addEventListener('markerFound', function(){
  
  verificarLetra("S");

  if(palavra[0] == palavraUrso[0] && palavra[1] == palavraUrso[1] && palavra[2] == palavraUrso[2] && palavra[3] == palavraUrso[3]){
    console.log("Palavra correta.");
  }
  
});

markerLetterO.addEventListener('markerFound', function(){
  
  verificarLetra("O");

  if(palavra[0] == palavraUrso[0] && palavra[1] == palavraUrso[1] && palavra[2] == palavraUrso[2] && palavra[3] == palavraUrso[3]){
    console.log("Palavra correta.");
  }
  
});
