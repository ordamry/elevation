/*
A factor chain is an array where each previous element is a factor of the next consecutive element. The following is a factor chain:

[3, 6, 12, 36]

// 3 is a factor of 6
// 6 is a factor of 12
// 12 is a factor of 36
Create a function that determines whether or not an array is a factor chain.

Examples
factorChain([1, 2, 4, 8, 16, 32]) ➞ true

factorChain([1, 1, 1, 1, 1, 1]) ➞ true

factorChain([2, 4, 6, 7, 12]) ➞ false

factorChain([10, 1]) ➞ false
*/

function factorChain( arr ) {
  for (let i=0 ; i<arr.length -1 ; i++){
    if(arr[i+1] % arr[i] != 0) return false
  }
  return true 
}

// option 2:
// function factorChain (arr){
// return arr.every((num, i) => i === 0 || num % arr[i-1] ===0)
//}

console.log (factorChain([1,2,4,8,16,32]))

exports.solution = factorChain;