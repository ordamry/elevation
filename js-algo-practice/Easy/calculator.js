/*
Create a function that takes two numbers and a mathematical operator + - / * and will perform a calculation with the given numbers.

Examples
calculator(2, "+", 2) ➞ 4

calculator(2, "*", 2) ➞ 4

calculator(4, "/", 2) ➞ 2
Notes
If the input tries to divide by 0, return: "Can't divide by 0!"
*/

function calculator(num1, operator, num2 ) {
  if (operator === "/" && num2 === 0) return "Cant divide by 0!"
    
  switch(operator) {
    case "+":
      return num1+num2
    case "-":
      return num1-num2
    case "/":
      return num1/num2
    case "*" :
      return num1*num2
    default:
      return "Change the operator"
  }

}

exports.solution = calculator;