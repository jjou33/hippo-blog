---
date: "2022-04-13"
title: "[Algorithm] 교육과정설계(Queue)"
categories: ["Algorithm", "Queue"]
index: 1
domain: "Algorithm"
sideTitle: "Queue"
summary: "알고리즘 공부 간 기록이 필요한 문제들에 대한 정리를 기록하는 포스트 입니다."
thumbnail: "./thumbnail/mainImage.png"
categoryIcon: "../sumnail.png"
---

###  문제 요건

---

- 입력으로 필수로 들어야하는 과목을 나열한 **String**과 수강한 순서대로 나열한 **String**을 준다. 첫번째 인자의 순서대로 필수 수강이 필요한 과목을 모두 순서에 맞게 수강하였으면 **Yes** 아니면 **No** 를 출력하라

###  코드

---

```javascript
function solution(forcedClass, myClassList) {
  let queue = forcedClass.split('')
  Array.from(myClassList).forEach((v) => {
    if(queue.includes(v)) {
      if(v !== queue.shift()) {
        return "NO"
      }
    }
    
  })
  if(queue.length > 0) {
    console.log("NO")
  } else {
    console.log("YES")
  }
}
solution("CBA", "CDABGE");
```

###  결과정리

---

이번 문제는 사실 **Queue**를 활용한다는 점을 알면 쉽게 풀 수 있었던 문제였다.

그리고 개인적으로 이번문제에서 중요하다고 생각했던 부분은 두가지이다.

1. queue 설정 잡기
2. **includes** 와 **shift**를 통해서 사전에 순서가 맞지 않으면 뒷까지 검사하지 않고 끊내는 부분

오늘도 화이팅
