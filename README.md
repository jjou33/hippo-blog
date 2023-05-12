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

```
hippo-blog
├─ .babelrc.json
├─ .eslintignore
├─ .eslintrc.json
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ FETCH_HEAD
│  ├─ HEAD
│  ├─ ORIG_HEAD
│  ├─ branches
│  ├─ config
│  ├─ description
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ objects
│  │  ├─ 00
│  │  │  └─ 0ceeda830d757c5d57f912e0557345799209c5
│  │  ├─ 01
│  │  │  ├─ 6bba6514380fbb005fab8a23d260ec900fae0e
│  │  │  └─ e640bab4599daffd410b072b99cc5a517733fd
│  │  ├─ 02
│  │  │  ├─ 46fd7d1d75abf9ae0765dd8682b8d03b0b17cc
│  │  │  ├─ 47c803961f9d9693b7904b561d903d2aa8200c
│  │  │  └─ e0b4a483d9f12aa6ccd2ace86cba740d7d94f8
│  │  ├─ 03
│  │  │  └─ cecdb28da69c99686957628d335c4ddf7f65ad
│  │  ├─ 04
│  │  │  ├─ 96b3ac41d0244b75304894126bb21b176e2880
│  │  │  └─ b1ec156a9d36be9c2a22e7a94c15f01354e18a
│  │  ├─ 06
│  │  │  ├─ 30a8498b9cf2376160cc1f4c9acc54a0bde01f
│  │  │  ├─ b929c3fbadf0c1e8afb8f3600429ba727cee1e
│  │  │  └─ ffff59086c384cceb3e04dd5bed286f35f9203
│  │  ├─ 07
│  │  │  └─ 8e14c85ca533c0aff42215631b8f6c0db5aec7
│  │  ├─ 08
│  │  │  └─ 362177b77bc76e3143e9b4ef2ca2651771b8d7
│  │  ├─ 0a
│  │  │  └─ 7af60a3ac2a81098fe1265dddc2db90fbef02c
│  │  ├─ 0c
│  │  │  └─ 46905140b9fb0c17d83306bae18ca43ae40aec
│  │  ├─ 0e
│  │  │  └─ 8878a04c58f5a6b0608670a577ddf7ce72ac22
│  │  ├─ 0f
│  │  │  ├─ 229634aed0922bc35b47bd81b98fc60203e144
│  │  │  ├─ 2baf88b36569bc0199400b54d38d84c72dd206
│  │  │  └─ 47d872dc4b6d94761edf7a4ff24ed98265b544
│  │  ├─ 10
│  │  │  └─ 810070d9e22e8325a8120bbbe5937f09c72119
│  │  ├─ 12
│  │  │  └─ bb0358622006c6e4b894a20922ff244d068554
│  │  ├─ 13
│  │  │  ├─ 9c9119857f2b22f6d4b468a753fb5e4178d3ef
│  │  │  └─ c1c9f01b1cb0bec288b068e3d66ec1e7f489f7
│  │  ├─ 14
│  │  │  ├─ 09535be00d4f9baf69d7b98bb1abbece3d5e13
│  │  │  ├─ 690d7e7794ca7e0942053477b73f79bfee0780
│  │  │  └─ 9cedea9809aa41eb3daa1518f2d8590f0c9ddf
│  │  ├─ 15
│  │  │  └─ 16899830da965f11f2d5131dfaf681e72cbb33
│  │  ├─ 17
│  │  │  └─ e9235e27878d5296f7fa88aa14f5633cf4532a
│  │  ├─ 18
│  │  │  └─ 6f0ea624a461e8eacd630bbc9ad9f8a2e10490
│  │  ├─ 19
│  │  │  └─ 939d2cfd0d418bff1a922dc73929940f6245ff
│  │  ├─ 1a
│  │  │  ├─ 1a89576e97bbdab3b79b1a7dbc836cd9cc9c1b
│  │  │  ├─ 7cda834ea55874829c0d18c59bc67e862898c6
│  │  │  └─ ba7f6915629f0a9e3e65766937ec21020dd73c
│  │  ├─ 1b
│  │  │  └─ 3b21b1feaa3c8c1e720b879db206413649cf79
│  │  ├─ 1c
│  │  │  └─ 6d3c373b7b8810f1b781f18af2b488ee1ff0a2
│  │  ├─ 1d
│  │  │  └─ 813dbd5bb5742203861daf2dcd6ce05dedaa51
│  │  ├─ 1e
│  │  │  └─ d5f0eead435fe6e3d0df53e0f803dca1054c93
│  │  ├─ 21
│  │  │  ├─ 511a4fc9f4ebee2d55b113e112e4b10e346e74
│  │  │  ├─ 9b8ddd96f5e38d527abfc612e226c6c376653d
│  │  │  └─ db17fd3000068c5da56d5c2e4883dac3df0482
│  │  ├─ 22
│  │  │  └─ debc2332870a89b2ed8b82c65f794686e92f19
│  │  ├─ 23
│  │  │  └─ e5cc9b92aa71e31998b265e32f449b42ef1fba
│  │  ├─ 24
│  │  │  └─ 50a9affb8dce243edeae2ea857d610c9835e3d
│  │  ├─ 27
│  │  │  └─ 5885352cb24b896906e77be142a7b381d2713d
│  │  ├─ 29
│  │  │  ├─ 20260950be6920f88a68e2a505e45c64204e44
│  │  │  ├─ 69ffac96ec78a6b0764ba1ca7f4a7f5662367c
│  │  │  ├─ bfee0b4bbe8654f80e28b620251d73dd7cbb0d
│  │  │  └─ dab72a7959464d3ccbb5be3fb064c61ced55bf
│  │  ├─ 2a
│  │  │  └─ 4340e7b4c284ab2313ff7b6bec799bead8551b
│  │  ├─ 2b
│  │  │  ├─ 1fab3369a3dbe6ce5775597d7388b5c3e29bf8
│  │  │  ├─ 34aa9be5aa6d6f0e563cfdc735defef2b899e2
│  │  │  └─ c1b34da1481df502c576b67fbd50cc3489978a
│  │  ├─ 2c
│  │  │  └─ c2ef8a0d82419f26f986161e9b5c17155d9a83
│  │  ├─ 2d
│  │  │  ├─ 38cd85afbd0407661a8159cae3255cf153b68c
│  │  │  └─ d9f95254fad115f873fb7e8133bc129285a8b6
│  │  ├─ 2e
│  │  │  └─ 128ed1ccd013ce486f5d8ed5682a460a0d4786
│  │  ├─ 2f
│  │  │  ├─ 18e2abd1e846fa36cd96655d31a340b9666284
│  │  │  └─ 2880ff2b20561c0d6dd40de11dea9560de1f6c
│  │  ├─ 30
│  │  │  ├─ 4c7a4c2e3b1fa21f61dacfd9c013b08b28c586
│  │  │  └─ 9f936048d4e3da8a7f93cabed75e546382153b
│  │  ├─ 31
│  │  │  └─ 5b1f737be2d018c02554e742084b7096d82f2c
│  │  ├─ 32
│  │  │  ├─ 19ca0bb00489e128be4f596ba56fac55f49a70
│  │  │  └─ 4edb27ff21b226311a645f657027740ce49cb3
│  │  ├─ 33
│  │  │  └─ 34c95901b2ad51359c1fd37aa16369ec25ea3a
│  │  ├─ 34
│  │  │  └─ bfe7e0d02b350444cbaaec562ddfcd873f0ba5
│  │  ├─ 35
│  │  │  ├─ 05a6563ef9e9f9be390969199648bb58a4f054
│  │  │  └─ 2725bff74c27a255b63d1777a915f7cab7e205
│  │  ├─ 36
│  │  │  ├─ 3ca7dbb4c64ab0c20d93584feac7b575a9f494
│  │  │  ├─ 576a0762039b4e82bec8511085ab2691de5b38
│  │  │  └─ a1bfef039aaadf62a617d1c1ad1dc31da39d6f
│  │  ├─ 37
│  │  │  ├─ 72a4510ca37b9a7c4e8d42690e9654702d4cd3
│  │  │  └─ 9c083767c9b06bd14d2cd151c526048b4370e0
│  │  ├─ 38
│  │  │  └─ ddef08d7819bd0c341e89fc673ef05d5efe93d
│  │  ├─ 39
│  │  │  ├─ 132de8154385001380e58784ac9716280572b6
│  │  │  └─ cd8cfe3f38c925c14cae6f0adb8cd1057473ce
│  │  ├─ 3a
│  │  │  └─ 72066d0726ea0a75856d72b90e4bf576fb74df
│  │  ├─ 3c
│  │  │  ├─ 84eb2f0cb763bfcddbb199234aef2d6d4ed2d7
│  │  │  ├─ a0e8fdc58a767cf04470bcee8b816807a4f0f1
│  │  │  └─ a223c8d4a26eb94d9db8c5182137857977f68f
│  │  ├─ 3d
│  │  │  └─ 327fde8e437fbee58ce363657ecbdbc5d60e83
│  │  ├─ 3e
│  │  │  ├─ 211c52de6803d504b28da8ef1a9287ed37e37d
│  │  │  ├─ b612bca48bea0e219921fcce7ae344a2eeabb1
│  │  │  └─ d7b53ce671ffcaedb0e1321226e7a215f4aeeb
│  │  ├─ 3f
│  │  │  ├─ 4396fc17bc3e1b8edfc158e4a2dbd4aca68296
│  │  │  ├─ 43c4367be0313a7575a383aaec75e014694574
│  │  │  ├─ 78fa7272c4c3d546fcc9181a24f2339e4217c1
│  │  │  ├─ e59c2e80d6f37b13d79a896d7d962d4b517026
│  │  │  └─ ffdb9ddebce162dd7a2e3d0df4927bd4c0ee40
│  │  ├─ 40
│  │  │  └─ 2f52b7ae2738551b1a4bfa0f590acbab6d80e8
│  │  ├─ 41
│  │  │  ├─ 07b7ee185d8e9c26e7da7831de8ad3ea600695
│  │  │  └─ eff3d11c214f5839bca2243ccf9e41a6a3d080
│  │  ├─ 42
│  │  │  ├─ 5641e572df437c8643c616791369a4f1378fcc
│  │  │  ├─ 93499e5b463aae274198e89f1671e1ab286e03
│  │  │  └─ aaf169329fd1d12c32b0d3ce8a6dcfd06d17be
│  │  ├─ 43
│  │  │  └─ 0c83071ad14925fde6dbe9b7532a24b267b7d2
│  │  ├─ 44
│  │  │  ├─ 4be8bb77f04f2d701a1c97aa984322200676c1
│  │  │  └─ a1c00ead47936a5fed4fd36e7d22669557ce1f
│  │  ├─ 45
│  │  │  ├─ 19dd4a34d130f42a22e0600598e2c5a2106f86
│  │  │  ├─ 35f257124436d7a79075a69f9931beea6055e8
│  │  │  └─ 8f97df49f3d45b3de2809e2c5f8846f5b4f566
│  │  ├─ 46
│  │  │  ├─ 6323f2bc9b2cc88c2edc3ac54afce2d9360569
│  │  │  ├─ 69b1f138587b351685dda9667d40f8488ef47b
│  │  │  └─ d83a9996bf2d8c53b901fdbccd7520cce649e7
│  │  ├─ 47
│  │  │  └─ 510d6438fdaddf3b72f99805d63560e1a4c3e2
│  │  ├─ 49
│  │  │  ├─ 8972519e6ccf3c05fdf1cea309b83e29b8ef0a
│  │  │  └─ e9cba5b425d84e2701724203e576281213d15e
│  │  ├─ 4a
│  │  │  └─ 2378c4dbe33863d1aba05b637f7a0777484197
│  │  ├─ 4b
│  │  │  └─ 9d116fb7bac4b1579b439e9964f60260710ed0
│  │  ├─ 4d
│  │  │  ├─ dac2875bce4f44cf4f383abcd244ece62f5b52
│  │  │  └─ de6355ff275a7210354c06b60dea4f4d08efbd
│  │  ├─ 4e
│  │  │  ├─ 4820fd3656c8d40f9a6c440ef35d078f2cdb7f
│  │  │  ├─ 483570203936628fda05a798a69b40ee31e9db
│  │  │  └─ bc4141a0fb7791b5447be134b3b6da27a0185c
│  │  ├─ 4f
│  │  │  ├─ 29c7d69276da7ea113120b9e76d903ac2d349f
│  │  │  └─ fbed022f4df2bca8f0144e10931ff7a544fbbe
│  │  ├─ 52
│  │  │  └─ 2fe4ff4a930989c6b81242f67b798906f4d39c
│  │  ├─ 54
│  │  │  ├─ ab6ebca356c3baefd668f995ca605146406579
│  │  │  └─ ca8df729a1aa876be7d1257e3d77257f0d784d
│  │  ├─ 55
│  │  │  ├─ 51812161ef2c66f1035ceaf6b6c10342243be8
│  │  │  └─ b62e82bde271c955d96b0cce79c21e4ed190b0
│  │  ├─ 56
│  │  │  ├─ 1478eb0990798a6e7aa1e1eb8cff92bcdaa047
│  │  │  ├─ 275e2b19b1f7aac8612a8cf11c273acd00e998
│  │  │  └─ 6af19b70abc8a95ab554263f5af628dbdd1ee1
│  │  ├─ 57
│  │  │  ├─ 6e8dc9a393e501ef5089599b14444e50294593
│  │  │  └─ b9272a478b8817a522868791b5d309ee9a4439
│  │  ├─ 58
│  │  │  └─ 776ff6523ed18d140197572f129af93b1278fc
│  │  ├─ 59
│  │  │  ├─ 0e719a1cdccf7253900052b463b960d1d1e78f
│  │  │  └─ 9e8934561a2e871b4bb0f5c9053d28f3cd0d5a
│  │  ├─ 5a
│  │  │  └─ d573a28a345ccfb510fadc3fe3557333bfd31a
│  │  ├─ 5b
│  │  │  ├─ 556893a6ccc83c5bb0374ef8257c5058bba93e
│  │  │  └─ 6b1be7177a2ba69215fa120099582ca6fef290
│  │  ├─ 5c
│  │  │  ├─ 2543e3f27ca0194b1bdf8b9fb7b8c5bee0fdd4
│  │  │  ├─ 2ea08fa2d5dcb0ca3d8ded5d566f40bc12b513
│  │  │  ├─ 48d0ca96e378ffa504bfcac2fa6c8c4fbe105c
│  │  │  └─ 806dcd9125bfaff4a5f24d1c1c4609da31cc01
│  │  ├─ 5d
│  │  │  ├─ 271a7b95f9f67d8e9e00c9368ce8d6fb1a5952
│  │  │  └─ 8a8dc06a46d8ecdd4d185d9b7190152d9fef9c
│  │  ├─ 5e
│  │  │  └─ a123de9642856d22b735f8b44d514aacc1bd8a
│  │  ├─ 5f
│  │  │  ├─ 0aef7d0b2c277e80355a2a1d02c2502fe20348
│  │  │  ├─ 0c6e6f3cd3328935fa84a8f883fa62c5b05b1f
│  │  │  ├─ 2c5df7b88de3d7b34b1ea4fce46473816aa0aa
│  │  │  ├─ 430674519cf94ad03ddb55cea1614d8727c3b6
│  │  │  └─ f79a956d7e22ab4241b65212e074674ed59684
│  │  ├─ 60
│  │  │  └─ 6fa150e78c5e2954a2bf54c673ca2027108b76
│  │  ├─ 62
│  │  │  └─ 5abfa9b606ebe42fb05f817dcde528b69867b9
│  │  ├─ 63
│  │  │  └─ d6f3bb2d0c622dbf74e135e354016f90afac26
│  │  ├─ 64
│  │  │  ├─ 06e5c26491557eff077b8e157f106b6bfab9a1
│  │  │  └─ e988e06e43d0763b2357530503250b0f53fc1a
│  │  ├─ 65
│  │  │  └─ c59b3df9cb071ec47b11babdd99cf105772205
│  │  ├─ 66
│  │  │  └─ e5806be0a9731969b66aa28e935661c5a123b7
│  │  ├─ 67
│  │  │  ├─ 5174429d99a0b7ffd954b9068ff01ab10f42ba
│  │  │  ├─ aa0149eda7df361718f8feea8b3f7e13fbe780
│  │  │  ├─ ab5a08d44e0d4c6a562d0f6f2f1e3d84b5eaba
│  │  │  └─ d7ffe334a3d511e4e55d7de1c95f006d2a033d
│  │  ├─ 68
│  │  │  ├─ 301ef66d2e7026c2507652bee7de8e0822feaf
│  │  │  ├─ 7e6f551d65bc37ce119c3dc63e707fb42018d4
│  │  │  └─ 9d7f3e70addffb88ead304aebc12f2b882ea37
│  │  ├─ 69
│  │  │  └─ 49a300ca5ab0cb3bc49f66bbab06ec545ca324
│  │  ├─ 6a
│  │  │  └─ ca63974e0bdd912cbeaa3d86b9fd92e71d9a4f
│  │  ├─ 6b
│  │  │  └─ d288f7498a6ab7ded53d7d7044b1ba666232d7
│  │  ├─ 6c
│  │  │  └─ e2d663a4ed4ed6a0add84d4208f911bd7b1c93
│  │  ├─ 6d
│  │  │  └─ 9eca10b5ebce29babda8975d8b413a059a9d69
│  │  ├─ 6e
│  │  │  ├─ 413c4b6849e27a9f41cb78a16aa9d232c921d2
│  │  │  ├─ 51761b50cc9a4989fc3d8f7c53d3a99e205364
│  │  │  └─ 8a0e6b4e11e5459697fb5e16500d7b0a4d3aaf
│  │  ├─ 70
│  │  │  ├─ 5b432a695e1a0dc66ab3461f0c189a4d2fa6d6
│  │  │  └─ fcdb53a64b7d51910dc4e521fd17750f1e1160
│  │  ├─ 71
│  │  │  ├─ 647a724ce39077f9b420345dd706e3c5873536
│  │  │  └─ 95b320d54f6ed356f6a0c0722e5b09e0870993
│  │  ├─ 72
│  │  │  └─ fbd4ba58ff870d0c187bc4683a2cff8d375f7d
│  │  ├─ 73
│  │  │  ├─ 38a176b8ec157f4d5de9b5b0d71fb76cacbc34
│  │  │  └─ f00b1ca6191f1eaa90d530ec87069d06bc8005
│  │  ├─ 74
│  │  │  ├─ 0042eb39e3951141a50644baf118c31ad37836
│  │  │  └─ 874cd020b2481b72a0debcf54839b107b860d8
│  │  ├─ 75
│  │  │  ├─ f5df1166ae25ef8ce772d6ddf9a6f87ed04939
│  │  │  └─ f6c6ac3d2738d59d114becd944ccf3139eae3e
│  │  ├─ 76
│  │  │  └─ 2a49d7ae8b260268ab4478b1ee9be7ff1bf39c
│  │  ├─ 77
│  │  │  └─ 745d0bf50c6517bf5a351cca808f18cde413c6
│  │  ├─ 78
│  │  │  └─ 3d7c23aa6807e56ecf8efd78f8d3ab5bffe038
│  │  ├─ 79
│  │  │  ├─ 3a8b2b83517d837dfc5923342e737e3c8be8f1
│  │  │  ├─ 62bd7b92e07b96f1a45b73ed73d83c3fc4b6c5
│  │  │  ├─ c0d42ebd35d3fdd498f6c3a494f2e970711c02
│  │  │  └─ f001c12886a7b40e3f1a06d805d28a3042bd4e
│  │  ├─ 7a
│  │  │  └─ 41443c97cd2772b6ab19a0a3d2e819c8286383
│  │  ├─ 7b
│  │  │  ├─ 66e15d823d1d11fd138b74d60a0c7b4126a634
│  │  │  ├─ c3b19288ec9de589e3a22bc255b15b4fbe1348
│  │  │  └─ d02813a0f850b51ddca522c3dc61ac3e7923d7
│  │  ├─ 7c
│  │  │  ├─ 21955b1cffb55f94e7292f42c0f6c7a3b6dae3
│  │  │  ├─ 381551ca7f3dc726ee549306f3b4c1b714e4a2
│  │  │  ├─ 6707d197c78e66916955f002a68c00fa07ff82
│  │  │  └─ d486536c18bd5540c9396d42fadb812067d8cf
│  │  ├─ 7d
│  │  │  ├─ 09ccb2a3f9294086174b9a3b7a89d97f1ee78e
│  │  │  └─ 4960beb50b074379715e9f34955c3d0c4aa9da
│  │  ├─ 7e
│  │  │  ├─ 1a490807df9505888cabfb02f48421bbb71642
│  │  │  └─ e78ef6e7dca8b1b00dcc031e01a724248c13dc
│  │  ├─ 7f
│  │  │  └─ 5c9c418eb977fe4bba479fbd71a337b278a34b
│  │  ├─ 80
│  │  │  ├─ 2726f94873692d8399b9004c87df7808002b13
│  │  │  ├─ 51a481eac845f602102969e462f86c054fa95e
│  │  │  ├─ ada8046336e4b44c0fae8878e9eaef024ccbbc
│  │  │  └─ b1235e562e77b0de1e3b7e12d04be8ed0fac3d
│  │  ├─ 81
│  │  │  ├─ 70d27057c7139f505d081440438bd2dbcb47b7
│  │  │  └─ 9fc49dcb0b5c1f921ada3e97bba6fac5dd81c0
│  │  ├─ 82
│  │  │  └─ 1b62125ea7e95ec13f298e61d9f75cc34e0476
│  │  ├─ 83
│  │  │  ├─ 2d249c68fb73c651df86acbdf062ebf1e15a73
│  │  │  ├─ 71ebab4e07b2b12301f37c1393dd5fe6843ef4
│  │  │  └─ df432f6d208c69c700d8f200dc76c69f618ea0
│  │  ├─ 85
│  │  │  ├─ 018e12b8812af6544c45f8d689dc0d58612c70
│  │  │  ├─ 26acad7261a0431feface158de2365c3ae2d21
│  │  │  └─ b6d004a99d9cae93cc14dffb5604f4a38dee55
│  │  ├─ 86
│  │  │  ├─ 2952a0a8e187827a8e9e385440b0d4a290064f
│  │  │  └─ 7d59ac44fbfe3590981489563b0815cc5388cb
│  │  ├─ 87
│  │  │  └─ aaabd2b6f98706a1dda1e193dec23e6ff8f0cc
│  │  ├─ 88
│  │  │  ├─ 207f0baf55c5dc87de6a4e8e7d27932afafc29
│  │  │  └─ a3b2f7c145b6468d5657d4efa181888426c95b
│  │  ├─ 89
│  │  │  ├─ 61946c946a13185c29ec81113980b42add8d98
│  │  │  ├─ c6b49a1e32600093ab8cc89d4b5551a2f1693e
│  │  │  └─ eed19210f324465f94676e2b2758faa7525bd8
│  │  ├─ 8b
│  │  │  ├─ 5f74e60cd023ab37f1ae59ac69fc5ef350fae6
│  │  │  └─ b77eda2d6f4a11707aca41ca2fc4d20b28e64b
│  │  ├─ 8c
│  │  │  ├─ 0e13f66fe3792b9f37c855675856188e48265e
│  │  │  ├─ 1d928939b70303147380c3e186eabe8be7e779
│  │  │  └─ 2195009bc270e3e70f7713ba528a9d90267e70
│  │  ├─ 8d
│  │  │  └─ 2d49225c97c927d1d8135b48f4da70b39ba99f
│  │  ├─ 8e
│  │  │  ├─ 44600198426aa5faa90231127fc53609bdb559
│  │  │  ├─ a1a33ffc15ef9e7ab28859d2f6ec179e882ef8
│  │  │  └─ a9a5da9f916fdb39dd344634a560b2fca09ea4
│  │  ├─ 8f
│  │  │  └─ 536a8e185c10f4e755a0f17ef8ed1946a7419c
│  │  ├─ 91
│  │  │  ├─ 116e5424581e08b7eb340d1b3421c3e72a8c29
│  │  │  ├─ 23ec36488ec53f319072fb4d2b4721fef0d02c
│  │  │  ├─ 96e01f712dbbc00d29cb5264cdb833ee6c66c8
│  │  │  └─ c7cb3fead0f72632feb2912b163a3446d63985
│  │  ├─ 92
│  │  │  ├─ a4543e1813dd63ee4b92393ca8bded34484d80
│  │  │  └─ fba71e57489ed0f3685ef91671fb8adfe9774a
│  │  ├─ 93
│  │  │  └─ c0e8c95c6efe04aa9fc3e55fa68daad89e66e5
│  │  ├─ 94
│  │  │  ├─ 268a071969c8b510cf705a2f6510f8a283dbab
│  │  │  └─ c67260b2ceb51e839f39573c09ffc0fcc391af
│  │  ├─ 96
│  │  │  ├─ 4bee4e4de48f7ed2aaad7fa569c0e43859b227
│  │  │  ├─ 870de6e8a6283eff90c657c60ff81e61529c76
│  │  │  ├─ e362d61d5ee3c7077b83f36639b8abb29dae8d
│  │  │  └─ e3bd7e8c672d964f812cacc9d71671229b3273
│  │  ├─ 97
│  │  │  └─ cab9364fc895029986db92304d9b8154d6466c
│  │  ├─ 98
│  │  │  └─ d873a36ea272f83f4f75a150b82bf10640c9ed
│  │  ├─ 99
│  │  │  ├─ 514807b801a0598fa7e89fe5b9ef810df3fa85
│  │  │  ├─ 6cb8c37221946dfea0696896e053ab51bb0afc
│  │  │  └─ bb7c46e04745cf55641a2f2967fbb065b62fc7
│  │  ├─ 9a
│  │  │  ├─ 5d2e4f4b81acea7ab43d6eeb73f47a88d05e00
│  │  │  ├─ ab3f6a3fe0512b7ad43428501d930ed9a1c1e6
│  │  │  └─ f1f3007d8f14b2998586d08adc1758aae90f0d
│  │  ├─ 9b
│  │  │  └─ 3fc42b4623485e4c0adeaa9775e06739807d2e
│  │  ├─ 9c
│  │  │  ├─ 680df2ce9b940bfcf857fcd07f36875bdb4f27
│  │  │  └─ bc3edd670b6e03f1641ff82376d93a9d7de91a
│  │  ├─ 9d
│  │  │  ├─ 486deee462ac54b224fbcbdbc5101cc3faae23
│  │  │  ├─ aa01844a9eda97c9e9fa012bfb670afa3cb7b8
│  │  │  └─ c1b78b8c1daf6d9b4e0049ceff1909a354f927
│  │  ├─ 9e
│  │  │  ├─ 0fc93d2d1a055c335a8dc601a6ae10c9cfced1
│  │  │  ├─ 3b45b281c64cfb9098049720361de4fa436d2a
│  │  │  └─ 87bc56fb7260f801a7361c31f640ca8cb5ee74
│  │  ├─ 9f
│  │  │  ├─ 37c0733540c48ef97ca05d776900cc6247d090
│  │  │  └─ 64d51ac7bb25e4bea908b6747f6ad4fcd22559
│  │  ├─ a0
│  │  │  └─ 873942a9e405d424a45c24d43a61766a29a509
│  │  ├─ a1
│  │  │  └─ 4371bc0c48d8fd6114cc080092d38e5564100c
│  │  ├─ a2
│  │  │  ├─ 7d21c286e0333c2314d3e64e359ca7bb5b3825
│  │  │  └─ fea2f06003d0759a9a2b61107d256e6a2aa39a
│  │  ├─ a4
│  │  │  ├─ 099c2b9a8e0cb0704b0d7f3379ce4a12366081
│  │  │  ├─ 983e88fc3784dfb959cb5595dbf8de056253c9
│  │  │  └─ ef5d4423a23394076398933d5eed744185bf20
│  │  ├─ a5
│  │  │  ├─ 0054de0e2d7989c15c0e963554f5fcc33ad9b9
│  │  │  └─ 0771ce36d327911dbf5d3633166013020257ef
│  │  ├─ a6
│  │  │  ├─ 33176c9b81b1040974190fb212f15ed59cbcfa
│  │  │  └─ beefb737fd2e66ede6fd55092c93d4eb52b250
│  │  ├─ a7
│  │  │  └─ 61aa8bbc15242116df7e6a09fb7c82c404da14
│  │  ├─ a9
│  │  │  ├─ a179f1f98419de2a50d5bb682be7ca35aea18a
│  │  │  └─ cca87587ed8956ee68ed73c92c452ed395a01e
│  │  ├─ aa
│  │  │  └─ 279c3dd6e4480c3587fee816fbf04abd6b8bd0
│  │  ├─ ac
│  │  │  └─ 75ce9242b623e8c9a37885ceb5af72699ed16b
│  │  ├─ ad
│  │  │  └─ 933187a5c882b57ef0d40744fda91007bc7695
│  │  ├─ ae
│  │  │  ├─ 056b15b246cb8389cd1ffeaeca7ea89b24c49a
│  │  │  ├─ 6c264c4f0e2a4457f4479246d58969d126d1b6
│  │  │  └─ ad0522d11489178c6672f7cc639851681ed29c
│  │  ├─ af
│  │  │  ├─ 2ba38439bd01daa5b127ae2c47260c147c39ab
│  │  │  ├─ 302229ebd8b97e682ccfa1a02ead66c2b82b08
│  │  │  └─ a883695dcb91b9bd533a0a1355bf58a28161fe
│  │  ├─ b1
│  │  │  ├─ 44a3bc5d8d367e053357586424df31c30c929f
│  │  │  ├─ 9e769fe0614e71bf77aa6e0e43882f4535541c
│  │  │  └─ e91a1a41fb104b0301f773bbcaee0bc5a79e6a
│  │  ├─ b2
│  │  │  ├─ 11c546c86a46e5ddcb5d090531e145445cddb6
│  │  │  └─ 55e8cab7311176e3b62b9f32da9125c83c28d0
│  │  ├─ b3
│  │  │  └─ 9b081889b9f4efa8a486710ac5c6a1d3ae64e0
│  │  ├─ b4
│  │  │  ├─ 04bc41084d7423f2fedd5b57c2c6bff68e86e0
│  │  │  ├─ 38faa684162a281e18bf3289ce7dc4fbee1ee1
│  │  │  └─ df2a202a8b42913e70ddc757e7c1d4da231b6e
│  │  ├─ b5
│  │  │  ├─ 6579cfb6d1d003e074102f03c6637e67c898d7
│  │  │  └─ 6ee6dfc0f3ae2a0ca123a33a42f42dc6d5fe2a
│  │  ├─ b6
│  │  │  ├─ 0a971a5a5a942081f35c6c15a9a0ee715829bd
│  │  │  └─ b383125d9f7ed4c5787189069dd4b59fcb42b2
│  │  ├─ b7
│  │  │  ├─ dce2771b85e5393d65507b1bd91c39ad7dd16e
│  │  │  └─ fbdb6307607f0c8748c2943982f42d1181bfe4
│  │  ├─ b9
│  │  │  ├─ 0885bc8e1f29f9e9ebab3c3a9b6483ee1bdc8b
│  │  │  └─ b0a5f4c776b68cbe3cfd1f0e9ab5ed6866625c
│  │  ├─ ba
│  │  │  ├─ 3f0669846285fb5f34835c458288e8fb9de997
│  │  │  ├─ ab63b9a740e4532ccc1824430b4175f6c050d0
│  │  │  └─ e08b8789fc19fb8e6cf5c6b5c93fa24daea618
│  │  ├─ bb
│  │  │  ├─ 84851fc51bc3ddfb078b77ba4250c20994f03d
│  │  │  └─ ac967dc893220deb31f1b0a5c670da066e41c0
│  │  ├─ bd
│  │  │  ├─ f2e388955a8a0ed109f7937246cbc3b61f7b30
│  │  │  └─ f9a2d4c8d5bb16536dd894c6f03c6606fd9343
│  │  ├─ bf
│  │  │  └─ 9c4eb23a2acca4ac7709d23d7dc12b98fb196d
│  │  ├─ c0
│  │  │  ├─ 0e83a956a210bccb70ac8e70d0442b66e15cd9
│  │  │  └─ 8bf747a7e32d7b0b42b07e39ec9593ae9657e0
│  │  ├─ c1
│  │  │  └─ cdce7487f04a8c45fa7b1b8ebc7a335fb26dc4
│  │  ├─ c2
│  │  │  └─ 817ff17b4c1326a63a1dda47909368d70e814d
│  │  ├─ c3
│  │  │  └─ 44de0131c5e9b6d8ca52cb23ee2b9a37249d38
│  │  ├─ c5
│  │  │  └─ 49e410180e970115087057f50cd5857e964fc9
│  │  ├─ c6
│  │  │  ├─ 6364c7c9ec0e300c06fd0755f571fbaf5cfaab
│  │  │  ├─ d12fdd195c01bf4cf87629ce315ef772ece91e
│  │  │  └─ daaa09cf97e9d62567de6a90c23ec8d8ccf6b3
│  │  ├─ c7
│  │  │  └─ 4dafe3a3f475db1f137611ba95660de0a6e4f7
│  │  ├─ c8
│  │  │  ├─ 5ac1a49a9ce461aa0866280087570bc656b59d
│  │  │  └─ b757751247b94898110ce4ed5dbc3f97dd016b
│  │  ├─ c9
│  │  │  ├─ 2e63091ca9c68ac3090db23d2bac49360c5294
│  │  │  └─ 7b0d9f4dae780c2dd1c249a94535d8927fe81a
│  │  ├─ ca
│  │  │  ├─ 95f813b8da9815a513438ee9e59be6f26cd3a8
│  │  │  └─ e88561d637b5c2a5620f894bb3ee034e0677c4
│  │  ├─ cb
│  │  │  ├─ 17fbe42c33c473597c0f76b07f6e8f8ebeb8d7
│  │  │  ├─ 2c091219da1e78366a0a6040ca9d7e7b8a2140
│  │  │  └─ fe74c84fb9da8810131b65dde139cd0d33994a
│  │  ├─ cd
│  │  │  ├─ 7b233039e51c8f8e8be7d3386c6a61a40a165f
│  │  │  └─ 9db9ac4311abdd1ad5cbd1fb62d73c1d0d607b
│  │  ├─ cf
│  │  │  └─ e65adf9a5dc4fe8c348e69b132c484b1c7ea72
│  │  ├─ d0
│  │  │  └─ 00a40cfff15c594f87b3aaa55130de0d45441c
│  │  ├─ d1
│  │  │  └─ e85cf3ade4d0bf5cf4343a64b602049e3f9a8a
│  │  ├─ d2
│  │  │  ├─ 3a6dc59343428b2df9e21ea455921790029005
│  │  │  ├─ 47c9b32dda031c686308888ab76338a9d9ef8d
│  │  │  ├─ 4e1b5afa0c30926baecf59fe020ea1d7438eb8
│  │  │  ├─ 683ebf77f9f8e5e3bcdfed15314c701d8bffca
│  │  │  └─ 6ba3f3ae3585520afb8881061b0dd678aa5761
│  │  ├─ d3
│  │  │  ├─ 02525f4a8f32a45f2804aa24e33dbde76f72d1
│  │  │  └─ 39fcd501522c45f39bfa847b7b8fe4d45f5d1c
│  │  ├─ d4
│  │  │  ├─ 2c7d3b7538df34028f380f50703f82064e813f
│  │  │  ├─ e160fcaff1d38a58467a8bff3d04143b8e4aa1
│  │  │  └─ fd30da9677d69e04c463fe76000d9ff61121e2
│  │  ├─ d6
│  │  │  ├─ 5a3432ad7a60f3736ca822f0fa4764e7695209
│  │  │  ├─ b21f05593f5dbfe34c7530156d71e250b8d190
│  │  │  ├─ d5ee4a194b50ef1aef7be1a6beaf73b89a8de1
│  │  │  ├─ dad0770b174e6ad87d89c59a9e9eb559ebbb67
│  │  │  ├─ e04005fda1e2c766ad1cc2b12bf04c6338ccbf
│  │  │  └─ ff42301519b7e315484e3236e5716b941900ca
│  │  ├─ d7
│  │  │  └─ 7d518b57093a6fcf0efcaa2acc4dd106963d47
│  │  ├─ d8
│  │  │  ├─ 0b2ee447ca90ccdff1706b57c1a0e8b4303c4c
│  │  │  └─ 9faf660c59021f737e79aa5b20f8943be46727
│  │  ├─ d9
│  │  │  └─ ac8c6af959808fa9e035d0ddc553e8c2427bf3
│  │  ├─ da
│  │  │  ├─ 0007c10408543d51bab7b65df80639ffb4a2f7
│  │  │  ├─ 246a716f6bc37f03c329d9fa7725ae6a1ec227
│  │  │  └─ 8f9da4cd1fc0849eaa8d1bb030eaf2907e23b7
│  │  ├─ de
│  │  │  ├─ c25c9275e195bc5367fe3f7a0264d7db5e01f9
│  │  │  └─ e3da0d00aee2cefd16f3b4ce0625b133d79981
│  │  ├─ df
│  │  │  └─ 069790ae0c0be5b117be69939b2be79b579e11
│  │  ├─ e0
│  │  │  └─ 141744a361bf2e11a2a6298b73f192930b47fc
│  │  ├─ e1
│  │  │  ├─ 4458938fced530d5093e12cdc459455e7105d2
│  │  │  └─ 67aef84204762b6ca0576223a802fbccd2df28
│  │  ├─ e2
│  │  │  ├─ 82c1ab995937e52b3f040c57a21336d56f32d2
│  │  │  └─ b5256517ac88ac8585bdfe29470e4b88c72160
│  │  ├─ e4
│  │  │  ├─ 3338ff90f6c029aedec2e9c0edda9cf76dcf92
│  │  │  └─ 6ddbe10dccf4df8f7da7ee5d6d7ca0a4523d2a
│  │  ├─ e5
│  │  │  ├─ 42acbe4e037c4c59e8471aa235932cbf7e9050
│  │  │  ├─ 6ffe5f395d73382d9c5c54faa847058b577e40
│  │  │  └─ df385a657e04fc74d9dfeb7fe12860c031e212
│  │  ├─ e6
│  │  │  └─ e21a7067d6054845ec1e61996296b66d9db22d
│  │  ├─ e7
│  │  │  ├─ 25dec9db24bc0c3c7de40063ef07e10e75aea4
│  │  │  └─ 6ce305a61b0bd15112727c38fcb699a65f000e
│  │  ├─ e8
│  │  │  ├─ 9927b428cfa76f395dd2c3f871f7b571d31875
│  │  │  └─ b26bfdaf59ca734c73e75999fa0ab01b3c7398
│  │  ├─ e9
│  │  │  ├─ 5ad36f7a8eacc0a8b939cf41053df6ead6990a
│  │  │  ├─ 922e2e8597ec322fe17310d8dae401b43a2ef6
│  │  │  └─ 9b4243371bffb17eae02fdc02f76fdb0691fac
│  │  ├─ ea
│  │  │  ├─ 6673a38ba12b67d2fa93eba9dfb5478593b725
│  │  │  ├─ 7a1f932c2bec251523a80183b48b6da4c0fec1
│  │  │  ├─ 8c50a323cd94d234494cab432d5756bbb30b66
│  │  │  ├─ a4da7d19c7d62c40137573854f9618cfc10ec6
│  │  │  └─ d3023a92d200629524b48e809f6044286860ea
│  │  ├─ eb
│  │  │  ├─ 408fd73c424c470b90da15e1c8170d48177611
│  │  │  ├─ b333e9822dc32d90651c9457d0fdc7805aac26
│  │  │  └─ dc02569bbd153dfeb33e93949514054764f95b
│  │  ├─ ec
│  │  │  ├─ 295708a4f6c1bcee9a5ca8198743bbae9d36f6
│  │  │  └─ 44368405e9af504a1cffbbbfc2e7c03175b75d
│  │  ├─ ed
│  │  │  ├─ 51c55b7ccd2a85ba46ed5e2bc1e0d2caca80a2
│  │  │  └─ fd97c20024d50f9805a530a4bee117204adca9
│  │  ├─ ee
│  │  │  ├─ 29473081d688632ba2c0c0f1597321189b7333
│  │  │  └─ 89617cf09dd3b08f516745d69f422399891337
│  │  ├─ ef
│  │  │  └─ 89637b3fdfb0480f72889702f594be6eb08a38
│  │  ├─ f0
│  │  │  ├─ 30c7eeba73d64d60f08e91a10b2312a9e04e91
│  │  │  ├─ 661bfad38842f291ea8ebdf99b60a8f18186b5
│  │  │  ├─ 880d6ad49a180035693ba5bb1973259c4466c3
│  │  │  └─ 8e1fb35545801658723296a6b97100f3a9bf01
│  │  ├─ f1
│  │  │  ├─ 51e4620a63f73dc0da907bf0e5c01b9cb74246
│  │  │  └─ ffed40d82103837019dbcdf0fcb5005df67d97
│  │  ├─ f3
│  │  │  ├─ afeb44efaf6ecb9237e621bad6b574d82c5cec
│  │  │  └─ daae8bc833356c350e5c6e26a493962f51fefa
│  │  ├─ f7
│  │  │  └─ 743074b085709408777d62f926ea4ae3912977
│  │  ├─ f8
│  │  │  ├─ a3688a55b256ebfce4285705805555546aa7ad
│  │  │  └─ c603375f5cb8f61166f7933e9bea96f1e131ff
│  │  ├─ f9
│  │  │  └─ e66736b4b08c15a693b1ed3ffb34398f67f1eb
│  │  ├─ fa
│  │  │  ├─ 1b6e6450aec153b065be77d3a4355cd54dc143
│  │  │  ├─ 64436dc6fbddf941ff86652f7c8ec8d093bc19
│  │  │  └─ d105521c5067436de796d2938d98b4c5cf88ab
│  │  ├─ fc
│  │  │  └─ c316631c69486f9d6003a5e9a9daf2bae534ad
│  │  ├─ fd
│  │  │  ├─ 6b5cf42cb74ed1bc90a53a0ada96dd6dc91049
│  │  │  └─ cc99352af43759b5cc81c9911f8a40f04af45f
│  │  ├─ ff
│  │  │  └─ 3cf2e1f9821bcf452e2370420ecf828bc4dac8
│  │  ├─ info
│  │  └─ pack
│  │     ├─ pack-e035db21ff3f745120946881333b11ff7e0df43e.idx
│  │     └─ pack-e035db21ff3f745120946881333b11ff7e0df43e.pack
│  ├─ packed-refs
│  └─ refs
│     ├─ heads
│     │  └─ main
│     ├─ remotes
│     │  └─ origin
│     │     ├─ HEAD
│     │     └─ main
│     └─ tags
├─ .gitignore
├─ .prettierignore
├─ .vscode
│  ├─ extensions.json
│  └─ settings.json
├─ .yarnrc.yml
├─ LICENSE
├─ README.md
├─ contents
│  ├─ algorithm
│  │  ├─ algorithm1.md
│  │  ├─ algorithm10.md
│  │  ├─ algorithm11.md
│  │  ├─ algorithm12.md
│  │  ├─ algorithm13.md
│  │  ├─ algorithm14.md
│  │  ├─ algorithm15.md
│  │  ├─ algorithm16.md
│  │  ├─ algorithm17.md
│  │  ├─ algorithm18.md
│  │  ├─ algorithm19.md
│  │  ├─ algorithm2.md
│  │  ├─ algorithm20.md
│  │  ├─ algorithm21.md
│  │  ├─ algorithm22.md
│  │  ├─ algorithm23.md
│  │  ├─ algorithm24.md
│  │  ├─ algorithm25.md
│  │  ├─ algorithm26.md
│  │  ├─ algorithm27.md
│  │  ├─ algorithm3.md
│  │  ├─ algorithm4.md
│  │  ├─ algorithm5.md
│  │  ├─ algorithm6.md
│  │  ├─ algorithm7.md
│  │  ├─ algorithm8.md
│  │  ├─ algorithm9.md
│  │  └─ thumbnail
│  │     └─ mainImage.png
│  ├─ babel
│  │  ├─ babelBasic.md
│  │  ├─ babelPreset.md
│  │  └─ thumbnail
│  │     └─ mainImage.png
│  ├─ bundler
│  │  ├─ thumbnail
│  │  │  └─ vite.png
│  │  └─ vite.md
│  ├─ framework
│  │  ├─ cypress와Jest사용.md
│  │  └─ thumbnail
│  │     └─ mainImage.png
│  ├─ htmlcss
│  │  ├─ asyncdefer.md
│  │  └─ thumbnail
│  │     └─ mainImage.png
│  ├─ infra
│  │  ├─ thumbnail
│  │  │  └─ mainImage.png
│  │  └─ 네트워크.md
│  ├─ javascript
│  │  ├─ arrowfunction copy 2.md
│  │  ├─ arrowfunction.md
│  │  ├─ closure1.md
│  │  ├─ closure2.md
│  │  ├─ es6Array.md
│  │  ├─ es6class.md
│  │  ├─ eventBubble.md
│  │  ├─ eventCapture.md
│  │  ├─ eventLoop.md
│  │  ├─ eventLoop2.md
│  │  ├─ executeContext.md
│  │  ├─ hoisting.md
│  │  ├─ javascript.md
│  │  ├─ javascriptEngine.md
│  │  ├─ javascriptEs6.md
│  │  ├─ javascriptHandle.md
│  │  ├─ javascriptLoop.md
│  │  ├─ javascriptObject.md
│  │  ├─ javascriptSync.md
│  │  ├─ javascriptSync2.md
│  │  ├─ preventDefault.md
│  │  ├─ promise.md
│  │  ├─ scope.md
│  │  ├─ tdz.md
│  │  ├─ throttledeboundce.md
│  │  ├─ thumbnail
│  │  │  └─ javascript.png
│  │  └─ varletconst.md
│  ├─ os
│  │  ├─ macError.md
│  │  ├─ macError2.md
│  │  └─ thumbnail
│  │     ├─ macOs.png
│  │     └─ mainImage.png
│  ├─ reactProject
│  │  ├─ thumbnail
│  │  │  └─ mainImage.png
│  │  └─ 등수구하기.md
│  ├─ sumnail.png
│  ├─ typescript
│  │  ├─ interfaceUnion.md
│  │  ├─ module.md
│  │  ├─ thumbnail
│  │  │  └─ typescript.png
│  │  ├─ typedefinition.md
│  │  ├─ typeinterfaceguard.md
│  │  ├─ typelimit.md
│  │  ├─ utility.md
│  │  └─ whatistypescript.md
│  ├─ vue3
│  │  ├─ lifecyclehook.md
│  │  ├─ thumbnail
│  │  │  └─ mainImage.png
│  │  └─ vue2vsvue3.md
│  ├─ vueProject
│  │  ├─ thumbnail
│  │  │  └─ mainImage.png
│  │  └─ vueProject.md
│  └─ web
│     ├─ browser1.md
│     ├─ browser2.md
│     ├─ cookiesession.md
│     ├─ thumbnail
│     │  ├─ browser.png
│     │  ├─ cookiesession.png
│     │  └─ virtualDom.png
│     └─ virtualdom.md
├─ gatsby-browser.js
├─ gatsby-config.js
├─ gatsby-node.js
├─ gatsby-ssr.js
├─ package.json
├─ pnpm-lock.yaml
├─ src
│  ├─ assets
│  │  ├─ fonts
│  │  │  ├─ IBMPlexSans-Bold.woff2
│  │  │  ├─ JetBrainsMono-Bold.ttf
│  │  │  ├─ MaplestoryBold.ttf
│  │  │  ├─ MaplestoryLight.ttf
│  │  │  ├─ MontserratAlternates-Regular.ttf
│  │  │  ├─ NanumSquareNeoTTF-bRg.woff2
│  │  │  └─ index.ts
│  │  └─ svg
│  │     └─ navigationIcon.tsx
│  ├─ components
│  │  ├─ common
│  │  │  ├─ Animations
│  │  │  │  └─ WaveAnimation
│  │  │  │     ├─ index.tsx
│  │  │  │     └─ styles.tsx
│  │  │  ├─ Badges
│  │  │  │  ├─ index.tsx
│  │  │  │  └─ styles.ts
│  │  │  ├─ Modal
│  │  │  │  ├─ index.tsx
│  │  │  │  └─ styles.ts
│  │  │  ├─ ScrollIndicator
│  │  │  │  ├─ ArrowIndicator.tsx
│  │  │  │  ├─ MouseIndicator.tsx
│  │  │  │  └─ styles.ts
│  │  │  ├─ Skeleton
│  │  │  │  └─ SkeletonUI.tsx
│  │  │  └─ TextEffect
│  │  │     ├─ index.tsx
│  │  │     └─ styles.tsx
│  │  ├─ layout
│  │  │  ├─ Footer.tsx
│  │  │  ├─ Header.tsx
│  │  │  ├─ Template.tsx
│  │  │  ├─ index.tsx
│  │  │  └─ styles.tsx
│  │  ├─ main
│  │  │  ├─ MainImage
│  │  │  │  ├─ index.tsx
│  │  │  │  └─ styles.tsx
│  │  │  ├─ MainIntro
│  │  │  │  ├─ index.tsx
│  │  │  │  └─ styles.ts
│  │  │  ├─ Post
│  │  │  │  ├─ CommentWidget.tsx
│  │  │  │  ├─ PostContent.tsx
│  │  │  │  ├─ PostHead.tsx
│  │  │  │  ├─ PostHeadInfo.tsx
│  │  │  │  ├─ PostTableOfContents
│  │  │  │  │  ├─ PostTocAnchor.tsx
│  │  │  │  │  └─ index.tsx
│  │  │  │  └─ styles.tsx
│  │  │  ├─ PostList
│  │  │  │  ├─ PageNation
│  │  │  │  │  ├─ index.tsx
│  │  │  │  │  └─ styles.tsx
│  │  │  │  ├─ PostCardList
│  │  │  │  │  ├─ PostCardItem.tsx
│  │  │  │  │  ├─ index.tsx
│  │  │  │  │  └─ styles.tsx
│  │  │  │  ├─ PostCategoryHeader
│  │  │  │  │  ├─ index.tsx
│  │  │  │  │  └─ styles.tsx
│  │  │  │  ├─ PostCategoryList
│  │  │  │  │  ├─ PostCategoryItem.tsx
│  │  │  │  │  ├─ index.tsx
│  │  │  │  │  └─ styles.tsx
│  │  │  │  ├─ PostRecentList
│  │  │  │  │  ├─ FirstPostItem.tsx
│  │  │  │  │  ├─ index.tsx
│  │  │  │  │  └─ styles.tsx
│  │  │  │  ├─ ProjectDiaryList
│  │  │  │  │  ├─ ProjectDiaryItem.tsx
│  │  │  │  │  ├─ index.tsx
│  │  │  │  │  └─ styles.tsx
│  │  │  │  └─ RecommendCategoryList
│  │  │  │     ├─ index.tsx
│  │  │  │     └─ styles.tsx
│  │  │  ├─ index.tsx
│  │  │  └─ styles.ts
│  │  └─ navigation
│  │     ├─ Category
│  │     │  ├─ CategoryItems.tsx
│  │     │  ├─ CategoryRootTitle.tsx
│  │     │  ├─ CategorySkeleton.tsx
│  │     │  ├─ CategoryTitle.tsx
│  │     │  ├─ index.tsx
│  │     │  └─ styles.tsx
│  │     ├─ Profile
│  │     │  ├─ NavTabItems.tsx
│  │     │  ├─ NavTabMenu.tsx
│  │     │  ├─ ProfileImage.tsx
│  │     │  ├─ index.tsx
│  │     │  └─ styles.tsx
│  │     ├─ index.tsx
│  │     └─ styles.ts
│  ├─ hooks
│  │  ├─ useCategoryMetadata.ts
│  │  ├─ useCategoryOpenState.ts
│  │  ├─ useInfiniteScroll.ts
│  │  ├─ useNestedHeadings.ts
│  │  ├─ useScrollState.ts
│  │  ├─ useScrollStateBar.ts
│  │  ├─ useTheme.ts
│  │  ├─ useThemeEffect.ts
│  │  ├─ useToggleTheme.ts
│  │  └─ useTypingTitle.ts
│  ├─ pages
│  │  ├─ 404.tsx
│  │  └─ index.tsx
│  ├─ states
│  │  ├─ currentOsState.ts
│  │  ├─ darkModeState.ts
│  │  ├─ menuOpenState.ts
│  │  ├─ recoilDropdownState.ts
│  │  └─ templateMountState.ts
│  ├─ styles
│  │  ├─ globalStyle.tsx
│  │  ├─ reset.ts
│  │  └─ themeVariables.ts
│  ├─ templates
│  │  ├─ allPost_template.tsx
│  │  └─ post_template.tsx
│  ├─ types
│  │  ├─ catgegory
│  │  │  └─ index.ts
│  │  ├─ image
│  │  │  └─ index.ts
│  │  ├─ index.d.ts
│  │  └─ post
│  │     └─ index.ts
│  └─ utils
│     ├─ category.ts
│     ├─ device.ts
│     ├─ imageBridge.tsx
│     └─ storage.ts
├─ static
│  ├─ gifs
│  │  ├─ computer.gif
│  │  └─ sample.gif
│  ├─ icons
│  │  ├─ algorithm.jpeg
│  │  ├─ algorithm2.jpeg
│  │  ├─ algorithm3.jpeg
│  │  ├─ calander1.png
│  │  ├─ calander2.png
│  │  ├─ calander3.png
│  │  ├─ calander4.png
│  │  ├─ javascript1.jpg
│  │  └─ vue3.png
│  ├─ main
│  │  ├─ reactProject.png
│  │  ├─ superHero.png
│  │  └─ vueProject.png
│  ├─ recommendThumnail
│  │  ├─ Algorithm.png
│  │  ├─ Babel.png
│  │  ├─ Browser.png
│  │  ├─ HTML.png
│  │  ├─ Javascript.png
│  │  ├─ Mac.png
│  │  ├─ react.png
│  │  └─ vue.png
│  └─ waveAnimation
│     └─ wave.png
└─ tsconfig.json

```