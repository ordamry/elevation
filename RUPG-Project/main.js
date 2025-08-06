document.addEventListener("DOMContentLoaded", () => {
    const generateBtn = document.getElementById("generate-btn")

    generateBtn.addEventListener("click", async () => {
       try {
        const [userData, quote, pokemon, aboutMe] = await Promise.all([
            getRandomUsers(),
            getKanyeQuote(),
            getRandomPokemon(),
            getMeatText()
        ])

        const user = new User (
            userData.mainUser,
            userData.friends,
            quote,
            pokemon,
            aboutMe
        )
        console.log("User Created:", user)
        renderUser(user)
       } catch (error) {
        console.error("Error creating user:", error)
       }
    })
})