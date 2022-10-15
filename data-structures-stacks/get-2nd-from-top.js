/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  const lastValuePeek = stack.peek();
  if (lastValuePeek !== undefined) {
    const lastValuePop = stack.pop();
    const secondValuePeek = stack.peek();
    stack.push(lastValuePop);
    return secondValuePeek;
  }
}
