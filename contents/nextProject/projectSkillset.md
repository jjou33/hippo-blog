---
date: "2023-06-28"
title: "[Next Project] 프로젝트 기술 스택 정의"
categories: ["NextJS", "Project SkillSet"]
index: 4
domain: "NextJS"
sideTitle: "NextJS"
summary: "[NextJs] 어떻게 시작하는게 좋을까?"
thumbnail: "./thumbnail/next.png"
categoryIcon: "../sumnail.png"
---

### 개요

최근에 시간이 많이 없어 현재 프로젝트의 기술 셋에 대하여 간략하게 정하였고, 이에 대한 포스팅을 진행한다.

### NextJS v13
---

![image](https://github.com/jjou33/hippo-blog/assets/134469187/ee007c65-cb25-424d-81c1-64f00eaeb925)


이번에 NextJS 가 13버전으로 올라가면서 많은것이 변경되었다고 한다.

이전 버전은 사용해보지는 않아서, 자세한부분은 좀 더 확인해봐야겠지만 전반적으로 NextJS 의 버전업 속도가 생각보다 빠른것 같다.

따라서, 대부분의 기업 혹은 서비스에서는 이전버전을 사용하겠지만 추후 13버전을 토대로 업데이트가 진행 될 것이기 때문에 고민 끝에 13버전으로 진행하기로 하였다.

아직 개발이 시작된것은 아니지만, 초기에 발생한 문제는 호환성이었다.

![image](https://github.com/jjou33/hippo-blog/assets/134469187/bd638ef7-8cd5-455c-bfc3-5c0bf983bf6d)

원래는 **Emotion** 을 사용하고 싶었으나, 현재 버전업이 된 지 오래되지 않아서 아직 Next 진영에서 emotion 에 대한 대응작업을 진행중이어서 안정화 단계는 아닌것 같다.

아직 **Release** 된지가 오래되지 않아서 어쩔수 없는 부분이었다고 이해하기로 하고 13버전으로 채택하였다

### 전역 상태관리 TOOL
---

전역적으로 상태관리가 필요한 부분이 있다면, 이부분은 **Recoil** 을 사용할 예정이다.

### Tailwind CSS & MUI Design System
---

![image](https://github.com/jjou33/hippo-blog/assets/134469187/8e163ad6-3832-4d86-8603-9772b8419207)

따라서, **styled-components** 를 활용하여 진행을 고려했으나, 아래와 같은 문구가 있었다.

```bash
If you want to style Server Components, we recommend using CSS Modules or other 
solutions that output CSS files, like PostCSS or Tailwind CSS.
```

즉, **서버 컴포넌트**를 스타일링 하기 위해서는 아직까지는 CSS Modules 혹은 Tailwind Css 를 활용하라는 뜻이다.

그래서, 일단 **Tailwind CSS** 로 스타일 프레임워크를 사용하기로 하였고, 이번엔 **UI 보단 기능에 조금 더 집중**하기 위해 디자인 시스템을 탑재하였다.

많이쓰는 antd, Mui 등 고민을 하였고, 최종적으로 레퍼런스가 그나마 조금 있는 MUI 로 선택을 하게 되었다.

다만, 이부분에서 문제점은 MUI 를 활용하는 컴포넌트는 `use Client` 를 통해 클라이언트 컴포넌트로 만들어야 하는 점이다.

아직까지 안정되지는 않는 13버전의 NextJs 지만 빠르게 변화할거니 이참에 알아두면 좋을 것 같아서 그냥 진행한다.

### Package Manager(Pnpm) / Language(Typescript)
---

추가적으로 패키지 매니저는 **PNPM** 으로 결정하였다.

**npm** 그리고 **yarn** 보다는 개인적으로 훨씬 편하고 번들링 사이즈라는 요소에서 효율적이기 때문에 괜찮다고 생각을 하였다.

개발언어는 **typescript** 를 활용하여 진행할 예정이다.

### 최종결론
---

아직 시작한건 없지만, 시작이 반이라는 말이 있듯이 시간이 나는데로 조금씩 진행해봐야겠다.