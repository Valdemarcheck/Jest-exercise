export function add(a, b) {
  if (typeof a !== "number") throw new Error("'a' isn't a number");
  if (typeof b !== "number") throw new Error("'b' isn't a number");
  return a + b;
}

export function subtract(a, b) {
  if (typeof a !== "number") throw new Error("'a' isn't a number");
  if (typeof b !== "number") throw new Error("'b' isn't a number");
  return a - b;
}

export function multiply(a, b) {
  if (typeof a !== "number") throw new Error("'a' isn't a number");
  if (typeof b !== "number") throw new Error("'b' isn't a number");
  return a * b;
}

export function divide(a, b) {
  if (typeof a !== "number") throw new Error("'a' isn't a number");
  if (typeof b !== "number") throw new Error("'b' isn't a number");
  if (b === 0)
    throw new Error("'b' is zero, which is not allowed (division by zero)");
  return parseFloat((a / b).toFixed(5));
}
