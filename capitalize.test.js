import { capitalize } from "./capitalize";

test("First character gets capitalized", () =>
  expect(capitalize("hello")).toMatch("H"));

test("Nothing changes if first character is already capital", () =>
  expect(capitalize("Hello")).toMatch("H"));

test("Returns an empty string if given an empty string", () =>
  expect(capitalize("")).toMatch(""));

test("Throws an error if given value isn't a string", () =>
  expect(() => {
    capitalize(5);
  }).toThrow());
