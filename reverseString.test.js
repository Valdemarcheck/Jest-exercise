import { reverseString } from "./reverseString";

test("Reverses a word", () => {
  expect(reverseString("Apple")).toMatch("elppA");
});

test("Reverses a sentence", () => {
  expect(reverseString("Hello, world!")).toMatch("!dlrow ,olleH");
});

test("Does nothing to one character", () => {
  expect(reverseString("a")).toMatch("a");
});

test("Does nothing to an empty string", () => {
  expect(reverseString("")).toMatch("");
});

test("Throws an error if given value isn't a string", () => {
  expect(() => {
    reverseString(3);
  }).toThrow();
});
