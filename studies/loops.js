/*
 *
 *  LOOPS
 *
 *      If we want to execute a block of code a certain number of times we use a loop. A loop allows us
 *      to execute a block of code a certain amout of times. Loops execute under specified parameters only stopping
 *      when the parameter is met. This allows us to do something repeadedly in our code without having to type it in
 *      numerous times. You can loop through an array by using the .length function. Depending on where you start and
 *      end you loop we can loop forwards or backwards.
 *      There are 3 types of loops to choose from:
 *
 *          For Loop
 *      The most commonly used loop that uses a set of conditions only stopping if the conditions return false.
 *      
 *          for (var i = 0; i < 11; i++) {
 *          console.log('Hello'); // => console logs 'Hello' 5 times
 *          }
 *
 *          For In Loop
 *      The for in loops loops thriugh the PROPERTIES of an object. Also has a set of conditions
 *      that will run until the conditios return false.
 *  
 *          var ranObj= {
 *           name: Nick, 
 *           age: 25,
 *           isTall: false
 *          };
 *          for (var key in ranObj){
 *              console.log(key);    //loops through the object to print object keys
 *
 *          While Loop
 *      A while loop executes a block of code as long as the single parameter returns true, when
 *      the parameter is false the loop stops.
 *
 *      var x = 5;
 *      while (x < 15) {
 *      console.log('While Loop');
 *      i++
 *      }
 *
 */