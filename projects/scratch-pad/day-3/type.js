// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    // us Array.isArray inside a conditional statement to eva;uate whether the value is an array
if (Array.isArray(value)) {
    return true; //returns true if value is an array
} else {
     return false; //returns false otherwise
}
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
    //checking to see if value is an aray
    if (Array.isArray(value)) {
        return false; //if value is array return false
    }
    //check to see if value is null
    else if (null === value) {
        return false;// if value is null return false
    }
    //check to see if value is a Date
    else if (value instanceof Date) {
        return false; // if value is a date return false
    }
    //check to see if value is an object with typeOf
    //compare the typeOf to a string 'object' to determine is the value is an object
    else if (typeof value === "object") {
        return true; // return true if value is an object
    }
    //if value is anything else return false
    else {
        return false;
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
  //checking to see if value is an aray
    if (Array.isArray(value)) {
        return true; //if value is array return true
    }
    //check to see if value is null
    else if (null === value) {
        return false;// if value is null return false
    }
    //check to see if value is a Date
    else if (value instanceof Date) {
        return false; // if value is a date return false
    }
    //check to see if value is an object with typeOf
    //compare the typeOf to a string 'object' to determine is the value is an object
    else if (typeof value === "object") {
        return true; // return true if value is an object
    }
    //if value is anything else return false
    else {
        return false;
    }
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    // check to see if value is a string is so return 'string'
    if (typeof value  === 'string') {
        return 'string';
    }
    //check to see if value is a array if so return 'array'
    else if (Array.isArray(value)) {
        return 'array';
    }
    //check to see if value is undefined if so return 'undefined'
    else if (typeof value === 'undefined') {
        return 'undefined';
    }
    //check to see if value is a number if so retuen 'number'
    else if (typeof  value === 'number') {
        return 'number';
    }
    //check to see if value is a boolean if so return 'boolean'
    else if (typeof value === 'boolean') {
        return 'boolean';
    }
    //check to see if value is null if so return 'null'
    else if (null === value) {
        return 'null';
    } 
    //check to see if value is a function if so return 'function'
    else if (typeof value === 'function') {
        return 'function';
    } 
    //check to see if value is a date if so return 'date'
    else if (value instanceof Date) {
        return 'date';
    } 
    //lastly check to see if value is an object if so rerturn 'object'
    else if (typeof value === 'object') {
        return 'object';
    }
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
