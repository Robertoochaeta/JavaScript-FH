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
