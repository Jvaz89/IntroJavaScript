//JS Scoping exercises//
​
//1. What’s the result of executing this code and why.js//
  function test() {
     console.log(a);
     console.log(foo());
     
     var a = 1;
     function foo() {
        return 2;
     }
  }
​
//> 2 your answer here//
//> 2 console answer//
//2. What is result?//
 
var a = 1; 
  
function someFunction(number) {
  function otherFunction(input) {
    return a;
  }
  
  a = 5;
  
  return otherFunction;
}

var firstResult = someFunction(9);
var result = firstResult(2);

//> your answer here_//
//> Undefined//


//3. What is the result of the following code? Explain your answer.//
  
  var a = 1
  function foo() {
    var a = 2;

    function bar() {
      console.log( a );
    }

    return bar;
  }
  var baz = foo();
  baz();

//>  2 //
//>  2 //
​
​
//4. What will you see in the console for the following example?//
  var a = 1; 
  function b() { 
      a = 10; 
      return; 
      function a() {} 
  } 
  b(); 

//> Undefined //
//> Undefined //