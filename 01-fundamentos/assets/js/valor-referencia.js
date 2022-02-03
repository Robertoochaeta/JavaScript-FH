let a= 10;
let b =a;
a =30;
console.log({a,b});

let juan ={ nombre:'Juan'};
let Jaquelinne = {...juan};
Jaquelinne.nombre= 'Jaquelinne';
console.log({juan,Jaquelinne})

const CambiaNombre=(...persona)=>{
    persona.nombre = 'Bruce';
    return persona;

}
let Clark={nombre:'clark'};
let bruce = CambiaNombre(Clark);
console.log({Clark,bruce});


// Arreglos
const frutas = ['Manzana','Pera','Piña'];
console.time('slice');
const otrasFrutas= frutas.slice();
console.timeEnd('slice');

console.time('spreed');
const otrasFrutas2= [...frutas];
console.timeEnd('spreed');

otrasFrutas.push('Mango');

console.table({frutas,otrasFrutas});