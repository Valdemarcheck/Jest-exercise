const A_CODE = 65;
const Z_CODE = 90;
const a_CODE = 97;
const z_CODE = 122;
const ALPHABET_SIZE = 26;

function checkArgumentsErrors(string, shiftFactor) {
  if (typeof string !== "string")
    throw new Error("Given string isn't of datatype string");
  if (typeof shiftFactor !== "number")
    throw new Error("Given shift factor isn't of datatype number");
  if (shiftFactor !== Math.round(shiftFactor))
    throw new Error("Given shift factor is a floating point number");
}

function isAsciiCodeACapital(asciiValue) {
  return asciiValue >= A_CODE && asciiValue <= Z_CODE;
}

function isASCIICodeALetter(asciiValue) {
  return (
    (asciiValue >= A_CODE && asciiValue <= Z_CODE) ||
    (asciiValue >= a_CODE && asciiValue <= z_CODE)
  );
}

function normalizeShiftFactor(shiftFactor) {
  if (shiftFactor > 0) {
    const cycles = Math.floor(shiftFactor / ALPHABET_SIZE);
    return shiftFactor - ALPHABET_SIZE * cycles;
  } else {
    const cycles = Math.ceil(shiftFactor / ALPHABET_SIZE);
    return shiftFactor - ALPHABET_SIZE * cycles;
  }
}

function normalizeAsciiValue(asciiValue, isCapital) {
  let normalizedAsciiValue = 0;

  if (isCapital) {
    if (asciiValue < A_CODE) {
      const difference = A_CODE - asciiValue;
      normalizedAsciiValue = Z_CODE - difference + 1;
    } else if (asciiValue > Z_CODE) {
      const difference = asciiValue - Z_CODE;
      normalizedAsciiValue = A_CODE + difference - 1;
    } else {
      normalizedAsciiValue = asciiValue;
    }
  } else {
    if (asciiValue < a_CODE) {
      const difference = a_CODE - asciiValue;
      normalizedAsciiValue = z_CODE - difference + 1;
    } else if (asciiValue > z_CODE) {
      const difference = asciiValue - z_CODE;
      normalizedAsciiValue = a_CODE + difference - 1;
    } else {
      normalizedAsciiValue = asciiValue;
    }
  }
  return normalizedAsciiValue;
}

export function caesarCipher(string, shiftFactor) {
  checkArgumentsErrors(string, shiftFactor);
  if (shiftFactor === 0) return string;

  let cipheredString = "";
  const actualShiftFactor = normalizeShiftFactor(shiftFactor);

  for (let char of string) {
    const asciiValue = char.charCodeAt(0);

    if (!isASCIICodeALetter(asciiValue)) {
      cipheredString += char;
      continue;
    }
    const isCapital = isAsciiCodeACapital(asciiValue);
    const asciiValueWithShift = normalizeAsciiValue(
      asciiValue + actualShiftFactor,
      isCapital
    );
    const cipheredLetter = String.fromCharCode(asciiValueWithShift);
    cipheredString += cipheredLetter;
  }
  return cipheredString;
}
