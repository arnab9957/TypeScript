function order(person: string): string {
  return `Please take your order MR. ${person}`;
}

let person: string = order("John Doe");
let person2: string = order("Jane Doe");

console.log(person);
console.log(person2);
