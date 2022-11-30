import { useEffect, useState } from 'react'
import { useScrollStateBar } from 'hooks/useScrollStateBar'
export const useParallaxScroll = () => {
  const [scroll, setScroll] = useState(0)

  useEffect(() => {
    const scrollY = () => {
      const scroll = window.scrollY

      setScroll(scroll)
    }
    window.addEventListener('scroll', scrollY)

    return () => window.removeEventListener('scroll', scrollY)
  })

  return scroll
}
