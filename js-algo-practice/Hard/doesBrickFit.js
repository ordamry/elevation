/*
Write the function that takes three dimensions of a brick: height(a), width(b) and depth(c) and returns true if this brick can fit into a hole with the width(w) and height(h).

Examples
doesBrickFit(1, 1, 1, 1, 1) ➞ true

doesBrickFit(1, 2, 1, 1, 1) ➞ true

doesBrickFit(1, 2, 2, 1, 1) ➞ false
Notes
You can turn the brick with any side towards the hole.
We assume that the brick fits if its sizes equal the ones of the hole (i.e. brick size should be less than or equal to the size of the hole, not strickly less).
You can't put a brick in at a non-orthogonal angle.
*/

function doesBrickFit(a, b, c, w, h) {
  let holeMin = Math.min(w, h)
  let holeMax = Math.max (w, h)

  if (Math.min(a,b) <= holeMin && Math.max(a,b) <= holeMax) return true;
  if (Math.min(a,c) <= holeMin && Math.max (a,c) <= holeMax) return true ;
  if (Math.min(b,c) <= holeMin && Math.max (b,c) <= holeMax) return true ;

  return false ; 
  
}

console.log(doesBrickFit(1, 1, 1, 1, 1)); // true
console.log(doesBrickFit(1, 2, 1, 1, 1)); // true
console.log(doesBrickFit(1, 2, 2, 1, 1)); // false

exports.solution = doesBrickFit;