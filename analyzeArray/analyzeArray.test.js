import { analyzeArray } from "./analyzeArray";

test("Throws an error if given value isn't an instance of Array class", () => {
  expect(() => {
    analyzeArray("Not an array");
  }).toThrow();
});

test("Throws an error if given array contains other values besides numbers", () => {
  expect(() => {
    analyzeArray([0, "Hey", 3, 4, -5]);
  }).toThrow();
});

test("Calculates average correctly", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toHaveProperty("average", 4);
});

test("Calculates length correctly", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toHaveProperty("length", 6);
});

test("Calculates min value correctly", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toHaveProperty("min", 1);
});

test("Calculates max value correctly", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toHaveProperty("max", 8);
});

test("Rounds average to fifth place", () => {
  expect(analyzeArray([3.14, 8, 7])).toHaveProperty("average", 6.04667);
});
