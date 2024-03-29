---
date: "2021-09-22"
title: "[Algorithm] 자리수의 합"
categories: ["Algorithm", "Basic"]
index: 1
domain: "Algorithm"
sideTitle: "Basic"
summary: "알고리즘 공부 간 기록이 필요한 문제들에 대한 정리를 기록하는 포스트 입니다."
thumbnail: "./thumbnail/mainImage.png"
categoryIcon: "../sumnail.png"
---

### 문제 요건
---
**N 개의 숫자가 배열**로 주어지고 **각 요소의 자릿수의 합 중 큰것 구하기**. (같은 경우 실제로 요소값이 큰 값을 리턴)

### 코드
---

```javascript
// 반복문을 통해 직접 자릿수 합 계산
function solution(arr) {
    let max = Number.MIN_SAFE_INTEGER // 최솟값 구하기 위한 defalt 값
    let answer

    for (let x of arr) {
        let sum = 0, tmp = x
        // tmp 가 0이 될때까지 반복
        while (tmp) {
            // 나머지 값으로 각 자리 분리 계산
            sum += (tmp % 10)
            // 다음 자리 구하기 위한 몫 구하기(Math.floor 도 가능)
            tmp = parseInt(tmp / 10)
        }
        // 최대값 Switching 
        if (sum > max) {
            max = sum
            answer = x
        } else if (max === sum) {
            // 같은 값이 나왔을 경우
            if (answer < x) {
                answer = x
            }
        }
    }
    return answer
}
let arr = [137, 460, 603, 40, 521, 128, 123]
```

```javascript
// 내장함수 익힘 용
function solution2(arr) {
    let tempArr = []

    for(let i=0; i<arr.length; i++) {
        // 합 구하기
        let sum = arr[i].toString().split('').reduce((acc,v) => {
            return acc + parseInt(v)
        }, 0)
        // tempArr에 동일한 합이 존재하면
        if (tempArr.indexOf(sum) !== -1) {
            // tempArr 에 존재하는 동일 합의 Index 를 통한 값과 현재 값 비교
            if(arr[tempArr.findIndex((el) => el === sum)] > arr[i]) {
                // 현재값이 작으면 0으로 push
                tempArr.push(0)
            } else {
                // 현재값이 더 크면 이전 값 0으로 변경
                tempArr[tempArr.findIndex((el) => el === sum)] = 0
                tempArr.push(sum)
            }
        } else {
            // tempArr 에 값이 존재하지 않으면
            tempArr.push(sum)
        }
    }
    // tempArr 내 최대값의 인덱스를 뽑아서 arr 내 값 Return
    return arr[tempArr.indexOf(Math.max(...tempArr))]
}

let arr = [137, 460, 603, 40, 521, 128, 123]
```

### 결과정리
***

Solution 에서는 **각 자릿수의 합을 연산자**들을 통하여 계산하였다.

내장함수의 힘을 빌리지 않았고 간단한 if 문을 통해 모든 조건을 걸를 수 있었다.
내장함수의 사용은 좋지만 우리가 실제 면접간 라이브코딩의 경우에는 종종 내장함수 없이 코드를 작성해야 하는 일이 생기기 때문에 이렇게 내장함수 없이 짜는 연습도 열심히 해야 할 것 같다.

반대로 solution2 의 경우 최대한 사용할 수 있는 내장함수를 사용해서 다른 아이디어로 작성하였다.
이런 연습또한 Javascript 의 강점인 내장함수를 익히는데 큰 도움이 될 것이다.

### Key Point
***

1. 연산자만을 통한 자릿 수 합 구하기
2. 내장함수 사용
