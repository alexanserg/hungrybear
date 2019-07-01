export class HungryBear {
  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
  }

  setHunger() {
    setInterval(() => {
      this.foodLevel--;
    }, 1000);
  }
  didYouGetEaten(){
    if (this.foodLevel > 0) {
      return false;
    }else {
      return true;
    }
  }

  feed(){
    if (this.didYouGetEaten() === false) {
    this.foodLevel += 9;
  } else {
    return 'You are dead.';
  }
  }
}
