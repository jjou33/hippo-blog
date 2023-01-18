---
date: '2020-07-29'
title: 'Test'
categories: ['Error', 'SEO', 'Optimization']
index: 1
domain: 'Mac'
sideTitle: 'Error'
summary: '홈페이지를 운영하는 많은 사람들 또는 기업들이 검색 페이지 최상단에 보여지게 하기 위해 어떤 최적화 작업을 하는지 알아보자.'
thumbnail: './apple.jpg'
categoryIcon: './briefcase.png'
---

### 1. Help Google Bot to Find My Contents

구글에 SiteMap을 제출하여 사이트에 있는 파일로서 새 페이지나 변경된 페이지가 있을 때 이를 검색 엔진에 알려주도록 할 수 있다.

SiteMap은 사이트에 있는 페이지, 동영상 및 기타 파일과 각 관계에 관한 정보를 제공하는 파일로, 검색 엔진은 이를 읽고 사이트를 더 지능적으로 크롤링 할 수 있게 된다.

```ts
import fs from 'fs'
import os from 'os'
import path from 'path'

/**
 * @name setEnvValue
 * @description
 * - 현재 구동된 Mode 에 따른 env.XXX 파일에 Key, Value 값을 추가한다.
 * @param key env File 내 추가 할 Key 값
 * @param value env File 내 추가 할 value 값
 */

export const setEnvValue = (key: string, value: string) => {
  // Command 에서 전달받은 현재 Environment Mode (local, dev, stage, production)
  const stage = process.argv[2]

  // 해당 파일 Path 확인
  const envFilePath = path.resolve(process.cwd(), `.env.${stage}`)
  const envValues = fs.readFileSync(envFilePath, 'utf-8').split(os.EOL)

  // 동일한 Key 존재 시 Target 특정
  const targetLine = envValues.find(
    line => line.split('=')[0] === `VITE_${key}`
  )

  if (targetLine !== undefined) {
    // 동일한 key 존재 시 변경된 값으로 해당 Line 재작성
    const targetLineIndex = envValues.indexOf(targetLine)

    envValues.splice(targetLineIndex, 1, `VITE_${key}="${value}"`)
  } else {
    // 신규 Property Line 추가
    envValues.push(`VITE_${key}="${value}"`)
  }

  fs.writeFileSync(envFilePath, envValues.join(os.EOL))
}

```
### 2. Use 'Robots.txt' File

1.Robots.txt 파일은 검색 엔진에 어떤 페이지를 크롤링해도 되는지 알리는 파일로, 서버의 루트 디렉토리에 있어야 한다.

과도한 Robots.txt 파일은 더 많은 방문자를 유도할 수 있는 정상적인 검색 엔진 크롤러의 접근을 막을 가능성이 있기 때문에 적절하게 설정해야 한다.

---

## Source

SEO 기본 가이드[<https://support.google.com/webmasters/answer/7451184?hl=ko&ref_topic=9460495>](<https://support.google.com/webmasters/answer/7451184?hl=ko&ref_topic=9460495>)