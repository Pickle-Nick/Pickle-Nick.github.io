
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//create a loop that console.log() 7 times to form a triangle
 function triangles(number) {
   var str = '';
   for (var i = 0; i < number; i ++){
      str = '#' + str;
      console.log(str);
 }
 }

/////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz(start, end) {
  //create a loop that loops numbers 1 - 100
  for (var i = start; i <= end; i++){
    //create conditional statement to determine if number is divisible by 3 print fizz
    if (i % 15 === 0) {
      console.log('fizzbuzz');
    } else if (i % 3 === 0) {
      console.log('fizz');
    } else if (i % 5 === 0) {
      console.log('buzz');
    } else {
      console.log(i);
    }
  }
  
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//write a program that creates a string that represents an 8x8 grid,
//using newline characters to seperate lines
function drawChessboard(number) {
  //create chessboard var to hold variables
  var chessBoard = '';
  //create nested loop to print the length of chessboard
  for(let i =0; i < number; i++) {
    for(let j = 0; j < number; j++) {
      //create conditional statement to evaluate the number and print the desired string variable
      if((j+ i) % 2 === 0) {
        chessBoard += " ";
      } else {
        chessBoard += '#';
      }
    }
    //after loop add new line character to chessboard
    chessBoard += '\n';
  }
  console.log(chessBoard);
}


////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
