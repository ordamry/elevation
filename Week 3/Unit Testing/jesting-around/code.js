const add = function (a,b){
    return a + b ;
}

const calculateHyp = function (a,b){
    return Math.sqrt (a * a + b * b)
}

const clearLowPriority = function (arr){
    return arr.filter(i => i.priority === "HIGH")
}


module.exports = {add, calculateHyp, clearLowPriority} ;