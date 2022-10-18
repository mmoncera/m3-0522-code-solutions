/* exported removeNext */

function removeNext(list) {
  if (list.next !== null) {
    const thirdNode = list.next.next;
    list.next = thirdNode;
  }
}
