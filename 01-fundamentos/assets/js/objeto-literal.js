const personaje ={
    nombre: 'Tony Stark',
    codeName: 'Iron Man',
    vivo:false,
    edad:40,
    coords:{
        lat:34.034,
        lng:-118.70
    },
    trajes: ['Mark 1', 'Mark 2'],
    direccion:{
        Zip: '10880,90265',
        Ubicacion: 'Malibu California'
    }
};
console.log(personaje);
console.log('Nombre', personaje.nombre);
console.log('Nombre',personaje['nombre']);
console.log('Edad',personaje['edad']);

console.log('Nombre',personaje['nombre']);
console.log('Coors',personaje.coords);
console.log('Coors',personaje.coords.lat);

console.log('Trajes',personaje.trajes.length);
console.log('Ultimo Traje',personaje.trajes.length-1);

//Mas detalles
delete personaje.edad;
console.log(personaje);

personaje.casado=true;
const entriesPares =Object.entries(personaje);
console.log(entriesPares);
// personaje = true;
console.log(personaje);


Object.freeze(personaje);
personaje.dinero= 1220201010;
personaje.direccion.Ubicacion = "Petén";
console.log(personaje);


const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje);
console.log(propiedades,valores);