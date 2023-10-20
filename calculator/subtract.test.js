import { subtract } from "./calculator";

test("Adds two numbers together", () => {
  expect(subtract(4, 1)).toBe(3);
});

test("Throws an error if 'a' isn't a number", () => {
  expect(() => {
    subtract("1", 1);
  }).toThrow();
});

test("Throws an error if 'b' isn't a number", () => {
  expect(() => {
    subtract(1, "1");
  }).toThrow();
});

test("Throws an error both 'a' and 'b' aren't numbers", () => {
  expect(() => {
    subtract("1", "1");
  }).toThrow();
});
