/*
Write a function that returns true if you can partition an array into one element and the rest, such that this element is equal to the product of all other elements excluding itself.

Examples
canPartition([2, 8, 4, 1]) ➞ true
// 8 = 2 x 4 x 1

canPartition([-1, -10, 1, -2, 20]) ➞ false

canPartition([-1, -20, 5, -1, -2, 2]) ➞ true
Notes
The array may contain duplicates.
Multiple solutions can exist, any solution is sufficient to return true.
*/

function canPartition( arr ) {
  let zeroCount = 0 
  for (const v of arr) if (v === 0) zeroCount ++

  if (zeroCount >= 2) return true
  if (zeroCount === 1) return false
  let prod = 1
  for (const v of arr) prod *= v
  if (prod < 0 ) return false 
  for (const x of arr){
    
    if (x * x === prod) return true 
  }
  return false 

}

console.log(canPartition([2, 8, 4, 1]));   
console.log(canPartition([-1, -10, 1, -2, 20])); 
console.log(canPartition([-1, -20, 5, -1, -2, 2]))

exports.solution = canPartition;