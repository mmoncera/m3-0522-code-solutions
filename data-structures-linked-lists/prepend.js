/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported prepend */

function prepend(list, value) {
  const values = [value];
  let head = list;
  while (head !== null) {
    values.push(head.data);
    head = head.next;
  }
  return new LinkedList(...values);
}
