import { analyzeArray } from "./analyzeArray";

test("Throws an error if given value isn't an instance of Array class", () => {
  expect(() => {
    analyzeArray("Not an array");
  }).toThrow();
});
