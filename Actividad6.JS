/*concatena los siguientes arreglos*/

var animals=['eagle','parrot','monkey','bear', 'lion']
var comingSoonAnimals= ['panter','dragon','turtle']

console.log(animals.concat(comingSoonAnimals));


/*Acomoda el arreglo de menor a mayor: [4,6,1,0,8,2]*/

var arreglos=[4,6,1,0,8,2]
arreglos.sort(function(a,b){return a-b});


/* Agrega un nuevo animal ('cow') al arreglo de animals*/
var animals=['eagle','parrot','monkey','boar', 'lion']
const count = animals.push('cows');
console.log(count);
console.log(animals);


/*Retira el elemento 'eagle' del arreglo animals*/
var animals=['eagle','parrot','monkey','bear', 'lion']
var animals= animals. slice (1);
console.log(animals);

/*Funciones*/
function saludo(nombre,pais,edad){
    console.log('hola'+nombre+'como esta'+pais+'a tus'+edad+'años.');
}
saludo('Pepe','España',40);
saludo('Carlos','Mexico',30);

/*Funciones*/
function saludo(nombre,pais,edad){
    console.log('hola'+nombre+'como esta'+pais+'a tus'+edad+'años.');
}
var nuevosaludo=saludo('Pepe','España',40);
console.log(nuevosaludo);


/*Funciones*/
function obtenergoles(p1,p2,p3, player='Ronaldo'){
    var partido1=p1;
    var partido2=p2;
    var partido3=p3;

    var jugador= player
    function agregar(param){
        var nombre=param;
        return'Esta temporada' +nombre+'anoto'+(partido1+partido2+partido3);
    }
    return agregar(player);

}
var temp1= obtenergoles(5,3,4,'Luis');
console.log(temp1)



