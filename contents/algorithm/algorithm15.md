---
date: "2021-09-30"
title: "[Algorithm] 최대 매출"
categories: ["Algorithm", "TwoPointer"]
index: 1
domain: "Algorithm"
sideTitle: "TwoPointer"
summary: "홈페이지를 운영하는 많은 사람들 또는 기업들이 검색 페이지 최상단에 보여지게 하기 위해 어떤 최적화 작업을 하는지 알아보자."
thumbnail: "./thumbnail/mainImage.png"
categoryIcon: "../sumnail.png"
---
### 문제 요건
***
**N 일간의 매출 기록**이 주어지고 **K 일간의 연속된 매출** 중 **최대 매출**을 구하라

### 코드
***

```javascript
function solution(k, arr) {
    let answer = sum = 0
    for(let i=0; i<k; i++) {
        sum += arr[i]
    }
    answer = sum
    for(let i=k ;i<arr.length; i++) {
        sum += arr[i]-arr[i-k]
        answer = Math.max(answer, sum)
    }
    return answer
}

let arr = [12,15,11,20,25,10,20,19,13,15]
```

### 결과정리
***

이 문제는 **슬라이딩 윈도우(Sliding Window)** 방법이며 주어진 배열에서 **K 개의 숫자를 옆으로 이동**하며 로직을 완성하는 방법이다.

크게 어려운 문제는 아니었으나 **중요한 포인트**는 **이중 반복문**을 통해 돌리는 것보다 **적은 시간복잡도**로 풀기 위해 **추가되는값과 빠지는 값의 차이**를 현재 **최대값과 비교**하는 부분을 기억하면 좋을것 이다.
