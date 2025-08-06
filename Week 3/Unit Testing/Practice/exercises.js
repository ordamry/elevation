
class Exercises {
    isEven(n){
        return n % 2 == 0 ? true : false 
    }

    removeAtLeastOne(arr){
        let numItemsToRemove = Math.floor(Math.random() * (arr.length - 1)) + 1
        arr.splice(0, numItemsToRemove);
        return arr ;
    }

    simplify(str) {
        let symbols = ["!", "#", ".", ",", "'"]
        return str.split("").filter(c => symbols.indexOf(c) == -1).join("")
    }

    validate(arr){
        const booleans = arr.filter(val => typeof val === "boolean")

        if (booleans.length === 0){
            return {error : "Need at least one boolean"}
        }
        const trueCount = booleans.filter(val => val === true).length
        const falseCount = booleans.length - trueCount
        return trueCount > falseCount
    }
}


module.exports = Exercises
