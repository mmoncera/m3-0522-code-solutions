/* exported takeSmaller */

function takeSmaller(queue) {
  let head = queue.dequeue();
  let next = queue.peek();
  if (head > next) {
    queue.enqueue(head);
    head = queue.dequeue();
    return next;
  }
  if (head <= next) {
    next = queue.dequeue();
    queue.enqueue(next);
  }
  return head;
}
