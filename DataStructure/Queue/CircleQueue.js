const Queue = require('./Queue')

const CircleQueue = (nameList, number) => {
  const queue = new Queue()
  for (let i = 0; i < nameList.length; i++) {
    queue.enqueue(nameList[i])
  }
  let eliminated = ''
  while (queue.size() > 1) {
    for(let i=0; i<number; i++) {
      queue.enqueue(queue.dequeue())
    }
    eliminated = queue.dequeue()
    console.log(eliminated + '님을 퇴장시킵니다.')
  } 
  return queue.dequeue()
}

module.exports = CircleQueue