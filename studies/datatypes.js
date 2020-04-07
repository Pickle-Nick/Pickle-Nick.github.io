/*
 *
 * DATA TYPES
 *
 * A type of value is a data type. 
 * We can split Data Types into two catagories: Simple/ Complex
 *
 *  DIFFERENT DATA TYPES:
 *      
 *      Number - which contains numeric data
 *          EXAMPLE:
 */     var age = 25; // assigns a Numeric Data Type
            console.log(age); // => prints 25 (Numeric Data Type)

/*
 *
 *      String - which is character data
 *          EXAMPLE:
 */        var glass = 'Milk'; // assigns a String Data Type
                console.log(glass); // => prints Milk (String Data Type)
/*
 *
 *      Boolean - data type that returns true or false given an inout value
 *          EXAMPLE:
 */      var kobewasBetterThanLebron = true; // assigns a Boolean value
            console.log(kobewasBetterThanLebron); // => prints true (Boolean Value)
 /*
  *
  *     Array - a complex data type meaning that they can contain one or multiple different data types
  *         EXAMPKE:
  */           var array = ['Zion', 1, true]; //creates an array with multiple data types
                    console.log(array); /* => prints Zion (string Data Type), 
                                        1 (Numeric Data Type), true (Boolean Data Type)
                                        */
 /*
  *
  *     Object - also a comple data type that can contain any number of key and value pairs
            EXAMPLE:
  */        var zionObject = {
                name: 'Zion',
                age: 19,
                isAmazing: true
            }; // creates an object with multiple data types 
                console.log(zionObject); // => prints the objects key and value pairs
/*
 *
 *      Funtion - is a recallable object that exectues a block of code
            EXAMPLE:
*/              var favTeam = function() { //creates a functon called favTeam
                    return 'NOLA Pelicans'; // function return NOLA Pelicans 
                };
                console.log(favTeam()); // => prints NOLA Pelicans
/*
 *
 *      Undefined - is a vairable that has not yet been assigned a vaule
 *          EXAMPLE:
 */             var favPlayer;
                    //console.log(favPlayer); => prints undefined because the value is not assigned
/*
 *
 *
 *      Null - happens when there are no variables in an onject
 *          EXAMPLE:
 */             var emptyObject = {}; // assigns an object, but the object has no key or value pairs
                    //console.log(emptyObject); => prints null because the object is empty
/*
 *
 *      NaN - is is value representing Not-A-Number
 *          EXAMPLE:
 */             isNaN('NOLA Pelicans'); // isNaN compares the input value to NaN
                                        // => prints true because 'NOLA Pelicans' is Not A Number
/*
 *
 *      Infinity - is a global variable scope with a value of positive infinity. 
 *      -Infinity - is the same as positive infinity but has a negative value.
 *          EXAMPLE:
 */                 console.log(Infinity); //=> prints Infinity
                    console.log(Number.NEGATIVE_INFINITY);// => prints -Infinity
/*
 *
 *      Primitive vs. COmplext Data Types
 *
 *          Primitive or simple dtata types store only one value. Primitive types can be reassigned,
 *          the original stored vlaue is not altered.
 *          Complex data types can store an infinate amount of values to which you can add more.
 *          We are able to access complex data types with many variables by referencing the complex data type.
 *          Typically the reference is accessed with an address inside the complex data type not by
 *          the variables.
 *          Primitiive data types a copied by value, meaning the value stroed in one variable can be copied
 *          to a new variable. This means we can not change the value of a copied variable, because
 *          the original variable remains the same.
 *          Complex data types are copied by reference. Meaning the values stored in a variable can be
 *          referenced outside of the declared variable and modified. So primitive data is data that can
 *          not be changed when coped to a new variable, but complex data types the second variable can reference
 *          and modified outside of its original variable declaration.
 *              EXAMPLES:
 *                      PRIMITIVE:
 */                   var myAge= 25;
                        var points = myAge; 
                        
                        points = 30; // This does not reassign myAge to 30 since it is a simple data type
                        console.log(age); // => prints 25 myAge is copied into the points variable
                    
                      //COMPLEX:
                      var pelObj = {player: 'Lonzo'};
                      
                      var nbaObj = pelObj;
                      nbaObj.player = 'Melli'; // reassigns the pelObj to nbaObj
                      console.log(pelObj); //=> prints Melli because we accessed the object and changed player to Melli