---
date: "2021-10-05"
title: "[Algorithm] 괄호문자제거(Stack)"
categories: ["Algorithm", "Stack"]
index: 1
domain: "Algorithm"
sideTitle: "Stack"
summary: "알고리즘 공부 간 기록이 필요한 문제들에 대한 정리를 기록하는 포스트 입니다."
thumbnail: "./thumbnail/mainImage.png"
categoryIcon: "../sumnail.png"
---

### 문제 요건
***
**괄호와문자**로 이루어진 문자열을 입력받고 **괄호 사이에 들어가있는 단어**를 모두 제거하라

### 코드
***

```javascript
function solution(s) {
    let stack = []
    for(let x of s) {
        if(x === ")") {
            while(stack.pop()!=="(");
        } else {
            stack.push(x);
        }
    }
    return stack.join('')
}

let str = "(A(BC)D)EF(G(H)(IJ)K)LM(N)"
```

### 결과정리
***

**Javscript 에서 스택**은 **push, pop** 을 이용하며 **LIFO** 만 잘 기억하자.

괄호의 경우 **"(" 가 push 로 들어간 경우** **")" 를 만났을때 pop** 을 해주고 **최종적으로 stack 에는 아무것도 없이** 빠져있어야 정상괄호이다.

 


