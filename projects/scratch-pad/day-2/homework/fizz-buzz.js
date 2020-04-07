// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
//create a loop that prints the numbers 1-100
for (var i = 1; i <= 100; i++) {
    //create a conditional statement that check if the number is divisible by 3 and 5
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
    }
    //create else if statement to check if i is divisible by 3
    else if (i % 3 == 0) {
        console.log("Fizz");
    } 
    //create else if statement to check if i is divisible by 5
    else if (i % 5 == 0) {
        console.log("Buzz");
        }
        //create else statement that returns the number if not divisible by any
    else {
        console.log(i);
        }
}


    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}