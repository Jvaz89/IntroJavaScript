/*Usando while crea un programa que pregunte al usuario un numero. Mostrar los numeros que son multiplos de 5 desde 1 hasta el numero introducido por el usuario*/

var x = Number(prompt("Dame un numero"));
var y=1;
while(y<=x){
    if(y%5===0) 
    console.log(y);
    y++;
}


/*Crea el mismo problema1. ahora usando do while*/

var numero = Number (prompt("Ingrese un numero"))
var index=1
do{
    if(index % 5 ===0){
        console.log(index)
    }
    index++;

}while( index <= numero)

/*Usando for, crea un programa que imprime en consola los numeros impares del 1 al 50*/

for (var i=1; i<=50; i++){
    if(i %2!==0){
        console.log (i, " es numero Impar")
    }
}
/*Iterar arreglo array*/
var arreglo=['hola',1,true,null]
for(var i=0;1<arreglo,leght; i++){
    console.log(arreglo[i])
}