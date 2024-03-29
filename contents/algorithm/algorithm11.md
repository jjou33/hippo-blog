---
date: "2021-09-25"
title: "[Algorithm] 졸업선물(완전탐색)"
categories: ["Algorithm", "BruteForce"]
index: 1
domain: "Algorithm"
sideTitle: "BruteForce"
summary: "알고리즘 공부 간 기록이 필요한 문제들에 대한 정리를 기록하는 포스트 입니다."
thumbnail: "./thumbnail/mainImage.png"
categoryIcon: "../sumnail.png"
---

### 문제 요건
---
  **M(자본금)** 과 **학생 선물의 가격(가격, 배송비) 배열**을 입력받고 **최대**로 살 수 있는 갯수 구하기**(상품50% 쿠폰1개 존재)**

### 코드
---

```javascript
ffunction solution(product, m) {
    let answer = Number.MIN_SAFE_INTEGER
    let n = product.length // 할인받은 상품
    // 상품가격, 배송비 합 낮은 순 정렬
    product.sort((a,b) => ((a[0]+a[1]) - (b[0]+b[1])))
    for(let i=0; i<product.length; i++) {
    	// 할인상품 i
        let money = m - (product[i][0]/2 + product[i][1])
        let cnt = 1
        // 할인상품을 뺀 나머지 합계 구함
        for(let j=0; j<product.length -1;j++) {
            if(j !== i && money >= (product[j][0] + product[j][1])) {
                money -= product[j][0] + product[j][1]
                cnt++
            } else {
                break
            }
        }
        // answer 최신화
        if(cnt > answer) {
            answer = cnt
        }
    }
    return answer
    
}
let arr = [[6, 6], [2, 2], [4, 3], [4, 5], [10, 3]];
```


### 결과정리
***

이 문제 또한 **완전탐색** 문제이다.

완전탐색은 좋은 알고리즘 방법은 아니지만 부득이 하게 써야할경우만 사용하지만 알고리즘 연습할때는 좋은 문제인 것 같다.

완전탐색 문제를 풀면서 느끼는 점은 **우리가 어떤 기준점을 잡아서 돌리냐**에 따라서 코드 및 **시간복잡도가 크게 달라진다**는 것이다.

풀이에서 보면 할인상품을 기준점으로 잡고 그 다음 로직을 풀어나가니 조금은 쉽게 풀리게 되었다.

이러한 문제를 풀면서 우리가 문제 해결로직에 있어서 가장 **Key Point** 가 되는 점을 잡는 연습을 많이 해야겠다.

또한 낮은순으로 선 정렬 후 로직을 시작하는 부분도 Key Point 가 될 것이다.

### Key Point
***

1. 선 정렬 후 로직 실행
2. 먼저 선택된 값은 뺴고 조회
3. 기준점 잡기
