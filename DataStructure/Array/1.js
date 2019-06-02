// 배열 생성과 초기화하기

let array = new Array() // 빈 배열 생성하기
let array2 = new Array(7) // 배열의 개수를 지정하여 생성하기
let array3 = new Array('a','b','c','d','e') //리터럴 값을 지정하여 생성하기

// new 연산자를 사용하지 않은 생성

let array4 = [] // 빈 배열 생성하기
let array5 = ['a','b','c','d','e'] // 리터럴 값을 지정하여 생성하기

// 배열의 요소들 접근하기
for(let i=0; i<array5.length; i++) { // for(let i, length=array5.length; i<length; i++){}로 정의하면 array5.length를 매번 접근하지 않고 캐시하는 방식. 성능향상 기대 가능
  console.log(array5[i])  
}

array5.forEach((value) => {
  console.log(value)
})

// 배열과 for문을 사용한 피보나치 예제
let fivo = []
fivo[1] = 1
fivo[2] = 2
for(let i=3; i<20; i++){
  fivo[i] = fivo[i-1] + fivo[i-2]
}

for(let i=1; i<fivo.length; i++){
  console.log(fivo[i]);
  
}

// 원소 추가 및 삭제
let number = [1,2,3,4,5,6,7,8,9,10]

//마지막 요소추가
number[number.length] = 11

number.push(12)

console.log(number);

//원소 오른쪽으로 한칸 쉬프트하기
for(let i=number.length; i>=0; i--) {
  number[i] = number[i-1]
}
number[0] = 100

number.unshift(18)
console.log(number)


//원소 왼쪽으로 한칸 쉬프트하기
for(let i=0; i<number.length; i++) {
  number[i] = number[i+1]
}
number.shift()

console.log(number)

//원소 삭제하기

number.splice(5,3) // 원소의 요소 인덱스조차도 바뀌기 때문에 for문 안에서 쓰지 않을것

// 다차원 배열

//for 문으로 작성하기
let multi = []
for(let i=0; i<3; i++) {
  multi[i] =[] //i번째 항도 배열임을 한번더 할당해주지 않으면 프로퍼티를 찾지 못해 에러가 난다.
  for(let j=0; j<3; j++) {
    multi[i][j] = i+j
  }
}
console.log(multi);

//배열 메서드 정리
