/*
 *
 * CONTROL FLOW
 *
 *
 *      Conditional Statements
 *          Conditional Statements are used to execute different actions based on 
 *          different conditions. 
 *              There are 4 types of conditional statements:
 *               IF: is used to execute a block of code if a condition is true.
 *                  var time = 11;
 *                  If (time <= 12) {
 *                    console.log('Morning'); // => time is less than 12 so condtion is true
 *                  }
 *
 *              ELSE IF: is used when nthe first condition is false. It is set to another condition.
 *                  else if (time >= 12 && time <= 16) {
 *                    console.log('Afternoon'); // time is not >= 12 so condition is false
 *                   }
 *              ELSE: is the defualt block of code if all previous conditions are false.
 *                  else {
 *                  console.log('Night');
 *                    }
 *          If we change the var time to 15 the code would stop at the second condtion because it is now true.
 *          If we change var time to 18 none of the conditoins are true and the code runs our defualt Else statement. 
 *
 *              SWITCH: is used to specify many blocks of code to be executed based on conditions. It uses a break key word
 *              to break out of the switch block stopping the exection. 
 */                  var favFood = 'mango';
                   switch(favFood) {
                        case 'apple':
                        console.log('Keep the doctor away');
                        break;
                        case 'pear':
                        console.log('boring');
                        break;
                        case 'mango':
                        console.log('delicious');
                        break;
                        default:
                        console.log('eat more fruit');
                    }

 