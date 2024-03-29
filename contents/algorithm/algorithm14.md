---
date: "2021-09-29"
title: "[Algorithm] 연속부분수열2"
categories: ["Algorithm", "TwoPointer"]
index: 1
domain: "Algorithm"
sideTitle: "TwoPointer"
summary: "알고리즘 공부 간 기록이 필요한 문제들에 대한 정리를 기록하는 포스트 입니다."
thumbnail: "./thumbnail/mainImage.png"
categoryIcon: "../sumnail.png"
---

### 문제 요건
---
**N개의 숫자**가 주어지면 연속부분수열의 합이 5 이하가 되는 경우를 구하여라

### 코드
---

```javascript
function solution(arr, m) {
    let sum = 0, lt = 0
    let answer = 0
    for(let rt=0; rt<arr.length; rt++) {
        sum += arr[rt]
        while(sum > m) {
            sum -= arr[lt++]
        }
        answer += rt-lt+1 // 연속 부분수열에서 추가되는 갯수 +
    }

    return answer
}

let arr = [1,3,1,2,3]
let m = 5
```

### 결과정리
***

이문제 또한 연속 부분수열에 대한 코드이다.

이번 문제에서 중요했던 부분은 역시 **lt,rt 기준점을 잡는것**과 **연속부분수열에 대한 갯수를 더하는 부분**이다.

```javascript
answer += rt-lt+1 // 연속 부분수열에서 추가되는 갯수 +
```
**연속된 숫자 lt를 고정 후 rt 를 증가시켜가면서 rt 가 증가하였을때 N 개의 연속된 숫자에 추가되는 갯수는 rt - lt + 1 개이다.**

**즉, lt = 0, rt = 1 인경우 통과 후 rt 가 증가하면서 rt = 2 가되고 내부 arr 값중 1,3,1 까지 오게되며 이 사이의 마지막 1이 추가되면서 발생하는 연속부분수열 갯수는 {1}, {3,1} , {1,3,1} 3개이며 이는 2 - 0 + 1 이렇게 3개가 나온다.**

이부분을 명심하며 기록하고 추후 사용하도록한다.

### Key Point
***

1. lt , rt 기준 구하기
2. 연속된 숫자에 추가되는 부분수열 갯수 rt - lt + 1
