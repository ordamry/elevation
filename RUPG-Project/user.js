class User {
    constructor (mainUser, friends, quote, pokemon, aboutMe) {
        this.firstName = mainUser.firstName
        this.lastName = mainUser.lastName
        this.city = mainUser.city
        this.state = mainUser.state
        this.picture = mainUser.picture

        this.friends = friends
        this.quote = quote
        this.pokemon = pokemon
        this.aboutMe = aboutMe
    }
}