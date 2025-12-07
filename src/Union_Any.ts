// Union
let chai: string | number = "chai";
chai = 10;

let apiRequestStatus: "pending" | "success" | "error" = "pending";
apiRequestStatus = "success";
apiRequestStatus = "error";

// Any
let order: number | undefined;
// let order: any;
// let order
const currentOrders = [12, 58, 97, 63, 45];
for (let noOfOrder of currentOrders) {
  if (noOfOrder > 50) {
    order = noOfOrder;
  }
}
console.log(order);
