//exercise 4:
const sum = (a,b,c) => a+b+c ;

console.log(sum(1,2,3));

//exercise 5:
const capitalize = str => str[0].toUpperCase() + str.slice(1).toLowerCase();

console.log(capitalize("bOb")) 
console.log(capitalize("TAYLOR")) 
console.log(capitalize("feliSHIA"))

//exercise 6:
const determineWeather = temp => {
  if(temp > 25){
    return "hot"
  }
  return "cold"
}

const commentOnWeather = temp => `It's ${determineWeather(temp)}`

console.log(commentOnWeather(30))
console.log(commentOnWeather(22))


