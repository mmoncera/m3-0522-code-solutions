/* exported includes */

function includes(list, value) {
  let head = list;
  while (head !== null) {
    if (head.data === value) {
      return true;
    }
    head = head.next;
  }
  return false;
}
