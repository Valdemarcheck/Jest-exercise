import { add } from "./calculator";

test("Adds two numbers together", () => {
  expect(add(1, 1)).toBe(2);
});

test("Throws an error if 'a' isn't a number", () => {
  expect(() => {
    add("1", 1);
  }).toThrow();
});

test("Throws an error if 'b' isn't a number", () => {
  expect(() => {
    add(1, "1");
  }).toThrow();
});

test("Throws an error both 'a' and 'b' aren't numbers", () => {
  expect(() => {
    add("1", "1");
  }).toThrow();
});
