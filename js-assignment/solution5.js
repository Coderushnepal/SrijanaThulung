function keysAndValues(obj) {
  let keys = Object.keys(obj);
  let sortedKeysArray = keys.sort();

  let values = Object.values(obj);
  let sortedValuesArray = values.sort();

  let sortedKeysValues = [];
  sortedKeysValues.push(sortedKeysArray);
  sortedKeysValues.push(sortedValuesArray);
  return sortedKeysValues;
}
console.log(
  keysAndValues({
    firstName: "John",
    lastName: "Doe",
  })
);
