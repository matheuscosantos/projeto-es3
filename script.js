window.onload = function() {
  var frame = document.getElementById("frameID");

  var final = false;

  var markerLetterU = frame.contentDocument.getElementById("markerLetterU");
  var markerLetterR = frame.contentDocument.getElementById("markerLetterR");
  var markerLetterS = frame.contentDocument.getElementById("markerLetterS");
  var markerLetterO = frame.contentDocument.getElementById("markerLetterO");

  var palavra = [];
  var palavraUrso = ["U", "R", "S", "O"];

  function addLetter(letter) {
    // função para alterar o aspecti visual de cada letra
    // que for encontrada uma letra na tela 
    
    let letraHtml = document.getElementById(letter);
    letraHtml.style.color = "red";
    letraHtml.style.backgroundColor = 'white';
  }

  function visualizarAnimal(palavra, frame) {
    // Visualização do animal caso a palavra tenha sido formada
    if(palavra.length == 4){
      let animal = frame.contentDocument.getElementById('imgAnimal');
      animal.classList.remove('d-none');
    }
  }
  
  var verificarLetra = letra => {
    // Essa função é chamada para verificar
    // se já existe algum letra no array "palavra"

    var existe = false;
    palavra.forEach(item => {
      if (item === letra) {
        existe = true;
      }
    });

    if (existe == false) {
      palavra.push(letra);

      addLetter(letra);
      // Verificar o query selector pois está retornando Null
      elemento = document.querySelector("u#letraU");
      alert('EH ISSO MEU!!!! ' + elemento);
      elemento = document.querySelector("u.letraU");
      alert(elemento);

      console.log('EH ISSO', palavra);
      visualizarAnimal(palavra, frame);
    }
  };

  markerLetterU.addEventListener("markerFound", function() {
    verificarLetra("U");

    if (
      palavra[0] == palavraUrso[0] &&
      palavra[1] == palavraUrso[1] &&
      palavra[2] == palavraUrso[2] &&
      palavra[3] == palavraUrso[3]
    ) {
      console.log("Palavra correta.");
    }
  });

  markerLetterR.addEventListener("markerFound", function() {
    verificarLetra("R");

    if (
      palavra[0] == palavraUrso[0] &&
      palavra[1] == palavraUrso[1] &&
      palavra[2] == palavraUrso[2] &&
      palavra[3] == palavraUrso[3]
    ) {
      console.log("Palavra correta.");
    }
  });

  markerLetterS.addEventListener("markerFound", function() {
    verificarLetra("S");

    if (
      palavra[0] == palavraUrso[0] &&
      palavra[1] == palavraUrso[1] &&
      palavra[2] == palavraUrso[2] &&
      palavra[3] == palavraUrso[3]
    ) {
      console.log("Palavra correta.");
    }
  });

  markerLetterO.addEventListener("markerFound", function() {
    verificarLetra("O");

    if (
      palavra[0] == palavraUrso[0] &&
      palavra[1] == palavraUrso[1] &&
      palavra[2] == palavraUrso[2] &&
      palavra[3] == palavraUrso[3]
    ) {
      console.log("Palavra correta.");
    }
  });
};
