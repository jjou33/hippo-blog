---
date: "2021-10-02"
title: "[Algorithm] 모든 아나그램 찾기"
categories: ["Algorithm", "hash"]
index: 1
domain: "Algorithm"
sideTitle: "hash"
summary: "홈페이지를 운영하는 많은 사람들 또는 기업들이 검색 페이지 최상단에 보여지게 하기 위해 어떤 최적화 작업을 하는지 알아보자."
thumbnail: "./thumbnail/mainImage.png"
categoryIcon: "../sumnail.png"
---

### 문제 요건
***
**두개의 문자열 a,b** 가 주어지고 **a 에서 b** 와 **아나그램**이 부합하는 경우의 수를 구하여라

### 코드
***

```javascript
function solution(a,b) {
    let th = new Map() // 기준 Map (b)
    let sh = new Map() // 비교 Map (a)
    let lt = 0
    let cnt = 0
    // sh 와 th 가 동일한지 판별하는 함수
    function compareMaps(map1, map2) {
        // map 간의 Size 가 다르면 false
        if (map1.size !== map2.size) return false;
        for (let [key, val] of map1) {
            if (!map2.has(key) || map2.get(key) !== val) return false;
        }
        return true;
    }
    // 기준되는 th 맵 셋팅
    for(let x of b) {
        if(th.has(x)) {
            th.set(x, th.get(x)+1)
        } else {
            th.set(x,1)
        }
    }
    // 비교하며 추가삭제 할 sh 맵 셋팅
    for(let i=0;i<2;i++) {
        if (sh.has(b[i])) {
            sh.set(b[i], sh.get(b[i]) + 1)
        } else {
            sh.set(b[i], 1)
        }
    }
    // 실제 비교하는 로직
    // 3번째 index 부터 시작(rt = 2)
    for (let rt = 2; rt < a.length; rt++) {
        // sh 완성
        if(sh.has(a[rt])) {
            sh.set(a[rt], sh.get(a[rt]) + 1)
        } else {
            sh.set(a[rt], 1)
        }
        // 기준 Map 과 비교
        if(compareMaps(sh, th)) {
            // 동일하면 cnt 증가
            cnt++
        }
        // lt 빼고 0이면 삭제
        sh.set(a[lt], sh.get(a[lt])-1)
        if(sh.get(a[lt]) === 0) {
            sh.delete(a[lt])
        }
        // lt 증가
        lt++
    }
    return cnt
}

let a = 'bacaAacba'
let b = 'abc'
```

### 결과정리
***

이문제는 지금까지 공부했던 **hash, Sliding Window, 투포인트 알고리즘**을 모두 사용한다.

 

**중요한 포인트**는 다음과 같다.

1. 기준 및 비교할 Hash Map 정리

2. rt, lt 기준점 정의

3. 비교방법(Sliding Window)

 

이렇게 풀지 않으면 **반복적인 For 문을 통해 시간복잡도**가 크게 증가하나 이 방법으로 해결하게 되면 많이 줄일 수 있는 장점이 있다.

문제에 대한 설명은 코드에 작성하였고 이와 비슷한 문제를 많이 풀어보며 익숙해저야 할 것이다.
