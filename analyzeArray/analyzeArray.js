function doesArrayContainOnlyNumbers(array) {
  return array.every((value) => typeof value === "number");
}

function getSumOfAllElementsInArray(array) {
  return array.reduce((acc, number) => (acc += number), 0);
}

function getAverageOfArray(array) {
  const sumOfAllElements = getSumOfAllElementsInArray(array);
  return sumOfAllElements / array.length;
}

export function analyzeArray(array) {
  if (!(array instanceof Array)) throw new Error("Given value isn't an array");
  if (!doesArrayContainOnlyNumbers(array))
    throw new Error("An array must contain only numbers");

  return {
    average: getAverageOfArray(array),
    length: array.length,
  };
}
