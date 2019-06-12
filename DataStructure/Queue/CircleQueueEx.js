const CircleQueue = require('./CircleQueue')
let names = ['승민', '상수', '돔', '둥', '뜨억']
let winner = CircleQueue(names, 7)
console.log('승자는', winner, '입니다')
