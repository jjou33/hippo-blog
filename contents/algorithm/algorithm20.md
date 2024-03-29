---
date: "2021-12-31"
title: "[Algorithm] 배열 내 특정 조건에 맞는 값 제거"
categories: ["Algorithm", "Array"]
index: 1
domain: "Algorithm"
sideTitle: "Array"
summary: "알고리즘 공부 간 기록이 필요한 문제들에 대한 정리를 기록하는 포스트 입니다."
thumbnail: "./thumbnail/mainImage.png"
categoryIcon: "../sumnail.png"
---

###  문제 요건

---

- 주어진 배열 내 특정값을 찾아 제거한다.

###  코드

---

```javascript
function solution(arr) {
  let testArr = arr;
  // reduce 를 통한 arr 배열의 합 구하기
  let sum = arr.reduce((a, b) => a + b, 0);
  // 이중 for 문을 통해 배열 내 탐색
  for (let i = 0; i < 8; i++) {
    for (let j = i + 1; j < 9; j++) {
      if (sum - (testArr[i] + testArr[j]) === 100) {
        // i 먼저 지우고 j 를 지우게되면 index 가 틀려지기 때문에 순서 변경
        testArr.splice(j, 1);
        testArr.splice(i, 1);
      }
    }
  }

  return testArr.reduce((result, v) => result + v, 0);
}

let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));
```

###  결과정리

---

특별히 어려운 문제는 아니다.

다만, 배열의 합을 구할때 `reduce` 함수를 활용하는 방법을 간단하게 알아볼 수 있다.

배열 내에서 두 값을 비교하며 특정 조건에 만족하는 인덱스를 찾게 될 때는 `splice` 함수를 활용하여 지울 수 있다.

이때 주의해야 할 점은 위 코드에서 볼 수 있듯이 마지막에 조건에 맞는 인덱스를 지울 때 `i` 인덱스를 먼저 지우게 되면 `i` 인덱스가 사라짐으로 인해 순서가 앞으로 당겨지므로 뒷 숫자부터 삭제하도록 하는 부분이다.

물론 `i` 부터 진행 후 `j-1` 로 변경해도 무방하다.
