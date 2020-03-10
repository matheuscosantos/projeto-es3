var markerUModel = document.getElementById("letterUModel")
var markerU = document.getElementById("markerLetterU");

markerU.addEventListener('markerFound', function(){
  if(final != true) {
    setTimeout(function(){modelDrill.setAttribute('visible', true)}, 0);
    letterUModel.setAttribute("animation", "property: position; to: 0 0 0; dur: 0");
    console.log("Teste");
  }
}



// markerDrill.addEventListener('markerFound', function() {
//   if(final != true) {
//   setTimeout(function(){modelDrill.setAttribute('visible', true)}, 0);
//   modelDrill.setAttribute("animation", "property: position; to: 0 0 0; dur: 0");
//   drill=true;
//   if (tripod==false) {
//     setTimeout(hideMetalPlate, 2000); //esconder chapa metalica depois de 2 segundos
//     modelDrill.setAttribute("animation", "property: position; to: -10 0 0; dur: 8000");//Simular furadeira na placa metálica
//     setTimeout(function(){modelDrill.setAttribute('visible', false)}, 1950); //esconder furadeira do marker depois de 2 segundos
    
//       setTimeout(showError, 2000);//mostrar erro depois de 2 segundos
//       setTimeout(function(){alert("Retire o marker da furadeira e aguarde o erro desaparecer.")},2000);
//     }
//   }