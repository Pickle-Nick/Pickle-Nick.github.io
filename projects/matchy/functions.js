/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Impliment a function declaration called search
function search(array, string){
    //loop through array
    for (var i = 0; i < array.length; i++) {
     //if array contains desired string pring the entire object
     if(array[i].name === string) {
         //returns the entire object
         return array[i];
         }
    }
    //returns null if no object is found
     return null;
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//write a function that replaces an object with another object
function replace(animals, name, replacement) {
    //loop through the array
    for (var i = 0; i < animals.length; i++) {
        //if state ment to determine if given name is in the array
        if (animals[i].name === name ) {
            //if animals is equal to name replace with a given object
            return animals[i] = replacement;
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create a function called femove with 2 parametrs
function remove(animals, name) {
    //loop over the array to find the input name
    for (var i = 0; i < animals.length; i++) {
        //if the name is in the aray remove it
        if (animals[i].name === name) {
            //removes the object from the array
            return animals.splice(i);
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//write a function called add
function add(animals, animal) {
    //create an if statement to evaluate the object properties
    if (animal.name.length > 0 && animal.species.length > 0) {
        //create a loop to loop through array
        for (var i = 0; i < animals.length; i++) {
            //create another if statement to evaluate the name property
            if (animals[i].name === animal.name) {
                return animals[i];
            } else {
                return null;
            }
        }
        //if conditions pass push animal object into animals array
    } animals.push(animal);
}


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
