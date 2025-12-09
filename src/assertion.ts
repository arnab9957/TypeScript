let num: any = "10";

let lenNum: number = (num as string).length;

type book = {
  name: string;
  pages: number;
};

let bookString = "{\n  name: 'The Great Gatsby',\n  pages: 180\n}";

let bookObj = JSON.parse(bookString) as book;

console.log(bookObj.name);

let inputElement = document.getElementById("input") as HTMLInputElement;

let value: any;
value = "chai";
value = 10;
value = true;
value = [1, 3, 6];
value.toUpperCase();

let Nvalue: unknown;
Nvalue = "chai";
Nvalue = 10;
Nvalue = true;
Nvalue = [1, 3, 6];
if (typeof Nvalue === "string") {
  Nvalue.toUpperCase();
}

// try {
//   throw new Error("An error occurred");
// } catch (error: any) {
//   console.error(error.message);
// }
//
try {
  throw new Error("An error occurred");
} catch (error) {
  if (error instanceof Error) {
    console.error(error.message);
  } else {
    console.error("Unknown error");
  }
}

type Role = "admin" | "user" | "guest";

function checkRole(role: Role): void {
  if (role === "admin") {
    console.log("Admin role");
    return;
  }
  if (role === "user") {
    console.log("User role");
  }
  role; //(parameter) role: "user" | "guest"
}

function neverReturn(): never {
  while (true) {
    throw new Error("This function never returns");
  }
}
