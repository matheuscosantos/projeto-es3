markerU.addEventListener('markerFound', function(){
  if(final != true) {
    setTimeout(function(){modelDrill.setAttribute('visible', true)}, 0);
    letterUModel.setAttribute("animation", "property: position; to: 0 0 0; dur: 0");
    console.log("Teste");
  }
}
          
                         
var markerUModel = document.getElementById("letterUModel")
var markerU = document.getElementById("markerLetterU");

<a-marker id="markerLetterU" preset="pattern" type="pattern" url="https://raw.githubusercontent.com/matheuscosantos/imagens-app/master/pattern-U.patt">
<a-entity id="letterUModel" gltf-model="#Drill" scale="25 25 25" rotation="270 0 0" position="0 0 0"></a-entity> 
</a-marker>



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