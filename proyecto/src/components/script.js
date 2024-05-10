// miScript.js
// Función para detectar el desplazamiento
function prueba(){
    return console.log("hola");
    var elemento = document.getElementById('imagen2');
    var elemento1 = document.getElementById('divreferencia');
    var posicion = elemento1.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;
  
    // Si el div está en la ventana gráfica
    if (posicion < windowHeight) {
        elemento.style.animationName = "animacion2";

    } else {
        elemento.style.animationName = "";
    }
}
prueba();

  