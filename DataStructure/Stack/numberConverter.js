var Stack = require('./stack')

function converter(number, base) {
  var stack = new Stack(),
  rem,
  baseString = '',
  digits = '0123456789ABCDEF'
  
  while(number > 0) {
    rem = Math.floor(number % base)
    stack.push(rem)
    number = Math.floor(number / base)
  }

  while(!stack.isEmpty()) {
    baseString += digits[stack.pop()]
  }

  return baseString
}

module.exports = converter