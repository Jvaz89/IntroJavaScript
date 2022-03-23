/* Crear una función que recibe 2 parámetros(una oración y la palabra buscar). Retornar true o false en caso de que una
oración contenga una palabra dada, es decir, si yo mando "Hola mundo" y mando la palabra a buscar "perro" me debe retornar un false. 
En cambio si mando hola mundo entonces debe retornar true.*/

function buscarPalabra (oracion,palabra){
    if(oracion. includes(palabra)){
        return true
    }else{
        return false
    }
}
buscarPalabra ('Hola mundo , mundo ')

/* Mediante una función, y dado un arreglo de enteros var numbers = [1,2,3,4,10,11], encuentra la suma de sus elementos*/

var arr= [1,2,3,4,10,11]

function sumaArreglo (arreglo) {

    let suma = 0;

    for ( var index = 0; index <arreglo.length; index++){
        suma+= arreglo[index];

    }

    return suma

}
console.log (sumaArreglo(arr))



/* Desarrolla un metodo para verificar si una palabra es un palindroma. Casos de prueba: var word1='madam' var word2='computadora'*/

function palindromo (frase) {
    for (var i=0; i<frase.length/2;i++){
        if(frase[i]==frase[frase.length-i-1]){

        }else{
            return 'No es palindromo'

        }
    }
    return 'Es un palindromo'
}
var palabra = prompt ("Inserta la palabra")
console.log (palindromo (palabra))


/*Crea un programa, el cual sirva para convertir temperaturas. De Celsius a Ferenheit y viceversa. 
Utiliza las siguientes expresiones matematicas necesarias para la conversión. 
Que dicho programa reciba como argumentos las temperaturas y regresa el resultado 
imprimiendo en pantalla la conversión. Tu solución es libre a la imaginacion*/


let convertirTemp=(temperatura, grados) =>{
    let resultado
    switch (grados){
        case "C":
        resultado = temperatura *1.8+32;
        console.log(temperatura +" grados C *1.8+32="+resultado+"grados F");
        break;
        case"F":
        resultado= (temperatura -32)* 0.5555556;
        console.log( "C"+ temperatura +"grados F-32*0.55="+resultado+"grados C");
        break;
        default:
            console.log ("solo puedo convertir grados C o grados F,intenta de nuevo");
            break;
        }
    };
    convertirTemp(26,"C");
    convertirTemp(98,"F");
   
