<h1>Hippo Dev Blog</h1>

#### 프로젝트 제작 개요

---

본 프로젝트는 개인적인 취미로 시작한 나만의 블로그 만들기 프로젝트입니다.

해보고 싶었던 기술셋으로 프로젝트를 셋팅 하였고, 내가 배우고 학습한 것들을 활용하여 개발하고 있습니다.

개인 프로젝트이다보니, 아직 완벽하게 진행된 부분은 아니며 계속해서 업데이트 해 나아갈 예정입니다.

완료 시 이전 블로그에서 본 플로그로 포스트 이전 예정입니다.

이전 블로그 주소 : [https://jjou33.github.io/](https://jjou33.github.io/)
현재 프로젝트 블로그 주소 : [https://hippo-dev.vercel.app/](https://hippo-dev.vercel.app/)

## Tech Stack

| Name               | Description                                      |
| ------------------ | ------------------------------------------------ |
| React              | Frontend Library                               |
| Recoil             | 상태 관리                                   |
| Type-script        | 작성 언어                                        |
| gatsby, webpack... | 환경 구성 관련 (서버사이드, 번들링, 플러그인 등) |
| PNPM               | Package Manager                                  |
| Emotion Styled     | Styled Component FrameWork                       |

<br />

---

<br />

## Install and use

<br />

✅ 프로젝트 실행 방법

---
<br />

✅ PNPM 설치 

```bash
npm install -g pnpm
```

<br />

✅ 의존성 설치 (<strong style="color: red">pnpm global 설치 작업 선행 후 진행</strong>)

```bash
pnpm install
```

<br />

✅ 프로젝트 기동 (의존성 설치 후 진행 가능)

```bash
pnpm dev
```

## Coding Convention Check


✅ LINT 검사

```bash
pnpm lint
```

<br />

✅ Type Check

```bash
pnpm typecheck
```

<br />
---

## Browser support

본 프로젝트 개발 브라우저 환경은 `Chrome 80+` 이상 사용을 권장합니다.

## 프로젝트 구조

✅ 파일 구조 및 설명

```md
hippo-blog
├─ .vscode 
│  ├─ extensions.json
│  └─ settings.json
├─ contents // Markup 포스팅 파일 
│  ├─ algorithm // 대주제
│  │  ├─ thumbnail // 썸네일 이미지 파일
│  │  ├─ 등수구하기.md // MarkupText 파일
│  │  └─ 앞 수들 보다 큰 수만 구하기.md // MarkupText 파일
│  ...
├─ src
│  ├─ assets
│  │  ├─ fonts // Font 파일 정보
│  │  └─ svg // SVG Template 모듈 저장 파일
│  ├─ components
│  │  ├─ common // 공용성 컴포넌트
│  │  ├─ layout // Layout 컴포넌트
│  │  ├─ main // Main 영역 컴포넌트
│  │  │  ├─ MainImage // 렌딩 페이지 GIF 이미지 컴포넌트 
│  │  │  ├─ MainIntro // 이미지 텍스트 컴포넌트
│  │  │  ├─ Post // 마크업 포스트 페이지 컴포넌트(SSG)
│  │  │  ├─ PostList // 포스트 리스트 페이지 컴포넌트
│  │  │  │  ├─ PageNation // PageNation 컴포넌트
│  │  │  │  ├─ PostCardList // 카드 디자인 리스트 컴포넌트
│  │  │  │  ├─ PostCategoryHeader // 리스트 헤더 컴포넌트
│  │  │  │  ├─ PostCategoryList // 가로형 리스트 컴포넌트
│  │  │  │  ├─ PostRecentList // 최근 포스트 영역 컴포넌트
│  │  │  │  ├─ ProjectDiaryList // 프로젝트 다이어리 영역 컴포넌트
│  │  │  │  └─ RecommendCategoryList // 추천 카테고리 영역 컴포넌트
│  │  └─ navigation // Navigation 영역 컴포넌트
│  │     ├─ Category // 카테고리 영역 컴포넌트
│  │     ├─ Profile // 상단 프로파일 영역 컴포넌트
│  ├─ hooks // 커스텀 Hook
│  ├─ pages // Index Page 폴터
│  ├─ states // Recoil 상태 관리 폴더
│  ├─ styles // 스타일(CSS) 관련 폴더
│  │  ├─ globalStyle.tsx // 글로벌
│  │  ├─ reset.ts // 리셋
│  │  └─ themeVariables.tsx // 다크모드 테마
│  ├─ templates // SSG 적용 템플릿
│  ├─ types // 공용성 Type
│  │  ├─ catgegory
│  │  ├─ image
│  │  └─ post
│  └─ utils // 공용성 Util
├─ static // 정적 이미지 폴더
├─ gatsby-browser.js
├─ gatsby-config.js
├─ gatsby-node.js
├─ gatsby-ssr.js
├─ package.json
├─ tsconfig.json 
├─ .babelrc.json
├─ .eslintignore
├─ .eslintrc.json
├─ .gitignore
├─ .prettierignore
├─ LICENSE
└─ README.md
```

