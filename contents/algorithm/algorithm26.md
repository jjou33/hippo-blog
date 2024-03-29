---
date: "2022-04-17"
title: "[Algorithm] 삽입정렬"
categories: ["Algorithm", "Sort"]
index: 1
domain: "Algorithm"
sideTitle: "Sort"
summary: "알고리즘 공부 간 기록이 필요한 문제들에 대한 정리를 기록하는 포스트 입니다."
thumbnail: "./thumbnail/mainImage.png"
categoryIcon: "../sumnail.png"
---

###  개요
---

삽입정렬은 많이 사용되는 것 같으므로 개념을 다잡는다.

간단한 삽입정렬 예제로 복기하며 포스팅해본다.

###  문제 요건

---

- 입력된 배열값을 삽입정렬을 통해 정렬하라.

###  코드

---

```javascript
function solution(arr) {
  let answer = arr;
  for(let i=1;i<arr.length;i++) {
    // arr[i]에 대한 값을 temp 에 저장해둔다. 
    // j 값은 break 한 이후 사용해야 하므로 선언을 따로해준다.
    let temp = arr[i], j
    for(j=i-1; j >= 0; j--) {
      // 만약 temp 값보다 arr[j]값이 클경우 현재 j 값의 바로앞에 j 값을 복사해넣는다.
      if (temp < arr[j]) {
        arr[j+1] = arr[j]
      } else {
        // 만약 temp 값보다 arr[j]값이 작을경우는 이 앞은 정렬이 되어있으므로
        // 빠져나간다.
        break
      }
    }
    // 빠져나왔을 경우를 대비해 j+1 즉, 현재 j의 바로 앞에 temp 값을 넣는다.
    arr[j+1] = temp
    
  }
  return answer
}

let arr = [11,7,5,6,10,9];
console.log(solution(arr));
```

###  결과정리

---

삽입정렬을 먼저 **i**값을 고정시키고 역순으로 검증을 하는 방법이다.

위 소스를 예로들면 배열의 2번째 즉, **인덱스 [1]**의 값을 **i**로 시작한다.
**i**의 값은 추후 기억을 해두어야 하기 때문에 **temp** 변수에 저장한다.

그리고 역순으로 **j**는 **i-1**로 시작하며 **0**까지 계속된다.
계속 진행하면서 만약 **temp** 값보다 클경우 현재의 **j**값 다음 인덱스에 현재의 **j**값을 복사하고
계속해서 동일하게 복사해나가다 **-1**이 되거나 **temp**보다 작은 수를 만날때까지 진행된다.

만약 **-1** 혹은 **temp**보다 작은 수를 만나게 되면 반복문을 종료하게 되고 당시 **j** 값의 다음 인덱스 **j+1** 인덱스에
처음 저장해두었던 **temp** 즉, **arr[i]** 값을 저장하며 이 동작이 **arr.length**만큼 반복된다.

기초적인 정렬이라도 **javascript** 혹은 알고리즘 대비를 위해서 계속해서 포스팅 해야겠다.



