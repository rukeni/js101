var Stack = require('./stack')

var stack = new Stack()

console.log(stack.isEmpty());

stack.push(1,2,3,4,5,6,7,8,9)
console.log(stack.size());
stack.print()