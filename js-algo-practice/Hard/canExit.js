/*
A maze can be represented by a 2D matrix, where 0s represent walkeable areas, and 1s represent walls. You start on the upper left corner and the exit is on the most lower right cell.

Create a function that returns true if you can walk from one end of the maze to the other. You can only move up, down, left and right. You cannot move diagonally.

Examples
canExit([
  [0, 1, 1, 1, 1, 1, 1],
  [0, 0, 1, 1, 0, 1, 1],
  [1, 0, 0, 0, 0, 1, 1],
  [1, 1, 1, 1, 0, 0, 1],
  [1, 1, 1, 1, 1, 0, 0]
]) ➞ true

canExit([
  [0, 1, 1, 1, 1, 1, 1],
  [0, 0, 1, 0, 0, 1, 1],
  [1, 0, 0, 0, 0, 1, 1],
  [1, 1, 0, 1, 0, 0, 1],
  [1, 1, 0, 0, 1, 1, 1]
]) ➞ false

// This maze only has dead ends!

canExit([
  [0, 1, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 1, 0, 0],
  [1, 1, 1, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 1, 0],
  [1, 1, 1, 1, 1, 1, 1]
]) ➞ false

// Exit only one block away, but unreachable!

canExit([
  [0, 1, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 1, 0, 0],
  [1, 1, 1, 0, 0, 0, 0],
  [1, 0, 0, 0, 1, 1, 0],
  [1, 1, 1, 1, 1, 1, 0]
]) ➞ true
Notes
In a maze of size m x n, you enter at [0, 0] and exit at [m-1, n-1].
There can be dead ends in a maze - one exit path is sufficient.
*/

function canExit( maze ) {
  const rows = maze.length
  const cols = maze[0].length

  if (maze[0][0] === 1 || maze[rows-1][cols-1] === 1) return false

  const directions = [
    [1, 0], // down
    [-1, 0], //up
    [0, 1], // right
    [0, -1] // left
  ]

  const queue = [[0,0]]

  const visited = [...Array(rows)].map(() => Array(cols).fill(false));
  visited[0][0] = true
  
  while (queue.length > 0){
    const [r, c] = queue.shift()

    if (r === rows - 1 && c === cols -1) return true

    for (const [dr, dc] of directions){
      const newRow = r + dr
      const newCol = c + dc

      if (
        newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols && maze [newRow][newCol] === 0 && !visited[newRow][newCol]
      ) {
        visited[newRow][newCol] = true
        queue.push([newRow, newCol])
      }
    }
  }

  return false ;
  
}

exports.solution = canExit;