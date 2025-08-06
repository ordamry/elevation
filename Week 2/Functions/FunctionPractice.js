//exercise 1:

//option 1:
const isEven = function (num) {
    if (num%2 == 0 )
        return true ;
    else
    return false ;
}
//option 2:
const isEven2 = function (num){
    return num%2 ==0 ;
}
console.log(isEven(10));
console.log(isEven2(7));

//exercise 2:
const printOddNumbers = function (arr){
    arr.forEach(num => {
        if(!isEven(num)) console.log(num);  
    });
}
printOddNumbers([2,5,8,12,7,3])

//exercise 3:
const numberExictsInArray = function (arr, num){
    return arr.some(n => n === num);
}

console.log(numberExictsInArray([2,5,8,12],13))

//exercise 4:
const calculator = {
    add: function (a,b){
        return a+b ;
    },
    subtract: function (a,b){
        return a-b ;
    }
}
const result1 = calculator.add(20, 1)
const result2 = calculator.subtract(30, 9)
console.log(calculator.add(result1, result2))

//exercise 5:
const turnToKing = function(name, money){
    name = name.toUpperCase()
    money = increaseByNameLength(money, name)
    name = makeRegal(name)

    console.log(name + " has " + money + " gold coins")
}
const increaseByNameLength = function (money,name){
    return money + name.length * 100 ;
}
const makeRegal = function (name){
    return "His Royal Highness, " + name ;
}

turnToKing("martin luther", 100)

//exercise 6:
function printArmstrongNumbers(){
    for (let num = 100 ; num<=999 ; num++){
        const digits = num.toString().split('').map(Number);
        const power = digits.length ;
        const sum = digits.reduce((acc, digit) => acc + Math.pow(digit, power), 0)

        if (sum === num){
            console.log(num);
        }
    }
}
printArmstrongNumbers()
