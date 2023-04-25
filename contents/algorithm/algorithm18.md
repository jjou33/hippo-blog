---
date: "2021-10-20"
title: "[Algorithm] 후위식 연산(Post Fix)"
categories: ["Algorithm", "Stack"]
index: 1
domain: "Algorithm"
sideTitle: "Stack"
summary: "홈페이지를 운영하는 많은 사람들 또는 기업들이 검색 페이지 최상단에 보여지게 하기 위해 어떤 최적화 작업을 하는지 알아보자."
thumbnail: "./thumbnail/mainImage.png"
categoryIcon: "../sumnail.png"
---
### 문제 요건
***
**후위식 연산값**을 입력받고 결과값을 리턴하여라

### 코드
***

```javascript
function solution(s) {
    let result = lv = rv = 0
    let operator = ['+','-','*','/']
    let stack = []
    for(let x of s) {
        if(!isNaN(x)) {
            stack.push(Number(x))
        } else {
            rv = stack.pop()
            lv = stack.pop()
            stack.push(fix(rv, lv, x))
        }
    }
    return stack.pop()
}
function fix(rv,lv,op) {
    if(op === '+') {
        return lv + rv
    } else if(op === '-') {
        return lv - rv
    } else if(op === '*') {
        return lv * rv
    } else {
        return lv / rv
    }
}
let str = '352+*9-'
```

### 결과정리
***

**스택**문제를 연습할때 가장 **기본적인 문제**로 **숫자는 스택에 쌓고** **연산자**가 나오면 **앞선 두개의 스택값을 pop** 하여 연산하는 방식

 


