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
