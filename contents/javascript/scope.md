---
date: "2021-11-12"
title: "Javascript Scope 정리"
categories: ["Javascript", "Scope"]
index: 4
domain: "Javascript"
sideTitle: "Javascript"
summary: JavaScript 문법과 관련 공부내용을 기록하는 포스트 입니다.
thumbnail: "./thumbnail/javascript.png"
categoryIcon: "../sumnail.png"
---

### 1. Scope 란?
***

* javascript 변수 또는 함수 선언 시 해당 변수가 유효한 범위를 의미한다. 
* 3가지 **전역(Global) , 함수(Function), Block(블록) Scope** 가 있으며 선언에 따라 **유효범위가 다르기** 때문에 이해가 필요함
* { } , 함수안에서 사용되지 않아 전역으로 범위가 설정된다.

```js
let a = 3 // 전역변수

function test() {
  console.log(a)
}

{
  let b = 3 // Block 내 변수
}
console.log(b) // 사용 불가

const a = 1;
if(a === 1) {
  let b = 1; // Block Scope 적용
}
for(a in b) {
  let c = 1 // Block Scope 적용
}
console.log(b) // 사용불가
console.log(c) // 사용불가

```
#### 2. var 의 경우 Block Scope 이 적용되지 않는다.
***

* var 로 선언된 변수가 **Block 안에 있어도 전역변수**처럼 Scope을 가진다.
* var 로 선언된 변수는 **함수**에서만 지역변수 즉, **Block Scope** 을 가진다.


```js

function a() {
  var a = 3;
  console.log(a); // 3 출력
}

{
  var b = 3;
}

console.log(a);
console.log(b); // 3출력

```
