class PriorityQueue {
  constructor(items = []) {
    this.items = items
  }

  dequeue(){
    // 큐의 첫 번째 원소를 반환하고 큐에서 삭제한다.
    return this.items.shift()
  }
  front(){
    // 큐의 첫번째 원소를 반환. 데이터 변환은 없음
    return items[0]
  }
  isEmpty(){
    // 큐가 비어 있으면 true를, 그 외에는 false를 반환한다.
    return this.items.length === 0
  }
  size(){
    // 큐의 원소 개수를 반환한다. 배열의 length를 사용한다.
    return this.items.length
  }
  print(){
    // 디버깅 용도
    let items = this.items
    console.log({items});
  }
  enqueue(element, priority) {
    let queueElement = new QueueElement(element , priority)

    if(this.isEmpty()) {
      this.items.push(queueElement)
    } else {
      let added = false
      for (let i = 0; i < this.items.length; i++) {
        if (queueElement.priority < this.items[i].priority) {
          this.items.splice(i, 0, queueElement)
          added = true
          break
        }
      }
      if(!added) {
        this.items.push(queueElement)
      }
    }
  }
}

class QueueElement {
  constructor(element, priority) {
    this.element = element
    this.priority = priority
  }
}
module.exports = PriorityQueue