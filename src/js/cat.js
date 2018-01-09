export let cat = {

  setHunger: function() {
  const hungerInterval =  setInterval(() => {
      this.hungerLevel++;
    }, 10000);
  },

  setBoredom: function() {
    const boredomInterval = setInterval(() => {
      this.entertainLevel--;
    }, 10000);
  },

  setDisobey: function() {
    let interval = 10000;
    let disobeyInterval = setInterval(() => {
      const disobeyChance = this.disobeyLevel * 5;
      if (Math.ceil(Math.random() * 100) < disobeyChance) {
        this.catDisobey();
      };
    }, interval);
  },

  feedCat: function(amount) {
    let that = this;
    return function(food) {
      that.hungerLevel -= amount
      return `You fed ${that.name} some ${food}! Hunger level goes down ${amount}!`
    }
  },

  peopleFood: function(amount) {
    let that = this;
    return function(food) {
      that.disobeyLevel += 2;
      that.hungerLevel -= amount;
      return `You fed ${that.name} some ${food}. Hunger level goes down ${amount}, but it isn't normal for cats to eat that! Disobey level increases 2!`
    }
  },

  entertainCat: function(amount, gameType) {
    let that = this;
    return function(game) {
      that.entertainLevel += amount;
      if (gameType === "small") {
        that.hungerLevel += 1;
        that.disobeyLevel -= 1;
        return `You played ${game} with ${that.name}! Entertainment level goes up ${amount} and ${that.name} bats his eyes at you in admiration.`
      }
      else if (gameType === "big") {
        that.hungerLevel += 2;
        that.disobeyLevel -= 2;
        return `You played ${game} with ${that.name}! Entertainment level goes up ${amount} and ${that.name} purs loudly while rolling around on the floor like a dum-dum.`
      }
    }
  }
}

cat.feedTreat = cat.feedCat(2);
cat.feedDryFood = cat.feedCat(3);
cat.feedWetFood = cat.feedCat(5);
cat.feedPeopleFood = cat.peopleFood(3);
cat.playGameSmall = cat.entertainCat(2, "small");
cat.playGameBig = cat.entertainCat(4, "big");
