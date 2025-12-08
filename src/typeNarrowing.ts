function chai(kind: string | number) {
  if (typeof kind === "string") {
    return `order for ${kind}`;
  } else {
    console.log(`Chai is a number ${kind}`);
  }
}

function serveChai(serve?: string) {
  if (serve) {
    console.log(`Serving ${serve}`);
  } else {
    console.log("Serving default chai");
  }
}

function orderChai(size: "small" | "medium" | "large" | number) {
  if (size === "small") {
    return "small chai";
  } else if (size === "medium") {
    return "medium chai";
  } else if (size === "large") {
    return "large chai";
  }
  return `custom chai of size ${size}`;
}

class Chai {
  serve() {
    return "Serving chai";
  }
}

class cuttingChai {
  serve() {
    return "Serving cuttingChai";
  }
}

function serve(chai: Chai | cuttingChai) {
  if (chai instanceof Chai) {
    console.log(chai.serve());
  } else {
    console.log(chai.serve());
  }
}

// Custom Types
type ChaiOrder = {
  type: string;
  sugar: number;
  milk: boolean;
};

function isChaiOrder(obj: any): obj is ChaiOrder {
  return (
    typeof obj === "object" &&
    obj != null &&
    typeof obj.type === "string" &&
    typeof obj.sugar === "number" &&
    typeof obj.milk === "boolean"
  );
}

function serverOrder(item: Chai | ChaiOrder | string) {
  if (isChaiOrder(item)) {
    return `Serving ${item.type} chai with ${item.sugar} sugar and ${item.milk ? "milk" : "no milk"}`;
  }
  return `Serving custom ${item}`;
}

type MasalaChai = {
  type: string;
  spicelevel: number;
};

type gingerChai = {
  type: string;
  spicelevel: number;
};

type ElaichyChai = {
  type: string;
  aroma: number;
};

type Chai_type = MasalaChai | gingerChai | ElaichyChai;

function MakeChai(order: Chai_type) {
  switch (order.type) {
    case "masala":
      return `MasalaChai`;
    case "ginger":
      return `gingerChai`;
    case "elaichi":
      return `ElaichyChai`;
    default:
      throw new Error("Invalid chai type");
  }
}

// Unkonwn

function handleUnknown(item: unknown) {
  if (typeof item === "string") {
    return `Handling unknown string: ${item}`;
  } else if (typeof item === "number") {
    return `Handling unknown number: ${item}`;
  } else if (typeof item === "object" && item !== null) {
    return `Handling unknown object: ${JSON.stringify(item)}`;
  }
  return `Handling unknown type: ${typeof item}`;
}
