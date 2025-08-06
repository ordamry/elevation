const getRandomUsers = async () => {
    try {
    const response = await fetch("https://randomuser.me/api/?results=7")
    const data = await response.json()

    const users = data.results

    const mainUser = {
        firstName: users[0].name.first,
        lastName: users[0].name.last,
        city: users[0].location.city,
        state: users[0].location.state,
        picture: users[0].picture.large,
    }

    const friends = users.slice(1).map(user => ({
        firstName: user.name.first,
        lastName: user.name.last
    }))

    return {mainUser, friends}
    } catch (error){
        console.error("Error fetching users:", error)
        return null
    }
    }
    
    const getKanyeQuote = async () => {
        try {
            const response = await fetch ("https://api.kanye.rest")
            const data = await response.json()
            return data.quote
        } catch (error){
            console.error("Error fetching Kanye quote", error)
            return "Kanye has nothing to say right now."
        }
    }

    const getRandomPokemon = async () => {
        const randomPokemonId = Math.floor(Math.random() * 1025) + 1

        try{

            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`)
            const data = await response.json()

            return {
                name: data.name,
                image: data.sprites.front_default
            }
        } catch (error){
            console.error ("Error fetching pokemon", error)
            return {
                name: "missingno",
                image: "https://via.placeholder.com/100"
            }
        }
    }

    const getMeatText = async () => {
        try {
            const response = await fetch ("https://baconipsum.com/api/?type=meat-and-filler&paras=1")
            const data = await response.json()
            return data[0]
        }catch (error){
            console.error ("Error fetching bacon text:", error)
            return "I'm just a regular meat lover living my best loren ipsum life"
        }
    }
