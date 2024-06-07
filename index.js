const names = ["Alice", "Bob", "Charlie", "David", "Eve"];
const streets = ["Main St", "Second St", "Third St", "Fourth St", "Fifth St"];
const cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomName() {
  return getRandomElement(names);
}

function getRandomAddress() {
  const streetNumber = Math.floor(Math.random() * 1000);
  const streetName = getRandomElement(streets);
  const city = getRandomElement(cities);
  const state = "CA"; // Example state
  const zip = Math.floor(10000 + Math.random() * 90000);
  return `${streetNumber} ${streetName}, ${city}, ${state} ${zip}`;
}

function getRandomDate(start = new Date(2000, 0, 1), end = new Date()) {
  const date = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
  return date.toISOString().split("T")[0];
}

function getRandomNumber(min = 0, max = 100) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = {
  getRandomName,
  getRandomAddress,
  getRandomDate,
  getRandomNumber,
};
