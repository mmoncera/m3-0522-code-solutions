/* exported swapFront */

function swapFront(list) {
  if (list.next === null) {
    return list;
  }
  const firstNodeValue = list.data;
  list.data = list.next.data;
  list.next.data = firstNodeValue;
  return list;
}
