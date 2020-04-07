/*
 *
 * STRING MANIPULATION
 *
 *      In JavaScript, we can modify a declared string because primitive data types
 *      are treated as objects when exectutng methods or properties. we Use string methods
 *      to manipulate a string, to add on to a string, to remove from a string, and to locate 
 *      values inside of a string.
 *
 *      String Length
 *          We count the length of a string from 0 because strings have a 0 index
 *          the .length property returns the length of a string.
 *              var lengthTest = 'Onelargestring'
 *              console.log(lengthTest.length); //=> prints 14
 *
 *      Finding a String Within a String
 *          To find the position of a string inside a string we use the .indexof() method
 *          which returns the index or the position of the desired string within the string
 *              var str = 'My name is Nick'
 *              console.log(str.indexOf('Nick'); // => prints 11
 *          We can find the last occurace of a specified word in a string by using
 *          the .lastIndexOf() method to return the last time the given syring occured inside 
 *          the string we are searching through by startng at the last index of the string.
 *          It will return -1 if text is not found. Both take a second parameter to set where
 *          in the string we would like to star our search.
 *              var str = 'My name is Nick, I like the name Nick';
 *              console.log(str.lastIndexOf('Nick' , str.length-1)) // => now prints 33 because it is searching
 *                                                          for the first occurance of nick starting from the back
 *
 *      Searching for a String in a String
 *          We can also use the .searh() method to search through a string and 
 *          find a strings position. However, unlike .indexOf( and .lasIndexOf(),
 *          .search() does not take a second parameter.
 *              var myStr = 'Cereal is very Yummy.'
 *              console.log(myStr.search('yummy')); // => prints 15
 *
 *      Extracting String Parts
 *           The .slice() method extracts a specified part in the string and creates a new string
 *               var fullName = 'Nick Lonergan';
 *               console.log(fullName.slice(5, fullName.length)); //=> prints Lonergan
 *          If you omit the second character this method will slice out the rest of the string
 *              console.log(fullName, slice(5)); // => would still return Lonergan 
 *          It can also accept negative vlaues which tell the method to count from the back of the string
 *              console.log(fullName.slice(-8)); // =>prints Lonergan as well since we count from the back of the string
 *
 *          
 *
 */