import React, { ReactNode, useEffect } from 'react'
import GlobalStyle from 'styles/GlobalStyle'
import Footer from 'components/layout/Footer'
import * as S from './styles'

import { Helmet } from 'react-helmet'

import { RecoilRoot } from 'recoil'

interface TemplateProps {
  title: string
  description: string
  url: string
  image: string
  isPost?: boolean
  children: ReactNode
}

const Template = ({
  title,
  description,
  url,
  image,
  children,
}: TemplateProps) => {
  useEffect(() => {
    if (window.innerWidth !== window.outerWidth) {
      document.body.style.width = `${window.innerWidth}`
    }

    if (window.innerHeight !== window.outerHeight) {
      document.body.style.height = `${window.innerHeight}`
    }

    let cachedWidth = window.innerWidth
    const resizeHandler = (): void => {
      const newWitdh = window.innerWidth
      if (cachedWidth !== newWitdh) {
        cachedWidth = newWitdh
      }
    }
    window.addEventListener('resize', resizeHandler)

    return () => window.removeEventListener('resize', resizeHandler)
  }, [])
  return (
    <>
      <S.Container>
        <RecoilRoot>
          <GlobalStyle />
          <Helmet>
            <title>{title}</title>

            <meta name="description" content={description} />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0 maximum-scale=1, user-scalable=0"
            />
            <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />

            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={url} />
            <meta property="og:site_name" content={title} />

            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
            <meta name="twitter:site" content="@사용자이름" />
            <meta name="twitter:creator" content="@사용자이름" />
          </Helmet>
          {children}
        </RecoilRoot>
      </S.Container>
      <Footer />
    </>
  )
}

export default Template
