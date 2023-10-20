import { divide } from "./calculator";

test("Returns a natural number if both numbers are natural", () => {
  expect(divide(6, 2)).toBe(3);
});

test("Returns a float if any number is a float", () => {
  expect(divide(4.2, 2)).toBeCloseTo(2.1);
});

test("(no change) Returns a rounded float (5 digits) if result is an infinite float", () => {
  expect(divide(1, 3)).toBeCloseTo(0.33333);
});

test("(with change) Returns a rounded float (5 digits) if result is an infinite float", () => {
  expect(divide(1, 11)).toBeCloseTo(0.09091);
});

test("Throws an error if division by zero happens", () => {
  expect(() => {
    divide(1, 0);
  }).toThrow();
});

test("Throws an error if 'a' isn't a number", () => {
  expect(() => {
    divide("1", 1);
  }).toThrow();
});

test("Throws an error if 'b' isn't a number", () => {
  expect(() => {
    divide(1, "1");
  }).toThrow();
});

test("Throws an error both 'a' and 'b' aren't numbers", () => {
  expect(() => {
    divide("1", "1");
  }).toThrow();
});
