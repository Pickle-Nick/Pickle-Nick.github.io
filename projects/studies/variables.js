{"filter":false,"title":"variables.js","tooltip":"/Pickle-Nick.github.io/studies/variables.js","undoManager":{"mark":0,"position":0,"stack":[[{"start":{"row":0,"column":0},"end":{"row":34,"column":26},"action":"insert","lines":["/*"," * VARIABLES:"," *"," * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables"," * are named identifiers that can point to values of a particular type, like a Number, String,"," * Boolean, Array, Object or another data-type.  Variables are called so because once created, we"," * can CHANGE the value (and type of value) to which they point."," *"," * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our"," * variable."," *"," * 2. There are 2 phases of using variables: declaration and initialization (or assignment)."," */","","// 1. declaration //","var myName;","","/*"," * At the declaration phase, the variable myName is undefined because we have NOT initialized"," * it to anything"," */","console.log(myName); // prints => undefined","","// 2. initialization or assignment //","myName = 'john';","console.log(myName); // prints => john","","// 3. re-assignment //","myName = 'bob';","console.log(myName); // prints => bob","","// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //","var myVariable = 1;","var myVariable = true;","myVariable = \"someString\";"],"id":1}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":34,"column":26},"end":{"row":34,"column":26},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1585669075906,"hash":"34a04d102da440a01af62f89f5daed5e62631824"}