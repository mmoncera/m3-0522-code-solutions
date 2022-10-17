/* exported getLength */

function getLength(list) {
  let count = 0;
  let head = list;
  while (head !== null) {
    head = head.next;
    count++;
  }
  return count;
}
