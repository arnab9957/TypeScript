interface User {
  id: string;
  email: string;
  name: string;
  age: number;
}

interface Chai {
  size: "large" | "medium" | "small";
  color: "red" | "blue" | "green";
}

class OrderChai implements Chai {
  size: "large" | "medium" | "small" = "large";
  color: "red" | "blue" | "green" = "red";
}

class Users implements User {
  id: string = "12352341";
  email: string = "user@example.com";
  name: string = "John Doe";
  age: number = 30;
}
