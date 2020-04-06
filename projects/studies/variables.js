/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point. We use var to contain many different data types.
 * Var is boud to a section of the application called the scope. It is hoisted to their function or global scope. 
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //
var myName; // => myName = undefined because we have not assigned it to anything 

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john'; //myName is now assigned to the string'John'
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob'; //since variables are reassignable myName is now assigned the string'Bob'
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1; //myVariable is assigned the number 1
console.log(myVariable); //=> prints 1
myVariable = true; //myVariable is reassigned to the Boolean of true
myVariable = "someString"; //myVariable is reassigned the to the string 'someString'
console.log(myVariable); // => prints someString

var weather = 'Sunny'; // weather is assigned the string 'sunny'
console.log(weather); // => prints Sunny
weather = 'Cloudy'; //weather is reassigned the string'Cloudy'
console.log(weather); //=> prints Cloudy

/*
 *
 * LETS:
 *
 *  Let is a reassignable container that is also able to hold multiple data types. Unlike var, let is not
 *  hoisted to its code block.
 *
 *
 *  EXAMPLE:
 */ 
 
 
 // Declare a variable using let
 let str = 'Nick';
 // Using an if statement to demonstrate locale scope
 if (str === 'Nick') {
    let str = 'Jax'; 
    console.log(str); // => prints Jax
 }
 console.log(str); // => prints Nick
 /* 
  * This console.log() demonstrates that although we reassigned str to the string 'Jax', it is inside
  * the locale scope and it is not hoisted. 
  *
  */
  
 /*
  *
  * CONSTANTS
  *
  *
  * Const is a container that also holds multiple data types, but unlike let and var const is
  * not reassignable and values can never change. Const is pinned to the block of code in which it is 
  * assigned and it is not hoisted to the top of their block scope.
  *
  *
  *
  * EXAMPLE:
  */
  
  
  // Declare a variable using const
  const name = 'Nick';
  // Using an if statment to demonstrate the scope
  if (name === 'Nick') {
      name = 'Jax'; // => Expected to change 'Nick' to 'Jax'
      console.log(name); // => prints TypeError because we can not reassign a const variable type
  }
  
  /*
   *
   * HOISTING
   *
   *
   * Hoisting is when variables and function declarations throught the code are moved to the top of
   * their scope before the code is executed. Hoisting only moves the variable or function declaration,
   * but their assignments are left in place. 
   *
   * EXAMPLES:
   *
   */ 
   
   
   function code() {
       var a = 'Nick';
       let b = 'Jax';
       const c = 'Anna';
   }
   //console.log(code(a));  => prints undefined because var is function scoped
   //console.lof(code(b)); => prints ReferenceError
   //console.log(code(c)); => prints ReferenceError
   
   
   if (true) {
       var a = 'Nick';
       let b = 'Jax';
       const c = 'Anna';
   }
   //console.log(a); => prints Nick because var is accessible inside conditional statements and loops. 
   //console.log(b); => prints ReferenceError because let is not accessible outside of its locale scope
   //console.log(c); => prints ReferenceError because const is not accessible outsode of its locale scope