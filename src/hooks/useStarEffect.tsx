import {
  MutableRefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'

export interface UseStarPropsType {
  sceneRef: MutableRefObject<HTMLDivElement | null>
}
export const useStarEffect = () => {
  const sceneRef: MutableRefObject<HTMLDivElement | null> =
    useRef<HTMLDivElement>(null)

  const count = 20
  const scene = sceneRef
  useEffect(() => {
    for (let i = 0; i < count; i++) {
      const star = document.createElement('i')
      console.log(scene.current?.clientWidth)
      const x = Math.floor(Math.random() * scene.current?.clientWidth)

      const duration = Math.random() * 1
      const h = Math.random() * 100

      star.style.left = `${x}px`
      star.style.width = `1px`
      star.style.height = `${20 + h}px`
      star.style.animationDuration = `${duration}s`
      scene.current?.appendChild(star)
      console.log('hh')
    }
  })

  return scene
}
