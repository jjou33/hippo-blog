---
date: "2021-09-10"
title: "[Algorithm] 앞 수들 보다 큰 수만 구하기"
categories: ["Algorithm", "Basic"]
index: 4
domain: "Algorithm"
sideTitle: "Basic"
summary: "홈페이지를 운영하는 많은 사람들 또는 기업들이 검색 페이지 최상단에 보여지게 하기 위해 어떤 최적화 작업을 하는지 알아보자."
thumbnail: "./thumbnail/mainImage.png"
categoryIcon: "../sumnail.png"
---

### 문제 요건

---

입력값으로 **N X N 행**의 배열이 주어지고 해당 배열은 사람의 키를 의미한다.

맨앞에서 볼 때 보이는 사람일경우 즉, **자신의 앞 모든사람보다 키가 큰 사람**을 구하라

### 코드

---

- 기본 솔루션<br>

```javascript
function solution(arr) {
  let count = 1;
  let high = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > high) {
      high = arr[i];
      count++;
    }
  }
  return count;
}
```

- reduce 사용

```javascript
// reduce 로 한번 풀어보았다.
function solution2(arr) {
  let temp = [arr[0]];
  let answer = arr.reduce((high, v) => {
    if (v > high) {
      temp.push(v);
      high = v;
      return high;
    } else {
      return high;
    }
  }, arr[0]);
  return temp.length;
}
```

### 결과정리

---

간단하게 반복문을 통해 **가장 큰값을 가져가고 그보다 큰 사람이 나오게 되면 카운트를 올리면 된다.**

이곳저곳 javascript 내장함수를 활용해서 몸에 사용법을 좀 익힐겸 **reduce** 로도 풀어보았다.
