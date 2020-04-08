/*
 *
 * OPERATORS
 *      Operators act on out data. They can assign or compare availble to use arithmetic in code.
 *      
 *      Assignment Operators assign a value to the left oprand based on the value of the right operand.
 *          EXAMPLE: 
 *              (=) is the basic assignment opereator
 *      
 *      Arithmetic Operators are used to perform arithmetic on Number variables
 *          EXAMPLEs: 
 *              (+) Addition adds 2 numbers together for a result
 *               var numNum =  1 + 1; // value of var is 2
 *              console.log(var);//  => prints 2
 *
 *              (-) Subtraction subtracts 2 numbers for a result
 *              var numNum = 7 - 5; // var is assinged number 2
 *              consolelog(var); //=> prints 2
 * 
 *              (*) Multiplication multiplies 2 numbers for a result
 *              var myAge = 5 * 5; // myAge is assigned to 25
 *              console.log(myAge); // => prints 25
 *
 *              (/) Division divieds 2 numbers for a result
 *              var div = 25 / 5; // div is assigned the number 5
 *              console.log(div); // => prints 5
 *
 *              (%) Remainder returns the value reamining after dividing 2 numbers
 *              var rem = 8 / 3; //rem is assigned a value of 2
 *               console.log(rem); // => prints 2
 *
 *              (++) Incriment increases the number value by 1
 *              var incr = 4
 *              incr++; // incr is now increased by 1
 *              console.log(incr); // = > prints 5
 *
 *              (--) Decrement decreased the number value by 1
 *              var decr = 6;
 *              decr--; // decr is decreased by 1
 *              console.log(decr); // => prints 5
 *
 *      Comparison Operators compare two values and return a Boolean of true or false
 *      They can be used inside of conditional statements to compare values and take action
 *      based on comparison
 *          EXAMPLES:
 *              (==) Equal to is a loose comparison between 2 values or variables
 *                  var points = 10;
 *                  if (points == 10)print = 'Scrub' // => if points are equal to 10 then print Scrub
 *                  console.log(print); // => prints Scrub
 *
 *              (===) Strinctly equal to value and data tpe
 *                 console.log(5 === 5); // => returns true beacuse both 5's are of the same data type
 *                 console.log(5 === '5'); // => will return false becasue number 5 is not strictly 
 *                                              equal to string '5'
 *
 *              (!=) Not Equal sets the value to not equal each other and also returns a Boolean
 *                  console.log( 1 != 5); // => returns true because 1 does not equal 5
 *                  console.log(5 != 5); // => returns false because 5 does equal 5
 *          
 *              (!==) Strictly not equal to value and data type that
 *                  console.log(5 !=== '5');// => prints true because the string
 *                                              5 is not equal to the number 5
 *
 *              (>) Greater Than compares if one value is greater than another 
 *                  compared value
 *                  console.log(5 > 4); // => prints true 
 *                  console.log(4 > 5); // => prints false
 *
 *              (<) Less Than compares if one value is less than aother
 *                  console.log(5 < 10); // => prints true
 *                  console.log( 10 < 5); // prints false
 *
 *              (>=) Greater Than or Equal to compare whether a value is greater
 *                  than or equal to another given value
 *                  console.log(5 >= 5); // => prints true because although 5 is not greater
 *                                           than 5 it is equal to 
 *
 *              (<=) Less Than or Equal to compare is a value is less than or equal
 *                  to another given input value
 *                  console.log( 5 <= 6); // => prints true
 *
 *
 *      Logical Operators are used with any value and can be applied to any data type
 *
 *          (||) Or operator is used to chose different outcomes inside of a conditional statement
 *          let music = 'pop'
 *          // if music is pop or rock print Jam out!   
 *          if (music === 'pop' || music ==='rock'){
 *          console.log('Jam Out!') // => prints Jam Out!
 *          }
 *
 *          (&&) And operator compares 2 conditions where both have to = true
 *           var points = 22;
 *              if (points < 30 && points > 20) {
 *              console.log('Great Game')
 *              } // both conditions are true => prints Great Game
 *
 *          (!) Not operator returns the inverse value of the variable
 *              console.log(!true); // => prints false
 *
 *      Unary Operators takes a single or unary operand and performs an operation
 *      The single variable opereations consist of:
 *              (+) Addition Operaator
 *              (++) Incriment Operator
 *              (-) Subtraction Operator
 *              (--) Decriment Operator
 *              (typeof) Typeof Operator return a string that tells us the given Data Type
 *                  console.log(typeof 6); // => returns number
 *              (!) Not Operator
 * 
 *      Ternary Operator or the Conditional operator that takes 3 arguments
 *      a condidtion followed by a (?), an expression to execute 
 *      if the condition is truthy followed by (:), and the expression to execute
 *      if the condition is falsy
 *      var age = 19;
 *      var nba = (age >= 18) ? 'League' : 'College';
 *      console.log(nba); // => prints League
 *
 */
 