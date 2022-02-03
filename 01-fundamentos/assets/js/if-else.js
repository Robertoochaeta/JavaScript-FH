let a =5;

if(a >= 10){ 
    console.log('A es mayor o igual a 10');
}else {
    console.log('A es menor a 10');
}
console.log('Fin del programa')

const hoy = new Date();
console.log(hoy);
let dia = hoy.getDay();
console.log({dia});

if(dia ===0){
    console.log('Domingo');
}else if(dia===1){

    console.log('Es Lunes');
}
else if(dia ===2){
    console.log('Martes');
}else{
    console.log('No es lunes ni domingo, ni Martes');
}
// Sin usar else if o Switch o dia unicamente objetos
dia =2
const diasLetras={
0:"Domingo",
1: "Lunes",
2: "Martes",
3:"Miercoles",
4: "Jueves",
5: "Viernes",
6: "Sabado"
}
const diasLetras2=[
"Domingo",
 "Lunes",
 "Martes",
"Miercoles",
 "Jueves",
 "Viernes",
 "Sabado"
]
// console.log(diasLetras [dia] ());
console.log(diasLetras2 [dia])