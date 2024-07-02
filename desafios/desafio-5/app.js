//variables
let numeroMaximoPosible =10;
let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible + 1);
let numeroUsuario = 0;
let intentos=1;
let macimosIntentos=4;

while (numeroUsuario != numeroSecreto) {
 numeroUsuario = parseInt(prompt(`Me indica un número entre 1 y ${numeroMaximoPosible} por favor:`));
 console.log(typeof(numeroUsuario));
 if (numeroUsuario == numeroSecreto) {
    alert(`acertaste, el número es: ${numeroUsuario}. lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
    
 } else {
    if(numeroUsuario > numeroSecreto){
        alert(`el número secreto es menor`);
    }else{
        alert(`El número secreto es mayor`);
    }

    intentos = intentos +1;
    palabraVeces="veces";
    if(intentos > 3){
        alert(`Llegaste al numero maximo de intentos, el numero secreto era: ${numeroSecreto}`);
        break;
    }
 }
}
