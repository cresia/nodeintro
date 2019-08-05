// console.log("Hello, world!");

function doMath(num1, operator, num2){

  switch(operator){
    case "+":
      var result = num1 + num2;
      break;
    case "-":
      var result = num1- num2;
      break;
    case "/":
      var result = num1/num2;
      break;
    case "*":
      var result = num1 * num2;
      break
  }

  return result;
}

var num1 = parseFloat(process.argv[2]);
var operator = process.argv[3];
var num2 = parseFloat(process.argv[4]);
console.log(doMath(num1, operator,num2))


// var answer = doMath (2, "+", 4);
// console.log(answer)
// console.log(process)

// console.log(process.argv)
