function doesArrayContainOnlyNumbers(array) {
  return array.every((value) => typeof value === "number");
}

export function analyzeArray(array) {
  if (!(array instanceof Array)) throw new Error("Given value isn't an array");
  if (!doesArrayContainOnlyNumbers(array))
    throw new Error("An array must contain only numbers");
}
