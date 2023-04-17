declare const global: unknown

/**
 * @description
 * 현재 JS 런타임이 서버 환경(Node.js) 인지 확인
 */

export const isServer = () => {
  return typeof window === 'undefined' && typeof global === 'undefined'
}

/**
 * @description
 * 현재 JS 런타임이 클라이언트 환경(브라우저) 인지 확인
 */

export const isClient = () => {
  return !isServer()
}

/**
 * @description User-Agent 문자열 기반 OS값 반환 함수
 *
 * @return
 * - `ios`: iOS 환경
 * - `android`: Android 환경
 * - `web`: 그 외의 브라우저 환경
 * - `false`: 그 외의 서버 환경
 */

export const getOSByUserAgent = () => {
  // if (!isServer()) {
  //   return false
  // }

  const isIos = window.navigator.userAgent.match(/ipad|iphone/i) !== null

  if (isIos) {
    return 'ios'
  }

  const isAndroid = window.navigator.userAgent.match(/Android/i) !== null

  if (isAndroid) {
    return 'android'
  }

  return 'web'
}
