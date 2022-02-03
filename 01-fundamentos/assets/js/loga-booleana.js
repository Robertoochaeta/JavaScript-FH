const regresaTrue= ()=>{
    console.log("Regresa True")
    return true;
}
const regresaFalse= ()=>{
    console.log("Regresa False")
    return false;
}
console.warn("Not o la negacion")
console.log(true)
console.log(!true)
console.log(!false)

console.log(!regresaFalse());

console.warn("Operador And");
console.log(true && true) //True
console.log(true && false); //false

console.log(regresaFalse() && regresaTrue())
console.log(regresaTrue() && regresaFalse())

console.warn("OR");
console.log(true || false)

console.log(regresaTrue() || regresaFalse())
console.log('4 condiciones', true || true || true || false)


console.warn("Asignaciones");

const soyUndefined=undefined;
const soyNull=null;
const soyFalso=false;

const a1 = true && 'Hola Mundo '&&150 
const a2 = 'Hola' && 'Mundo' && soyFalso && true;
const a3 = soyFalso || 'Ya no soy Falso';
const a4 = soyFalso || soyUndefined || regresaTrue() || 'Soy Falso de nuevo' ||true;
const a5 = soyFalso || soyUndefined || regresaTrue() || 'Soy Falso de nuevo' ||true;
console.log({a1,a2,a3,a4,a5})


if(true || true || true || false){
    console.log('Hacer Algo');
}else{
    console.log('Hacer otra cosa')
}