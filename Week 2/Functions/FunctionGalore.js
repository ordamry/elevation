// exercise 1:
const people_info = [
  {
    name: "guido",
    profession: "bungalow builder",
    age: 17,
    country: "canaland",
    city: "sydurn",
    catchphrase: "what a piece of wood!"
  },
  {
    name: "petra",
    profession: "jet plane mechanic",
    age: 31,
    country: "greenmark",
    city: "bostork",
    catchphrase: "that's my engine, bub"
  },
  {
    name: "damian",
    profession: "nursery assistant",
    age: 72,
    country: "zimbia",
    city: "bekyo",
    catchphrase: "with great responsibility comes great power"
  }
]

const capitalize = function(str) {
  return str[0].toUpperCase() + str.slice(1)
}

const getAge = function(age) {
  if (age < 21) return "Underage"
  if (age > 55) return "55+"
  return `${age} year old`
}

const capitalizeProfession = function(profession) {
  return profession
    .split(" ")
    .map(capitalize)
    .join(" ")
}

const formatLocation = function(city, country) {
  return `${capitalize(city)}, ${capitalize(country)}`
}

const capitalizeCatchphrase = function(str) {
  return `"${capitalize(str)}"`
}

const getSummary = function(person) {
  const name = capitalize(person.name)
  const age = getAge(person.age)
  const profession = capitalizeProfession(person.profession)
  const location = formatLocation(person.city, person.country)
  const catchphrase = capitalizeCatchphrase(person.catchphrase)

  return `${name} is ${age} ${profession} from ${location}. ${name} loves to say ${catchphrase}.`
}

people_info.forEach(person => {
  console.log(getSummary(person))
})

//exercise 2:
const story = "In the beginning there was light. Then there were wolves. Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then, the fire caused one heck of a lot of damage."
const specialChars = [",", ".", "'", '"', "?", "!", ";"]
const wordCounts = {}

const cleanText = function(sentence) {
  let cleaned = sentence.toLowerCase()
  for (let char of specialChars) {
    cleaned = cleaned.split(char).join("")  
  }
  return cleaned.split(" ")
}

const addToCounter = function(word) {
  wordCounts[word] = (wordCounts[word] || 0) + 1
}

const countWords = function(sentence) {
  const words = cleanText(sentence)
  words.forEach(word => addToCounter(word))
}

countWords(story)
console.log(wordCounts)
