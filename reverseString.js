export function reverseString(value) {
  if (typeof value !== "string") throw new Error("Given value isn't a string");
  let reversedString = "";

  for (let i = value.length - 1; i >= 0; i--) {
    reversedString += value[i];
  }
  return reversedString;
}
