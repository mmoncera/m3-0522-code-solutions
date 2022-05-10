function filter(array, predicate) {
  const result = [];
  array.forEach(element => {
    if (predicate(element)) {
      result.push(element);
    }
  });
  return result;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8];
function greaterThan3(number) {
  return number > 3;
}
console.log('value of filter(array, greaterThan3):', filter(array, greaterThan3));
