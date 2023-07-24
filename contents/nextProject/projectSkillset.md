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

### NextJS v13 이 맞을까?
---

![image](https://github.com/jjou33/hippo-blog/assets/134469187/ee007c65-cb25-424d-81c1-64f00eaeb925)


이번에 NextJS 가 13버전으로 올라가면서 많은것이 변경되었다고 한다.

이전 버전은 사용해보지는 않아서, 자세한부분은 좀 더 확인해봐야겠지만 전반적으로 NextJS 의 버전업 속도가 생각보다 빠른것 같다.

아직 개발이 시작된것은 아니지만, 초기에 발생한 문제는 호환성이었다.

![image](https://github.com/jjou33/hippo-blog/assets/134469187/bd638ef7-8cd5-455c-bfc3-5c0bf983bf6d)

원래는 **Emotion** 을 사용하고 싶었으나, 현재 버전업이 된 지 오래되지 않아서 아직 Next 진영에서 **Emotion** 에 대한 대응작업을 진행중이어서 안정화 단계는 아닌것 같다.

또한, 아직까지 **App** 디렉토리에 대한 안정성과 호환성 그리고 기존 **page** 기반 디렉토리와 변화가 많아 현재 실무에서는 아직까지 신규프로젝트가 아닌 이상 13 app 으로 마이그레이션 하는 부분은 아직까지는 많지 않을것 같다.

따라서, 기존 12버전의 **page** 디렉토리를 사용해서 진행하되, 추후 안정화가 되면 **app** 디렉토리로 다시 마이그레이션을 하는게 맞다는 생각이 든다.

### 전역 상태관리 TOOL
---

전역적으로 상태관리가 필요한 부분이 있다면, 이부분은 **Recoil** 을 사용할 예정이다.

### Emotion
---

13버전에서는 아래와 같은 문구가 있었다.

```bash
If you want to style Server Components, we recommend using CSS Modules or other 
solutions that output CSS files, like PostCSS or Tailwind CSS.
```

즉, **서버 컴포넌트**를 스타일링 하기 위해서는 아직까지는 CSS Modules 혹은 Tailwind Css 를 활용하라는 뜻이다.

결국 12버전을 사용할 예정이기 때문에 기존과 같이 **Emotion** 프레임워크로 진행 할 예정이다.

### Package Manager(Pnpm) / Language(Typescript)
---

추가적으로 패키지 매니저는 **PNPM** 으로 결정하였다.

**npm** 그리고 **yarn** 보다는 개인적으로 훨씬 편하고 번들링 사이즈라는 요소에서 효율적이기 때문에 괜찮다고 생각을 하였다.

개발언어는 **typescript** 를 활용하여 진행할 예정이다.

### 최종결론
---

아직 시작한건 없지만, 시작이 반이라는 말이 있듯이 시간이 나는데로 조금씩 진행해봐야겠다.