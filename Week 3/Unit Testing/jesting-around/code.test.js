const { add, calculateHyp, clearLowPriority } = require ('./code')

test ("add should return sum or a + b", () => {
    let sum = add (1,2)
    expect(sum).toBe(3)
})

test ("calculates hypotenuse of 3 and 4 to be 5", () => {
    expect(calculateHyp(3,4)).toBe(5);
})

test ("calculates hypotenuse of 5 and 12 to be 13", () => {
    expect(calculateHyp(5,12)).toBe(13);
})

test ("should keep only HIGH priotiry tasks", () => {
    let tasks = [{text: "dummy", priority: "HIGH"}, {text:"dummy", priority: "LOW"}]
    let filteredTasks = clearLowPriority(tasks)

    filteredTasks.forEach(t => {
        expect(t.priority).toBe("HIGH")
    });
})