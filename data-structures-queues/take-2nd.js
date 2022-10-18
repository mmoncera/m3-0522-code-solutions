/* exported take2nd */

function take2nd(queue) {
  const head = queue.dequeue();
  if (queue.peek() === undefined) {
    return head;
  }
  queue.enqueue(head);
  return queue.dequeue();
}
