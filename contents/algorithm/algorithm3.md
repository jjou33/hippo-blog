---
date: "2021-09-15"
title: "[Algorithm] 최소값 구하기"
categories: ["Algorithm", "Basic"]
index: 1
domain: "Algorithm"
sideTitle: "Basic"
summary: "알고리즘 공부 간 기록이 필요한 문제들에 대한 정리를 기록하는 포스트 입니다."
thumbnail: "./thumbnail/mainImage.png"
categoryIcon: "../sumnail.png"
---
<hr>
:raising_hand:  ```알고리즘 공부 간 기록이 필요한 문제들에 대한 정리를 기록하는 포스트 입니다.```

<hr>

### 설명
***
Javascript 알고리즘을 푸는데 최소값을 구하는 방법은
여러가지 모듈을 사용할 수 도 있지만 모듈을 사용하지 않고 사용하는 방법이 있다.

아래와 같이 가장 작은 값을 선언 후 비교값을 돌면서 대체 하는 방식이다.


### 코드
***
- 모듈 미사용<br>

```javascript
function solution(arr) {
            let min=Number.MAX_SAFE_INTEGER;
            for(i=0; i<arr.length; i++) {
                if(arr[i]<min) {
                    console.log(min)
                    min=arr[i]
                }
            }
            return min
        }
```

- 모듈 사용<br>

```javascript
function solution2(arr) {
   // 기본적으로는 배열을 넣으면 실행되지 않음
   let min1 = Math.min(3,4,5,6)
   // 대안1 첫번째 인자는 객체, 두번재 인자에 배열
   let min2 = Math.min.apply(null, arr)
   // 대안2 전개연산자 
   let max = Math.max(...arr)
   let min = Math.min(...arr)
   return min
}
```
