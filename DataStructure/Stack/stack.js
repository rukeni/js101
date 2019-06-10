// 스택의 핵심 : 같은 인덱스에서 삭제와 추가가 이루어짐
// LIFO (후입선출)
// 스택 사용예? 중요한 것일수록 스택에 보관해두고 필요없는건 금방금방 없애는 구조

function Stack() {
  var items =[]

  this.push = function(...element) {
    items.push(...element)
  }

  this.pop = function() {
    return items.pop()
  }

  this.peek = function() {
    return items[items.length-1]
  }

  this.isEmpty = function() {
    return items.length === 0
  }

  this.size = function() {
    return items.length
  }

  this.clear = function() {
    items = []
  }

  this.print = function() {
    console.log(items.toString());
    
  }
}

module.exports = Stack