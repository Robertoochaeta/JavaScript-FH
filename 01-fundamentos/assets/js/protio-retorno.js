// function CrearPersona(nombre,apellido){
//     return {nombre,apellido}
// }n
const CrearPersona=(nombre,apellido)=>  {(nombre,apellido)};

const persona = CrearPersona('Roberto','ocaheta');

console.log(persona);

function imprimeArgumentos(){
    console.log(arguments);
}
const imprimeArgumentos2 =()=>{
    console.log(arguments);
}
imprimeArgumentos(10,true,'Roberto','Hola');
imprimeArgumentos2(10,true,'Roberto','Hola');