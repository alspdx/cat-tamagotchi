export class Cat {
  constructor(name) {
    this.hamSandwich = name;
    this.hungerLevel = 0;
    this.behaviorLevel = 5;
  }

  setHunger() {
    setInterval(() => {
      this.hungerLevel++;
    }, 10000);
  }

  feedCat(amount) {
    return function(food) => {
      this.hungerLevel -= amount
      return `You fed ${this.hamSandwich} ${food}! Hunger level goes down ${amount}!`
    }
  }
}

Cat.eatTreat = Cat.feedCat(2);
Cat.eatDryFood = cat.feedCat(3);
Cat.eatWetFood = cat.feedCat(5);
Cat.eatPeopleFood = cat.feedCat(3);
