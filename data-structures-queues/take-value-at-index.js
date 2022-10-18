/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  let head = queue.dequeue();
  let count = 0;
  while (count < index && head !== undefined) {
    queue.enqueue(head);
    head = queue.dequeue();
    count++;
  }
  return head;
}
