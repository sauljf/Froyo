const flavorString = prompt(
  "Please enter a comma-separated list of froyo flavors."
);
const flavors = flavorString.split(",");
const counts = count(flavors);

console.table(counts);

function count(arr) {
  const counts = {};
  for (const element of arr) {
    if (element in counts) {
      counts[element] += 1;
    } else {
      counts[element] = 1;
    }
  }
  return counts;
}

function countFlavors(flavors) {
  const counts = {};
  for (const flavor of flavors) {
    if (flavor in counts) {
      counts[flavor] += 1;
    } else {
      counts[flavor] = 1;
    }
  }
  return counts;
}
