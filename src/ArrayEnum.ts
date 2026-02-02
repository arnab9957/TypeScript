const chai: string[] = ["lal", "Dudh"];

const chaiPrize: number[] = [5, 10];

const cup: Array<string> = ["Large", "medium", "small"];

const indiPrice: [size: string, price: number] = ["Large", 10];

// Array of object
type Chai = {
  size: string;
  price: number;
};

const orderChai: Chai[] = [
  { size: "Large", price: 10 },
  { size: "medium", price: 5 },
  { size: "small", price: 3 },
];

const names: readonly string[] = ["John", "Jane", "Doe"];
// names.push("Alice"); not allowed

let chaiTuple: [string, number];
chaiTuple = ["small", 3];
chaiTuple = ["medium", 5];

enum cupSize {
  LARGE = "Large",
  MEDIUM = "medium",
  SMALL = "small",
}

const sizes = cupSize.LARGE;
const sizes2 = cupSize.MEDIUM;

function orderChais(size: cupSize): void {
  console.log(`Ordered ${size} chai`);
}

orderChais(cupSize.MEDIUM);

enum status {
  start = 10000,
  middle, //= 10001,
  end, //= 10002 incremented by 1 every time
}
