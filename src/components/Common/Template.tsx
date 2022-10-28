import React, {
  FunctionComponent,
  ReactNode,
  useRef,
  MutableRefObject,
} from 'react'
import styled from '@emotion/styled'
import GlobalStyle from 'styles/GlobalStyle'
import CategoryList from 'components/Navigation/Category/CategoryList'
import Introduction from 'components/Navigation/Profile/Introduction'
import Footer from 'components/Common/Footer'
import { Helmet } from 'react-helmet'
import { useCategoryMetadata } from 'hooks/useCategoryMetadata'
import { navIconSet } from 'assets/Svg/NavIconSet'
import Header from 'components/Header/Header'
import { useScrollStateBar } from 'hooks/useScrollStateBar'
import { getSelectedCategory, getCategoryList } from 'utils/Category/Category'
import { RecoilRoot } from 'recoil'
import { CategoryMetadataType } from 'types/Category.types'
// import ComputerModel from 'components/Common/ComputerGraphic'

interface TemplateProps {
  title: string
  description: string
  url: string
  image: string
  children: ReactNode
}
const Container = styled.div`
  display: flex;
`
const Main = styled.main`
  flex: 4;
`
const Navigation = styled.nav`
  flex: 0.4;
  box-shadow: 1px 2px 4px 0px;
  background: linear-gradient(0deg, #c6dcf0 20%, #ebeff4 45%);
  @media (max-width: 768px) {
    display: none;
  }
`
const StickBox = styled.div`
  position: sticky;
  ::-webkit-scrollbar {
    display: none;
  }
  overflow: scroll;
  height: 1000px;
  background: linear-gradient(0deg, #c6dcf0 20%, #ebeff4 45%);
  top: 0px;
  z-index: 1;
`
export interface objectType {
  [key: string]: string
}
const Template: FunctionComponent<TemplateProps> = function ({
  title,
  description,
  url,
  image,
  children,
}) {
  const {
    data: {
      allFile: { edges },
      allMarkdownRemark,
    },
    categoryCount,
  }: CategoryMetadataType = useCategoryMetadata()
  const imageObject: objectType = {}

  edges.forEach(item => {
    imageObject[item.node.publicURL.split('/')[3].split('.')[0]] =
      item.node.publicURL
  })
  const scroll = useScrollStateBar()
  const selectedCategory: string = getSelectedCategory(location.search)
  const headerRef: MutableRefObject<HTMLDivElement | null> =
    useRef<HTMLDivElement>(null)
  const stickyRef: MutableRefObject<HTMLDivElement | null> =
    useRef<HTMLDivElement>(null)
  const stickyWidth = stickyRef.current?.clientWidth

  console.log('headerRef : ', headerRef.current?.clientWidth)
  console.log('stickyRef : ', stickyRef.current?.clientWidth)

  const categoryList = getCategoryList(allMarkdownRemark)

  return (
    <>
      <Container>
        <RecoilRoot>
          <Navigation>
            <StickBox ref={stickyRef}>
              <Introduction profileImage={imageObject['profile-image']} />
              <CategoryList
                categoryList={categoryList}
                selectedCategory={selectedCategory}
                navIconSet={navIconSet}
                categoryCount={categoryCount}
              />
            </StickBox>
          </Navigation>
          <Main>
            <Helmet>
              <title>{title}</title>

              <meta name="description" content={description} />
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
              />
              <meta
                httpEquiv="Content-Type"
                content="text/html;charset=UTF-8"
              />

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

            <GlobalStyle />

            <Header stickyWidth={stickyWidth} />
            {children}
          </Main>
        </RecoilRoot>
      </Container>

      <Footer />
    </>
  )
}

export default Template
