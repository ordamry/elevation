function safeJsonParse(input) {
  try {
    return JSON.parse(input);
  } catch (error) {
    return "Invalid JSON format";
  }
}

console.log(safeJsonParse('{"name": "John"}'));
console.log(safeJsonParse('invalid json'));     
