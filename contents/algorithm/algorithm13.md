---
date: "2021-09-01"
title: "[Algorithm] 연속부분수열"
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
**N 개의 원소**를 갖는 배열에서 연속된 수의 합이 6이 되는 경우 구하기

### 코드
***

```javascript
function solution(arr, m) {
    let lt = sum = 0
    let n = arr.length
    let cnt = 0
    for(let rt=0; rt < n; rt++) {
        sum += arr[rt]
        if(sum === m) {
            cnt++
        }
        while(sum >= m) {
            sum -= arr[lt++]
            if(sum === m) {
                cnt++
            }
        }
    }
    return cnt
}
```

### 결과정리
***

**투포인터 알고리즘**의 **이점**은 중복 for 문으로 n2 의 **시간복잡도**보다 줄일 수 있다는 점이다.

이 알고리즘으로 풀때 **중요한 부분**은 **각각의 포인터**를 어떤 기준으로 잡는지와 빠져나가는 조건을 잘 잡는 것이다.

위 문제에서도 rt, lt 의 조건과 반복문을 빠져나가는데 있어서 끝나는 조건을 잡는것이 중요하다.