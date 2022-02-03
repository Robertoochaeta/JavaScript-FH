let Juegos =['Zelda','Mario Bross', 'Metroid', 'GTA'];
console.log('largo',Juegos.length);

let primero = Juegos [2-2];
let ultimo = Juegos [Juegos.length -1];
console.log({primero,ultimo});

Juegos.forEach((elemento, indice,arr )=>{
    console.log({elemento,indice,arr});
});

let nuevo=Juegos.push('Star Fox');
console.log({nuevo,Juegos});

nuevo=Juegos.unshift('FIFA 19');
console.log({nuevo,Juegos});

let juegoborrardo=Juegos.pop();
console.log({juegoborrardo,Juegos});

let pos =1;
let borrados =Juegos.splice(pos,2);
console.log({borrados,Juegos});

let metroidIndex=Juegos.indexOf('Metroid'); //CaseSensitive
console.log({metroidIndex});