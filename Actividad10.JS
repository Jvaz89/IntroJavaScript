/**
 * Find the difference in age between the oldest and youngest family members, 
 * and return their respective ages and the age difference.
 * 
 */

 const Family = [
    {
      name: 'John',
      age: 13,
    },
    {
      name: 'Mark',
      age: 56,
    },
    {
      name: 'Rachel',
      age: 45,
    },
    {
      name: 'Nate',
      age: 67,
    },
    {
      name: 'Jeniffer',
      age: 65,
    }
  ];
  const ages = Family.map(person => person.age);
  [Math.min(...ages), Math.max(...ages), Math.max(...ages) - Math.min(...ages)];
  //(3) [13, 67, 54]//

/**
 * If the given input is an array of numbers, return the sum of all the positives ones. 
 * If the array is empty or there aren't any positive numbers, return 0.
 */
 const numbers = [ 1, -4, 12, 0, -3, 29, -150];
 const getPositiveArray=(arr)=>{
   return arr.filter(item=> item>0). reduce((a,b)=> a+b);
 };
 console.log(getPositiveArray(numbers))

 /**
 * Escriba una función de JavaScript que tomará una serie de números almacenados
 * y encontrará el segundo números más bajos y segundos más altos, respectivamente
 * del siguiente arreglo:  const arr = [3,4,6,1,5,2,9,10,23,12]
 */
var min1=min2=100;
var max1=max2=0;
var values=Array(3,4,6,1,5,2,9,10,23,12)
for(var i=0;i<values.length;i++)
{
  if (values[i]<min1)
  {
    min2=min1;
    min1=values[i];
  }else if(values [i]<min2){
    min2=values[i];
  }
  if(values[i]>max1)
  {
    max2=max1;
    max1=values[i];
  }else if (values[i]>max2){
    max2=values[i];
  }
}
 document.write("El valor minimo es:"+min1);
 document.write("El valor máximo es:"+max1);

 document.write("El segundo valor mínimo es:"+min2);
 document.write("Elsegundo valor máximo es:"+max2);














