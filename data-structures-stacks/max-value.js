/* exported maxValue */

function maxValue(stack) {
  let max = -Infinity;
  while (stack.peek() !== undefined) {
    const lastValuePop = stack.pop();
    if (lastValuePop > max) {
      max = lastValuePop;
    }
  }
  return max;
}
