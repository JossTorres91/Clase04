console.log("Ejemplo de una Matriz");

const aNumber = [2, 0, 1];
const bNumber = [3, 0 , 0];
const cNumber = [5, 1, 1];

const aMatriz = [aNumber, bNumber, cNumber];

console.log(aMatriz);

console.log(aMatriz[0][0]);

console.log(aMatriz[2][0]);

console.log("Ejemplo de Split y Join")

const email = "jj.mota.t@me.com";
const user = email.split("@");
console.log("Usuario: "+user[0]);
console.log(user.join(" hola "));