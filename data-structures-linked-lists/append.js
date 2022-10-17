/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported append */

function append(list, value) {
  if (list.next === null) {
    list.next = new LinkedList(value);
    return list;
  } else {
    append(list.next, value);
  }
}
