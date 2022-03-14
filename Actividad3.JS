/*Escribe un programa que pida un numero y diga si es divisible por 2*/
var numero = prompt("Ingrese un número");

if(( numero % 2 ) == 0){

	alert(numero + ' es divisor de 2');
    
}else{

	alert(numero + ' no es divisor de 2');

}
/*Crear un programa que determine si un numero en un prompt es par o no, la respuesta será mostrada en un alert*/

let Number=prompt ("ingrese el numero a evaluar");
if(Number % 2==0)//formula para identificar el numero//
{
    alert("El numero:"+Number+""+"es par");

}
else
{
    alert("El numero:"+Number+""+"no es par");
}
/* Solicitar al usuario un numero. si es el 1000, imprimir "Ganaste un premio, de lo contrario mostrar el número y el mensaje "lo sentimos sigue participando"
  mostrar el numero y el mensaje "Lo sentimos, sigue participando"*/

var numero =prompt("Ingrese el numero de cliente");
if (numero==1000){
    console.log("ganaste un premio");
} else if (numero !=1000 ){
console.log("sigue participando");
}

/*Solicitar al usuario que ingrese dos numeros y mostrar cual de los dos es menor . no considerar el caso en que ambos numeros son iguales*/

var n1= prompt("Ingrese el primer numero");
var n2= prompt("Ingrese el segundo numero");
if(n1<n2){
    
console.log(+n1+"el primer numero es menor al segundo"+n2);
}
else {
    console.log(+n2+"el segundo numero es menor al primero"+n1);
}


/*Solicitar al usuario que ingrese tres números y mostrar cual de los tres es el numero mayor
considerar el caso en que 2 numeros sean iguales*/

var n1 = 10
var n2 = 20
var n3 = 100

if (n1 > n2 && n1 > n3) {
    console.log("El primer numero es el mayor:",n1);

} else if (n2 > n1 && n2 > n3) {
    console.log("El segundo numero es el mayor:",n2);

} else if (n3 > n1 && n3 > n2){
    console.log("El tercer numero es el mayor:",n3);
}
//100 100 20//
else if (n1>n3 && n1==n2){
    console.log(n1);
}
//100 20 100//
else if (n1>n2 && n1==n3){
    console.log(n1);
}
//20 100 100//
else if (n2>n1 && n1==n3){
    console.log(n2);

}
//100 100 100//
else{
    console.log("los tres numeros son iguales");
}