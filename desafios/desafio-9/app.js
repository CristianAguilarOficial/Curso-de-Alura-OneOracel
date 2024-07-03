function calcularImc(alturaCm, peso){

    return peso / (alturaCm *2);
}
let msc = calcularImc(1.80 , 53)
console.log ("MSC= " + Math.round(msc));

//----------------------------------------------------------

function calcularFactorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    } else {
      return numero * calcularFactorial(numero - 1);
    }
  }
  // Ejemplo de uso
  let numero = 5;
  let resultado = calcularFactorial(numero);
  console.log(`El factorial de ${numero} es ${resultado}`);
  

function convertidorDeMoneda(modenaUser){
    let monedaDollar = 4.122; // 2 de julio precio de dolar en colombia
    return modenaUser * monedaDollar;
}
let convertidor =convertidorDeMoneda(18.000);
console.log(convertidor + " mil pesos colombianos");

function areaDeUnperimetro(longitudLados , altura){
     let area = longitudLados * altura ;
     let perimetro = 2 *(longitudLados + altura);
     console.log(`el area es: ${area} y el perimetro es: ${perimetro}`)
     return;
}
areaDeUnperimetro( 5, 10 );
