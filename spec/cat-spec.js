import { Cat } from './../src/js/cat.js'

describe('Cat', function() {
  let badCat = new Cat("Ferguson");

  beforeEach(function() {
    jasmine.clock().install();
    badCat.setHunger();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  })

  it('should start with a name, hunger level of 0, and a behavior level of 5', function() {
    expect(badCat.hamSandwich).toEqual("Ferguson");
    expect(badCat.hungerLevel).toEqual(0);
    expect(badCat.behaviorLevel).toEqual(5);
  });

  it('should have a hunger level of 3 after 30001 milliseconds', function() {
    jasmine.clock().tick(30001);
    expect(badCat.hungerLevel).toEqual(3);
  });

  it('should have a hunger level of 0 if it is fed wet food', function () {
    expect(badCat.hungerLevel).toEqual(0);
  })
});
