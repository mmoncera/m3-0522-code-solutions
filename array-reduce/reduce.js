function reduce(array, reducer, initialValue) {
  let arrayCopy = array.slice();
  if (initialValue === undefined) {
    initialValue = arrayCopy[0];
    arrayCopy = arrayCopy.slice(1);
  }
  arrayCopy.forEach(element => {
    initialValue = reducer(initialValue, element);
  });
  return initialValue;
}

const newNumbers = [1, 2, 3, 4, 5];
function total(previousValue, currentValue) {
  return previousValue + currentValue;
}

console.log('reduce(newNumbers, sum, 5):', reduce(newNumbers, total, 5));
console.log('reduce(newNumbers, sum):', reduce(newNumbers, total));
