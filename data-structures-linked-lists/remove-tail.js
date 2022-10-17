/* exported removeTail */

function removeTail(list) {
  if (list.next !== null) {
    const isTail = list.next.next === null;
    if (isTail) {
      list.next = null;
    } else {
      removeTail(list.next);
    }
  }
}
