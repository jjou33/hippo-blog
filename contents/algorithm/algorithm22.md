---
date: "2022-02-28"
title: "[Algorithm] 공주 구하기"
categories: ["Algorithm", "Queue"]
index: 1
domain: "Algorithm"
sideTitle: "Queue"
summary: "홈페이지를 운영하는 많은 사람들 또는 기업들이 검색 페이지 최상단에 보여지게 하기 위해 어떤 최적화 작업을 하는지 알아보자."
thumbnail: "./thumbnail/mainImage.png"
categoryIcon: "../sumnail.png"
---

###  문제 요건

---

- 주어진 n 명의 인원을 순서대로 세워놓고 각자의 번호를 부여받으며, k 번째마다 탈락하며, 탈락한 인원을 제하고 순서는 그대로 이어간다. 마지막 남는 사람이 공주를 구한다. 공주구하는 인원 구하라.

###  코드

---

```javascript
function solution(n, k) {
  // n 까지의 순차적인 값이 들어간 배열 생성
  let queue = Array.from({ length: n }, (v, i) => {
    return i + 1;
  });

  // 반복문 실행
  while (queue.length) {
    // k 번째 전까지의 값을 queue 의 맨 뒤로 보냄
    for (let i = 1; i < k; i++) {
      queue.push(queue.shift());
    }
    // k 번째일 경우 그냥 제거
    queue.shift();
    // 1개 남았을 경우 리턴
    if (queue.length === 1) {
      return queue.shift();
    }
  }
}
// n : 총 인원
// k : 이름 외치는 주기
function mysolution(n, k) {
  // n 만큼의 배열 생성
  let array = Array.from({ length: n }, (v, i) => {
    return i + 1;
  });
  // 실제 탈락된 순서대로 입력
  let tmpArray = [];
  // k 번마다 카운트 하기 위한 변수
  let count = 0;

  while (true) {
    for (let j = 0; j < array.length; j++) {
      // tmpArray 에 포함되어 있는 숫자인지 확인(탈락한 인원인지)
      if (!tmpArray.includes(array[j])) {
        // 탈락한 인원이 아닐 경우 순번(카운트) 증가
        count += 1;
        // k 번째마다 탈락한 인원이므로 순번이 k 일 경우 탈락배열에 푸쉬
        if (count % k === 0) {
          tmpArray.push(array[j]);
          // 순번 초기화
          count = 0;
        }
      } else {
        continue;
      }
    }
    // 모두가 탈락한 인원일 경우 반복문 종료
    if (tmpArray.length === array.length) {
      break;
    }
  }
  // 최종 탈락한 인원 리턴
  return tmpArray.pop();
}

console.log(solution(8, 3));
```

###  결과정리

---

**Queue**를 사용하여 구한 `solution` 과 사용하지 않은 `mySolution` 이 있다.

**Queue** 를 사용하면 훨씬 간단하게 풀 수 있는것을 확인할 수 있었다.
가장 중요한 **포인트** 는 **Queue** 배열에 **K** 번째가 아닌 인원들을 뒤로 보내는 **아이디어** 이다.
