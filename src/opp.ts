class Chai {
  flavour: string = "Sweet";
  prize: number;
  public cups: number;
  private ingredients: number = 10;
  protected shopeName: string = "chai shop";

  //Property flavour has no initializer and is not definitely assigned in the constructor
  constructor(
    flavour: string,
    prize: number,
    cups: number,
    ingredients: number,
  ) {
    this.flavour = flavour;
    this.prize = prize;
    this.cups = cups;
    this.ingredients = ingredients;
  }
}

// const chai = new Chai();// We have to pass argument here
const chai = new Chai("Sweet", 10, 5, 10);

chai.flavour = "Sweet";
chai.prize = 10;

class shop extends Chai {
  shopName() {
    return this.shopName;
  }
}

// new shop().shopName();

class Walet {
  #balance: number = 0;
  get Balance(): number {
    return this.#balance;
  }
  set Balance(value: number) {
    this.#balance = value;
  }
}

class newChai {
  private _sugar: number = 0;

  get sugar() {
    return this._sugar;
  }

  set sugar(value: number) {
    this._sugar = value;
  }
}

// static
class StaticChai {
  static shopName: string = "static chai shop";
  constructor(
    public flavour: string,
    public prize: number,
    public cups: number,
    public ingredients: number,
  ) {
    // super(flavour, prize, cups, ingredients);
  }
}
console.log(StaticChai.shopName);
// when we don't want any obj from classes
//
abstract class GetChai {
  abstract make(): void;
}

class setChai extends GetChai {
  make(): void {
    console.log("Making Chai...");
  }
}

class makingChai {
  constructor(private makee: GetChai) {
    this.makee.make;
  }
}
