//exercise 1:
const StringFormatter = function () {
  const capitalizeFirst = function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  const toSkewerCase = function (str) {
    return str.replace(/ /g, "-");
  };

  return {
    capitalizeFirst: capitalizeFirst,
    toSkewerCase: toSkewerCase
  };
};

const formatter = StringFormatter();

console.log(formatter.capitalizeFirst("dorothy"));
console.log(formatter.toSkewerCase("blue box")); 

//exercise 2:
const Bank = function () {
  let money = 500

  const depositCash = function (cash) {
    money += cash
  }

  const checkBalance = function () {
    console.log(money)
  }

  return {
    deposit: depositCash,
    showBalance: checkBalance
  }
}

const bank = Bank()

bank.deposit(200)
bank.deposit(250)
bank.showBalance()

//exercise 3:
const SongsManager = function () {
  const songs = {}
  const baseUrl = "https://www.youtube.com/watch?v="

  const addSong = function (name, fullUrl) {
    const id = fullUrl.split("v=")[1]
    songs[name] = id
  }

  const getSong = function (name) {
    console.log(baseUrl + songs[name])
  }

  return {
    addSong: addSong,
    getSong: getSong
  }
}

const songsManager = SongsManager()

songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")

songsManager.getSong("sax")
songsManager.getSong("how long") 
