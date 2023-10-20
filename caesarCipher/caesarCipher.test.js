import { caesarCipher } from "./caesarCipher";

test("Throws an error if first argument isn't a string", () => {
  expect(() => {
    caesarCipher(5, 3);
  }).toThrow();
});

test("Throws an error if shift factor isn't a number", () => {
  expect(() => {
    caesarCipher("Hello", "Something");
  }).toThrow();
});

test("Throws an error if shift factor is a float", () => {
  expect(() => {
    caesarCipher("Hello", 3.5);
  }).toThrow();
});

test("Do nothing if shift factor equals 0", () => {
  expect(caesarCipher("Hello", 0)).toBe("Hello");
});

test("(1) Positive cipher", () => {
  expect(caesarCipher("Hello!", 1)).toBe("Ifmmp!");
});

test("(2) Positive cipher", () => {
  expect(caesarCipher("Hello!", 20)).toBe("Byffi!");
});

test("Positive cipher with cycles", () => {
  expect(caesarCipher("Hello!", 46)).toBe("Byffi!");
});

test("(1) Negative cipher", () => {
  expect(caesarCipher("Hello!", -1)).toBe("Gdkkn!");
});

test("(2) Negative cipher", () => {
  expect(caesarCipher("Hello!", -20)).toBe("Nkrru!");
});

test("Negative cipher with cycles", () => {
  expect(caesarCipher("Hello!", -46)).toBe("Nkrru!");
});
