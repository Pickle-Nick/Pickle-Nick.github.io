//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    //create result array
    const arr = [];
    //loop through object keys
    for (var key in object) {
        //push keys to an array
        arr.push(object[key]);
        //return the array
    } return arr;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
let array = [];
for (var key in object) {
    array.push(key);//add object keys to the array
} return array.join(' ');//join elements in an array with a string
}
//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
//create a reuslt string
let str = '';
for (var key in object) { //loop over object
    if (typeof object[key] === 'string') { //conditional statement if the value is a string
        str += object[key] + ' '; //if val is string att the value to the str variable
    }
}
return str.trim();
}


//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    //create consitional statements to evaluate if collection is an object is an array
      if (Array.isArray(collection)) {
      return 'array';
  } else if (typeof collection === 'object') {
      return 'object';
      }
      return collection;
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
 string = string.toLowerCase();//convert entire string to lowercase
 let firstChar = string[0].toUpperCase();//upper case the first letter
 let subStr = string.substr(1, string.length-1);// create a substring
 let capitalized = firstChar + subStr;//add first letter to substring
 return capitalized;//returns first letter capitolized 
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
        var strArr = string .toLowerCase().split(' ');// splits the words and lower cases them
    for (let i = 0; i < strArr.length; i ++) {// loop through the string 
        strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].substring(1);
    }
    return strArr.join(' '); // returns all words in a string captialized 
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//take an object with a name property and return welcome name
function welcomeMessage(object) {
    let capName = object.name.charAt(0).toUpperCase() + object.name.substring(1);
   var message = 'Welcome ' + capName + '!';
return message;
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
let name = object.name.charAt(0).toUpperCase() + object.name.substring(1);
let species = object.species.charAt(0).toUpperCase() + object.species.substring(1);//capitalized first letter and add it to the substring 
let message = name + ' is a ' + species;
return message; // message returns key name 'is a' key species
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//return noise array in a string
function maybeNoises(object) {
    //check to see if object has a noise array
    if (!object.hasOwnProperty('noises') || object.noises.length == 0) {
        return 'there are no noises'; // if not return no noises
    } else {
        return object.noises.join(' '); // if it has a noise array return elements in a string
    }

}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//if a string hsa a word return true if not return false
function hasWord(string, word) {
        if (string.includes(word)) { //.includes checks for word in a string
            return true; 
        } else {
            return false;
        }
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//add friend to array in object
function addFriend (name, object) {
object.friends.push(name); //adds to friends array
return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//check to see if someone is a friend
function isFriend(name, object) {
    //conditional statement to check if name is in the friends array in given object
if (Object.keys(object).length !== 0 && object.friends.includes(name)) {
    return true;
} 
else {
    return false;
    
}
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//return an array of all the friends the name is NOT friends with
function nonFriends(name, array) {
var arr = [];
//create a loop through the array
for(var i = 0; i < array.length; i++) {
    //conditional statement to check friends list              
    if (array[i].friends.includes(name) === false && name !== array[i].name) {
        arr.push(array[i].name); //if name is not on the list, push the name into created array
    }
} return arr; //return created array
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
object[key] = value;
return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
  array.forEach(removeTest);
  return object;
  
  function removeTest (element, index) {
     for (var key in object) {
         if (key === element) {
             delete object[key];
         }
     }
  }
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
var seen = {};
var output = [];
var length = array.length;
var count = 0;

for (var i = 0; i < length; i++) {
    var current = array[i];
    if(seen[current] !== 1) {
    seen[current] = 1;
    output[count++] = current;
}
}
return output;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}