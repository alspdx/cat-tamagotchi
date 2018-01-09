import { cat } from './../src/js/cat.js'

describe('Cat', function() {
  let badCat = cat;

  beforeEach(function() {
    jasmine.clock().install();
    badCat.setHunger();
    badCat.name = "Ferguson";
    badCat.hungerLevel = 0;
    badCat.disobeyLevel = 5;
    badCat.entertainLevel = 5;
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  })

  it('should start with a name, hunger level of 0, disobey level of 5, and entertainment level of 5', function() {
    expect(badCat.name).toEqual("Ferguson");
    expect(badCat.hungerLevel).toEqual(0);
    expect(badCat.disobeyLevel).toEqual(5);
    expect(badCat.entertainLevel).toEqual(5);
  });

  it('should have a hunger level of 3 after 30001 milliseconds', function() {
    jasmine.clock().tick(30001);
    expect(badCat.hungerLevel).toEqual(3);
  });

  it('should return that the cat ate Dried Minnows and the hunger level went down 2', function() {
    jasmine.clock().tick(70001);
    expect(badCat.feedTreat('Dried Minnows')).toEqual("You fed Ferguson some Dried Minnows! Hunger level goes down 2!");
    expect(badCat.hungerLevel).toEqual(5);
  });

  it('should return that the cat ate Kibble and the hunger level went down 3', function() {
    jasmine.clock().tick(70001);
    expect(badCat.feedDryFood('Kibble')).toEqual('You fed Ferguson some Kibble! Hunger level goes down 3!');
    expect(badCat.hungerLevel).toEqual(4);
  });

  it('should return that the cat ate Fancy Feast and the hunger level went down 5', function() {
    jasmine.clock().tick(70001);
    expect(badCat.feedWetFood('Fancy Feast')).toEqual('You fed Ferguson some Fancy Feast! Hunger level goes down 5!');
    expect(badCat.hungerLevel).toEqual(2);
  });

  it('should return that the cat ate Lasagna and the hunger level goes down 3, but also gives a message that it isn\'t normal for cats to eat that', function() {
    jasmine.clock().tick(70001);
    expect(badCat.feedPeopleFood('Lasagna')).toEqual("You fed Ferguson some Lasagna. Hunger level goes down 3, but it isn't normal for cats to eat that! Disobey level increases 2!");
    expect(badCat.disobeyLevel).toEqual(7);
    expect(badCat.hungerLevel).toEqual(4);
  });

  it('should return that you played Mouse Toy with the cat. Entertainment level goes up 2, hunger level goes up 1, and disobey level drops 1.', function() {
    expect(badCat.playGameSmall('Mouse Toy')).toEqual("You played Mouse Toy with Ferguson! Entertainment level goes up 2 and Ferguson bats his eyes at you in admiration.");
    expect(badCat.entertainLevel).toEqual(7);
    expect(badCat.hungerLevel).toEqual(1);
    expect(badCat.disobeyLevel).toEqual(4);
  });

  it('should return that you played Laser Pointer with the cat. Entertainment level goes up 4, hunger level goes up 2, and disobey level drops 2', function() {
    expect(badCat.playGameBig('Laser Pointer')).toEqual("You played Laser Pointer with Ferguson! Entertainment level goes up 4 and Ferguson purs loudly while rolling around on the floor like a dum-dum.");
    expect(badCat.entertainLevel).toEqual(9);
    expect(badCat.hungerLevel).toEqual(2);
    expect(badCat.disobeyLevel).toEqual(3);
  });
});
