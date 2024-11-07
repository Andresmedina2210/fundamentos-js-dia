/*METODO MAS USADO*/
document.getElementById("demo").innerHTML = "Hello JavaScript";
document.getElementById("demo").style.fontSize = "35px";

/*Salidas de Datos*/
window.alert(5+2);
console.log(6+2);

/*Declaracion */
let a,b,c;
a = 5;
b = 6;
c = a + b;
window.alert(c);
document.getElementById("demo").innerHTML = c;

/*Variables */
let p, q, r;
p = 5;
q = 7;
const m = 8;
r = p + q + m;
document.getElementById("demo1").innerHTML = r;


/*Tippos de datos */
let num = 24; //numero entero
let name = "Luis Vejarano"; //cadena
let km = 14.4; //numero decimal
let isColombiano = true;//booleano
let obj = {firstname:"Ana", lastname: "Perez"};//objeto

let y = 17 + "POO";
Window.alert(y);

/*Definicion de funcion */
function myFunction(){
    document.getElementById("demo2").innerHTML = "New paragraph";
}