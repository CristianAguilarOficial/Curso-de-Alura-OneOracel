// variables
let nombre = prompt('ingresa tu nombrea')
let dia = prompt('escriba un dia de la semana');
let numero =prompt('ingresa numero -10 a 10');
let juego = prompt( 'que puntajes sacaste en el juego 100 o 0');



//punto 1
if (dia == ("sabado" || "domingo")) {
 alert("feliz fin de semana");
}else if(dia == ("lunes" || "martes" || "miercoles" || "jueves" || "viernes")){
    alert("buena semana");
}else{
    alert("no ingresaste una dia de la semana");
}
// punto 2
if( numero < 0){
    alert(`Numero ${numero} es negativo`);
}else if (numero > 1){
alert(`Numero ${numero} es positivo`);
}else 
    alert(`Error "${numero}" no es numero`);

//punto 3
if (juego == 100){
    alert(`¡felaicidades, has ganado! con mejor puntuacion`);
}else{
    alert('"Intentalo nuevamente para ganar"')
}
// punto 4 bienvendida al usuario
alert(`Bienvenido ${nombre}`);
