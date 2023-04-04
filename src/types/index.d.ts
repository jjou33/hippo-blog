declare module '*.svg' {
  import React = require('react')

  export const ReactComponent: REact.FC<React.SVGProps<SVGSVGElement>>
  const src: string
  export default src
}

declare namespace JSX {
  interface IntrinsicElements {
    'ion-icon': any
  }
}

declare module '*.gltf'
declare module '*.png'
declare module '*.ttf'
declare module '*.woff2'
