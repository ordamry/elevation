const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("what's your name?", (name) => {
    rl.question("what is your email?", (email) => {
        rl.question("what is your age?", (age) => {
            rl.question("what is your favorite color?", (color) =>{
                console.log("\nRegistration Summary:")
                console.log("Name: " + name)
                console.log("Email: "+ email)
                console.log("Age: " + age)
                console.log("Favorite color: " + color)

                rl.close()
            })
        })
    })
})