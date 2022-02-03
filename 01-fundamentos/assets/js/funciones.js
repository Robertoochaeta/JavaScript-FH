 function saludar(nombre){
    //  console.log(arguments);
    //  console.log("Hola " + nombre);
 return [1,2];
// Nunca se ejecuta el valor
 console.log("Soy un codigo que esta despues del retorno");
    }
  const saludar2 = function (nombre) {
      console.log("Hola " + nombre );
  }
  const saludarFlecha=  () =>{
      console.log("Hola Fecha");
  }
  const saludarFlecha2=  (nomnbre) =>{
     console.log('Hola ' + nomnbre);
  }
// function rezar(lunes,miercoles){
//     console.log("Los lunes se rezan los misterios: " + lunes);
//     console.log("Los miercoles se rezan los misterios: " + miercoles);

// }

// var venerar= (santisimo) =>{
//     console.log("Los " + santisimo + "Vamos al santisimo"  );
// }
// venerar("jueves");

// rezar("Dolorosos", "Gozosos");
  const retornosaludar=saludar('Roberto', 40, false, 'Petén'); //1
//  console.log(retornosaludar [0], retornosaludar[1]);

//  saludar2('Jaquelinne');
//  saludarFlecha();
//  saludarFlecha2('Anabella');


// function suma(num1,num2){
    // let resultado =  num1 + num2;
    // console.log(`La suma de ${num1} y ${num2} es: ${resultado} `);
// }
// suma(2,2);
// 
// var resta = function(num1,num2){
    // let resultado = num1 - num2;
    // console.log(`La resta de: ${num1} y ${num2} es: ${resultado}`);
// }
// resta(9,8);
// 
// var multiplicar =  (num1, num2) =>{
    // let resultado = num1 * num2;
    // console.log(`El resultado de la multiplicación es: ${resultado}` );
// }
// multiplicar(4,5);
// 
// function Amor(novia, novio){
    // console.log( novia + " y " + novio + " Son novios " );
// }
// Amor('Jaquelinne', 'Roberto');
// 
// var mensaje = (mensaje) =>{
// prompt("Que facil es incluir 'Comillas simples' " + " yComillas doobles" );

// function cantidad(precio,unidades){
//     let compra = precio * unidades;
//     console.log(`El precio total es : ${ compra } `);
// }
// cantidad(30, 5);

// var horas = (trabajo,dias)=>{
//     let pago = trabajo * dias;
//     console.log(`El pago es: ${ pago }`);
// }
// horas(8,20);


// function sumar (a,b){
//     return a + b;
// }

//  const sumar2 = (a,b) =>{
//     return a + b;
//  }

// // const sumar2 = (a,b) =>  a + b;

// function aleatorio(){
//     return Math.random();
// }

// const GetAleatorio2 = () => Math.random ();



// console.log(aleatorio());
// console.log(sumar(1,2));
// console.log(sumar2 (2,2));
// console.log(GetAleatorio2());



function PrimerMes(){
    console.log
    (" Celebrar nuestro primer mes" + 
    " Quiere decir que a pesar de ser poco tiempo" + 
    " Nos da mucha felicidad estar juntos" + 
    " Que sean muchos más amor " );
    
}
PrimerMes();
