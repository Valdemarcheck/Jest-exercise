export function capitalize(value) {
  if (typeof value !== "string") throw "Given value isn't a string";
  if (!value) return "";
  return value[0].toUpperCase();
}
