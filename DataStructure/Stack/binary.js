var Stack = require('./stack')

function binary(number) {
  var stack = new Stack(),
  rem,
  binaryString = ''

  while(number > 0) {
    rem = Math.floor(number % 2)
    stack.push(rem)
    number = Math.floor(number / 2)
  }

  while(!stack.isEmpty()) {
    binaryString += stack.pop().toString()
  }
  return binaryString
}

module.exports = binary