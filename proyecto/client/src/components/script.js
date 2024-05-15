// miScript.js
// Función para detectar el desplazamiento
// script.js
export default function prueba() {
    console.log("Hola");
    var elemento = document.getElementById('divimagen2');
    var elemento1 = document.getElementById('divreferencia');
    var posicion = elemento1.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;
    console.log(posicion);
    console.log(windowHeight);
}


