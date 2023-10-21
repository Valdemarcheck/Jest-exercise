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

function getMinOfArray(array) {
  let min = Infinity;
  for (let num of array) {
    if (num < min) min = num;
  }
  return min;
}

function getMaxOfArray(array) {
  let max = -Infinity;
  for (let num of array) {
    if (num > max) max = num;
  }
  return max;
}

function getFloatRoundedToFifthPlace(number) {
  return Number(number.toFixed(5));
}

export function analyzeArray(array) {
  if (!(array instanceof Array)) throw new Error("Given value isn't an array");
  if (!doesArrayContainOnlyNumbers(array))
    throw new Error("An array must contain only numbers");

  return {
    average: getFloatRoundedToFifthPlace(getAverageOfArray(array)),
    min: getMinOfArray(array),
    max: getMaxOfArray(array),
    length: array.length,
  };
}
