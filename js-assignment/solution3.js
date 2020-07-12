function toArray(obj) {
  let keys = Object.keys(obj);
  let values = Object.values(obj);
  let result = Object.entries(obj);
  return result;
}
console.log(
  toArray({
    firstName: "John",
    lastName: "Doe",
  })
);
