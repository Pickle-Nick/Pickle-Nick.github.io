////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//write a range function that takes 2 args start and end
//returns array with numbers from start includint up to end
function range(start, end, incriment) {
  //create empty array var
  let array = [];
  //create consditional statement
  if (incriment !== undefined && incriment > 0) {
    for (let i = start; i <= end; i += incriment) {
       array.push(i);
    } return array;
    } else if (incriment < 0) {
      return array;
    } else if (incriment === undefined && start !== end) {
      for (let i = start; i <= end; i++) {
        array.push(i);
      }
      return array;
    } else {
    return array;
}
}
////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//sum function that tkes an array of numbers and returns the sum of those numbers
function sum(array) {
  var sumTotal = 0;
  //loop through the given array
  for (var i = 0; i < array.length; i++) {
    //add variable to number in loop
    sumTotal += array[i];
}
return sumTotal;
}


////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//invert the orger of a given array
function reverseArray(array) {
var arr = [];
//loop through the array backwards
for (var i = array.length-1; i >= 0; i--) {
  //push i into created array
  arr.push(array[i]);
}
//return created array with reversed numbers
return arr;
} 

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//modify a given arrray to reverse ints contents
function reverseArrayInPlace(array) {
var arr = [];
var loopTimer = array.length;
for (var i = 0; i < loopTimer; i++) {
  arr[i] = array.pop();
}
for (var j = 0; j < loopTimer; j++) {
  array.push(arr[j]);
}
return array;
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//convert a given array to a nested list
function arrayToList(array) {
var list = null;
//loop through the array
for (var i = array.length-1; i >= 0; i--) {
  //create a list from array
  list = {value: array[i], rest: list};
}
//return new list
return list;
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//convert a given list into an array
function listToArray(list) {
var arr = [];
while (list.rest !== null) {
  arr.push(list.value);
  list = list.rest;
}
arr.push(list.value);
return arr;
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//add a helper function prepend, which takes an element and a list and creates
//a new list that adds the element to the front of the input list
function prepend(value, list) {
return {value: value, rest: list};
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//takes a list and a number and returns the element at the given position in the list
function nth(list, number) {
  //conditional statements to test the given number
if (list.rest == (null || 'undefined') || number < 0) {
  return;
} else if (number === 0) {
  return list.value;
} else {
  number --;
  return nth(list.rest, number);
}
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//takes two values and returns true only if they are the same value or are objects with the same properties
function deepEqual(a, b) {
    if((typeof a == "object" && a != null) && (typeof b == "object" && b != null)) {
        if (Object.keys(a).length != Object.keys(b).length) {
            return false;
        } else if (a === b) {
            return true;
        } else if (typeof a !== 'object' || typeof b !== 'object') {
            return false;
        } else {
            for (var prop in a) {
                if (b.hasOwnProperty(prop)) {
                    if (! deepEqual(a[prop], b[prop]))
                        return false;  // recursively checking if deepEqual is satisfied between a and b.
                }
                else
                    return false;  // i.e. if b.hasOwnProperty(prop) itself is false.
            }

            return true; // if both b.hasOwnProperty(prop) and recursive deepEqual is true.
        }

        }


        else if (a !== b) {
            return false;
        } else
            return true;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
