/* exported postpone */

function postpone(queue) {
  if (queue.peek() !== undefined) {
    const head = queue.dequeue();
    return queue.enqueue(head);
  }
}
