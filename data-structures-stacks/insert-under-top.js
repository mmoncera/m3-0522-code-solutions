/* exported insertUnderTop */

function insertUnderTop(stack, value) {
  const lastValuePop = stack.pop();
  if (lastValuePop !== undefined) {
    stack.push(value);
    stack.push(lastValuePop);
  }
}
