export default function hasValuesFromArray(set, array) {
  return arr.reduce((prev, curr) => prev && set.has(curr), true);
}
