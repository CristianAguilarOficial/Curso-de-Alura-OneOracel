numero = 6;
function saludo(){
    console.log('hola, mundo');
    return;
};
saludo();

function bienvenida(nombre) {
    console.log( "saludo, " + nombre );
    return;
}
bienvenida("cristian camilo avila");

function doble (numero) {
    return numero * 2;
}
let calcularDoble= doble(8);
console.log(calcularDoble);



function notas (nota1, nota2, nota3 ){
    return Math.floor((nota1 + nota2 +nota3)/4);
}
 let mostrarPromedio = notas(10,8,9);
 console.log(mostrarPromedio);

function mayor(a,b) {
    return a > b ? a + ' es mayor' : b + ' es mayor';
}
let numeroMayor= mayor(5 , 8);
console.log(numeroMayor);




function multuplicador(number) {
    return number * number;
}
let resultado= multuplicador(5);
console.log(resultado);