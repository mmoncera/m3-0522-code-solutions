/* exported getTail */

function getTail(list) {
  let tail;
  let head = list;
  while (head !== null) {
    tail = head.data;
    head = head.next;
  }
  return tail;
}
