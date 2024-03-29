---
date: "2021-11-04"
title: "JavaScript 문법 중 기억할 것"
categories: ["Javascript"]
index: 4
domain: "Javascript"
sideTitle: "Javascript"
summary: JavaScript 문법과 관련 공부내용을 기록하는 포스트 입니다.
thumbnail: "./thumbnail/javascript.png"
categoryIcon: "../sumnail.png"
---

### NULL VS undefined

---

- NULL : 값이 없음을 나타낸다.
- undefined : 값이 할당되지 않았음을 나타낸다.

### 예제

---

```ts
let value1;
let value2 = null;

console.log(typeof value1, value1);
console.log(typeof value2, value2);
```

### 결과

---

![image](https://user-images.githubusercontent.com/56063287/140332620-9b3809f8-c95c-4343-b086-6a0471771258.png)

**undefined 의 경우는 타입과 값이 모두 'undefined' 로 나오지만 null 의 경우 타입이 Object 로 출력되는 것을 기억하자**

#### Symbol

---

ES6에서 처음 추가된 타입으로 unique 한 값을 만들기 때문에 필요 시 사용한다.

### 예제

---

```js
let value1 = Symbol("1");
let value2 = Symbol("1");

console.log(typeof value1, value1);
console.log(typeof value2, value2);

console.log(value1 == value2); // false
console.log(value1 === value2); // false
```

### ==(동등 연산자) VS ===(일치 연산자)

---

- 동등 연산자 : 양쪽의 값이 같은지 확인
- 일치 연산자 : 값 및 데이터 타입 둘다 같은지를 확인한다.
