---
date: "2021-11-04"
title: "[MAC] MAC 에서 사용중인 Port 죽이기"
categories: ["OS", 'Mac', 'Error']
index: 4
domain: "OS"
sideTitle: "Mac"
summary: "MAC OS 와 관련된 설정을 기록하는 포스트 입니다."
thumbnail: "./thumbnail/macOs.png"
categoryIcon: "../sumnail.png"
---

### MAC 사용중인 포트의 PID 찾기
***

```bash
sudo lsof -i:포트번호
```

### 사용중인 포트 종료하기
***

```bash
// PID 조회
sudo lsof -i:4000

COMMAND  PID USER   FD   TYPE             DEVICE SIZE/OFF NODE NAME
ruby    4020 root   11u  IPv4 0x7c07039bcf2cf1b7      0t0  TCP localhost:terabase (LISTEN)

**강제 종료 커맨드**
sudo kill -9 4020
(sudo kill -9 [PID])
```


