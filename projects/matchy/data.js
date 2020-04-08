/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// create an object literal called animal
var animal = {};
//add specieces property assigned to any species with dot notation
animal.species = 'Dog';
//add property called name with name in a string value pair
animal['name']= 'Jax';
//using either notation give animal property noises assigned to an array literal
animal.noises = [];
//print animal object to console
console.log(animal);




//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// create an array called noises set to literal
var noises = [];
//using bracket notation give a string of an animal sound
noises[0] = 'Snore'; //uses bracket notation to add snore to 0 index
noises.push('Bark'); //adds bark to the back of the array
noises.unshift('Growl');//adds growl to the frint of the array
noises[noises.length] = 'Woof';//adds woof to the back of the array no matter the array length
//console log length of array
console.log(noises.length);
//console log the last element in noises
console.log(noises[noises.length]);

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
//assign noises property on animal obj to our new noises array
animal['noises'] = noises;
// add new noise to array
noises.push('Howl');
//add array back to object
animal['noises'] = noises;
console.log(animal);


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *       You can use either bracket or dot notation.
 * 2. What are the different ways of accessing elements on arrays?
 *      You can access an array using bracket notation.
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create a literal array named 'animals'
var animals = [];
//push animal objct into the animals array
animals.push(animal);
//create a variable named duck and assign it th copied key/ value pairs
var duck = { 
    species: 'duck',
    name: 'Jerome', 
    noises: ['quack', 'honk', 'sneeze', 'woosh']
};
//push the duck object into the animals array
animals.push(duck);
//create 2 new animal objects and push to animals array
var tiger = {
    species: 'tiger',
    name: 'Mike',
    noises: ['rawr', 'snarl', 'yelp', 'whimper']
};
//push tiger ti the animals array
animals.push(tiger);

//2nd object
var snake = {
    species: 'reptile',
    name: 'Simon',
    noises: ['hiss', 'snap', 'rattle', 'slither']
};
//push var snake to animals array
animals.push(snake);



//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create an array to store list of friends
var friends = [];
function getRandom(array) {
    //use math.floor to return random order list of friends to array
    return Math.floor(Math.random() * array.length);
} 
friends.push(animals[getRandom(animals)].name);
    //console log friends
    console.log(friends);
    //add friends to one of the animals
    animal.friends = friends;
    //check console to see if friends properrty is added to animal
    console.log(animal);


/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}