const args = process.argv.slice(2)

const num1 = Number(args[0])
const operator = args[1]
const num2 = Number(args[2])

if (isNaN(num1) || isNaN(num2)) {
  console.log("Please provide valid numbers.")
  process.exit(1)
}

let result

switch (operator) {
  case '+':
    result = num1 + num2
    break
  case '-':
    result = num1 - num2
    break
  case '*':
    result = num1 * num2
    break
  case '/':
    result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero"
    break
  default:
    console.log("Invalid operator. Use +, -, * or /.")
    process.exit(1)
}

console.log(`${num1} ${operator} ${num2} = ${result}`)



