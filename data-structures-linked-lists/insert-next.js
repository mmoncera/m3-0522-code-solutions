/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported insertNext */

function insertNext(list, value) {
  const secondNode = list.next;
  const insertedNode = new LinkedList(value);
  insertedNode.next = secondNode;
  list.next = insertedNode;
}
