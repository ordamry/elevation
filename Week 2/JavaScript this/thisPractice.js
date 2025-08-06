//exercise 1:
const person = {
  hungry: true,

  feed: function () {
    if (this.hungry) {
      this.hungry = false;
      console.log("I'm no longer hungry!")
    }
  }
}  

person.feed();

//exercise 2:
const pump = function (amount) {
  this.liters += amount;
  console.log('You put ' + amount + ' liters in ' + this.name);
};

const garage = {
  car1: {
    name: 'Audi',
    liters: 3,
    fillTank: pump
  },
  car2: {
    name: 'Mercedes',
    liters: 1,
    fillTank: pump
  }
};

garage.car1.fillTank(2);
console.log('Audi should have 5 liters: ',  garage.car1.liters);

garage.car2.fillTank(30);
console.log('Mercedes should have 31 liters: ', garage.car2.liters);

//exercise 3:
const pumpFuel = function (plane) {
  plane.fuel += 1;
};

const airplane = {
  fuel: 0,
  fly: function () {
    if (this.fuel < 2) {
      return 'on the ground!';
    } else {
      return 'flying!';
    }
  }
};
console.log('The plane should not be able to fly (yet): ' + airplane.fly());

pumpFuel(airplane);
console.log('The plane should STILL not be able to fly: ' + airplane.fly());

pumpFuel(airplane);
console.log('Take off! ' + airplane.fly());

//exercise 4:
const tipJar = {
  coinCount: 20,
  
  tip: function () {
    this.coinCount += 1;
  },

  stealCoins: function (amount) {
    this.coinCount -= amount;
  }
};

tipJar.tip();
console.log('Tip jar should have 21 coins: ' + tipJar.coinCount);

tipJar.stealCoins(3);
console.log('Tip jar should have 18 coins: ' + tipJar.coinCount);

tipJar.stealCoins(10);
console.log('Tip jar should have 8 coins: ' + tipJar.coinCount);

//exercise 5:
const revealSecret = function () {
  return this.secret;
};

const shoutIt = function (person, func) {
  person.revealItAll = func;
  const result = person.revealItAll();
  console.log(person.name + " said: " + result);
};

const avi = {
  name: "Avi",
  secret: "Im scared of snakes!"
};

const narkis = {
  name: "Narkis",
  secret: "I don't have secrets because I'm zen like that."
};

shoutIt(avi, revealSecret);
shoutIt(narkis, revealSecret);

//exercise 6:
const coffeeShop = {
  beans: 40,

  drinkRequirements: {
    latte: 10,
    americano: 5,
    doubleShot: 15,
    frenchPress: 12
  },

  makeDrink: function (drinkType) {
    const requiredBeans = this.drinkRequirements[drinkType];

    if (requiredBeans === undefined) {
      console.log("Sorry, we don't make " + drinkType);
    } else if (this.beans < requiredBeans) {
      console.log("Sorry, we're all out of beans!");
    } else {
      this.beans -= requiredBeans;
    }
  }
};

coffeeShop.makeDrink("latte");
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered");
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress");   

//exercise 6.1:
const coffeShop = {
  beans: 40,
  money: 100,

  drinkRequirements: {
    latte: { beanRequirement: 10, price: 5 },
    americano: { beanRequirement: 5, price: 3 },
    doubleShot: { beanRequirement: 15, price: 7 },
    frenchPress: { beanRequirement: 12, price: 6 }
  },

  makeDrink: function (drinkType) {
    const drink = this.drinkRequirements[drinkType];

    if (!drink) {
      console.log("Sorry, we don't make " + drinkType);
      return;
    }

    if (this.beans < drink.beanRequirement) {
      console.log("Sorry, we're all out of beans!");
      return;
    }

    this.beans -= drink.beanRequirement;
  },

  buyBeans: function (numBeans) {
    const beanPrice = 1; 
    const cost = numBeans * beanPrice;

    if (this.money < cost) {
      console.log("Not enough money to buy beans");
      return;
    }

    this.money -= cost;
    this.beans += numBeans;
  },

  buyDrink: function (drinkType) {
    const drink = this.drinkRequirements[drinkType];

    if (!drink) {
      console.log("Sorry, we don't make " + drinkType);
      return;
    }

    if (this.beans < drink.beanRequirement) {
      console.log("Sorry, we're all out of beans!");
      return;
    }

    this.money += drink.price;
    this.makeDrink(drinkType);
  }
};


