const Exercises = require('./exercises')

const ex = new Exercises ; 

//exercise 1 :
test ("isEven should return true just if the number is Even", () => {
    expect(ex.isEven(4)).toBeTruthy();

})

//exercise 2 : 
test ("reniveAtLeastOne removes at least one item from array", () => {
    const original = [1,2,3,4]
    const result = ex.removeAtLeastOne([...original])
    expect(result.length).toBeLessThan(original.length)
})

//exercise 3 : 
test ("should return a clean string without these symbols: ! # . , '", () => {
    const dirty = "he!!o, wo#rl.d"
    const clean = ex.simplify(dirty)
    expect (clean).not.toMatch(/[!#.,']/)
})

//exercise 4:
test ("validate should return error if there are no booleans", () => {
    const result = ex.validate(["hello", 123, null])
    expect(result).toEqual({error: "Need at least one boolean"})
})

test ("validate should return true if there are more true values than false", () => {
    const result = ex.validate([true, false, true, true])
    expect(result).toBe(true)
})

test ("validate should return false if there are more falses or equal number", () => {
    const result1 = ex.validate([false, false, true])
    const result2 = ex.validate ([false, true])
    expect(result1).toBe(false)
    expect(result2).toBe(false)
})

//exercise 5:

test("isEven should return true for 0", () => {
    expect(ex.isEven(0)).toBeTruthy();
});


test("removeAtLeastOne should return empty array if given empty array", () => {
    expect(ex.removeAtLeastOne([])).toEqual([]);
});

test("simplify should return empty string when given empty string", () => {
    expect(ex.simplify("")).toBe("");
});

test("validate should return true if only one true", () => {
    expect(ex.validate([true])).toBe(true);
});

test("validate should return false if only one false", () => {
    expect(ex.validate([false])).toBe(false);
});



