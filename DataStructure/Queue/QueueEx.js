let Queue = require('./Queue')
let queue = new Queue()

console.log(queue.isEmpty());

queue.enqueue('john')
queue.enqueue('jack')

queue.print()

queue.enqueue('camilla')

queue.print()
console.log(queue.size())
console.log(queue.isEmpty())
queue.dequeue()
queue.dequeue()
queue.print()
