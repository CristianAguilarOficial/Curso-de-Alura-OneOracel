//variables
let nombre =("crsitian camilo aguilar avila");
let valor1=10;
let valor2=5;
let contador=1;
let nota = 8;
let resultadoSum= valor1 + valor2;
let resultadoRest= valor1 - valor2;

console.log("Bienvenid@");
console.log("hola " + nombre);
let edad = parseInt(prompt('ingresa tu edad'));
let numero = parseInt(prompt('ingresa un numero de preferencia'));

alert(`"hola ${nombre}"`);
let lenguaje= prompt('cual es tu lenguaje de programacion que más te gusta');

console.log("tu lenguaje que te gusta es: " +lenguaje);
console.log("la suma " + valor1 + " y " + valor2 + " es igual a " + resultadoSum);
console.log("la resta "+ valor1 + " y " + valor2 + " es igual a " + resultadoRest);

if(edad >=18 ) {
    console.log("Eres mayor de edad");
}else{
    console.log("Eres menor de edad");
}

if (numero >0){
    console.log("Tu numero: " + numero + " es positivo");
}else if(numero <0 ){
    console.log("tu numero: " + numero + " es negativo");
}else if(numero == 0){
    console.log("tu numero: " + numero + " es neutro");
}else{
    console.log( "'" + numero + "'" + "no ingresaste un numero");
}

 while (contador <= 10 ) {
    console.log(contador);
    contador++
 }
 if (nota >= 7){
    console.log("aprobaste con: " + nota);
 }else if (nota <=6){
    console.log("No aprobaste tu nota es: " + nota );
 }else{
    console.log("no tiene nota");
 }

 let numberand1 = parseInt(Math.random());
 console.log("Numero random 1: " + numberand1);
 let numberand2 = parseInt(Math.random() * 10);
 console.log("Numero random 2: " + numberand2);
 let numberand3= parseInt(Math.random()* 100)
console.log("Numero random 3: " + numberand3 )