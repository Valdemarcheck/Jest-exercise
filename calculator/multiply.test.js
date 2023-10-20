import { multiply } from "./calculator";

test("Adds two numbers together", () => {
  expect(multiply(3, 4)).toBe(12);
});

test("Throws an error if 'a' isn't a number", () => {
  expect(() => {
    multiply("1", 1);
  }).toThrow();
});

test("Throws an error if 'b' isn't a number", () => {
  expect(() => {
    multiply(1, "1");
  }).toThrow();
});

test("Throws an error both 'a' and 'b' aren't numbers", () => {
  expect(() => {
    multiply("1", "1");
  }).toThrow();
});
