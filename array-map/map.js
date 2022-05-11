function map(array, transform) {
  const result = [];
  array.forEach(element => {
    result.push(transform(element));
  });
  return result;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
function add1(number) {
  return number + 1;
}

console.log('map(array, add1)', map(array, add1));
