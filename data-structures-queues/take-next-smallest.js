/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  let head = queue.dequeue();
  let next = queue.peek();
  while (head > next) {
    queue.enqueue(head);
    head = queue.dequeue();
    next = queue.peek();
  }
  return head;
}
