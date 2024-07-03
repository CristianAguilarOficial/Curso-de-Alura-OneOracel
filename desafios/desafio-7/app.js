

let titulo = document.querySelector('h1');
titulo.innerHTML =('"Hora del desafio"');
function mensajeBoton(){
console.log('el boton fue cliceado');
return;
};
function mensajeCiudad(){
   let ciudad = prompt('Que cuidad esta en colombia');
    console.log(`Estuve en ${ciudad} y me acordé de ti`);
    return;
};
function alerta(){
    alert('! Yo amo JS');
    return;
};
function suma(){
    let valor1 = parseInt(prompt('ingresa un numero'));
    let valor2 = parseInt(prompt('ingresa un numero'));
    let resutado= valor1 + valor2;
    alerta(resutado);
    return;
}