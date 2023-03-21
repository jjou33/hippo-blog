import styled from '@emotion/styled'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

/**
 * PostTemplate
 */

export const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 4;
`

/**
 * PostHeadInfo
 */

export const PostHeadInfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 768px;
  height: 100%;
  margin: 0 auto;
  padding: 150px 0;
  color: #ffffff;

  @media (max-width: 768px) {
    width: 100%;
    padding: 40px 20px;
  }
`

export const PrevPageIcon = styled.div`
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #ffffff;
  color: #000000;
  font-size: 22px;
  cursor: pointer;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
    font-size: 18px;
  }
`

export const Title = styled.div`
  /* display: -webkit-box;
  overflow: hidden;
  overflow-wrap: break-word;
  margin-top: auto;
  text-overflow: ellipsis;
  white-space: normal;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 45px;
  font-weight: 800; */
  margin-top: 50px;
  text-align: center;
  font-size: 60px;
  font-weight: 800;
  font-family: JetBrainsMono;
  @media (max-width: 768px) {
    font-size: 30px;
  }
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 100px auto;
`
export const BadgeWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  /* padding-top: 100px; */
`
export const CategoryWrapper = styled.div`
  margin: 0 auto;
  /* padding-top: 100px; */
`

export const PostData = styled.div`
  /* display: flex; */
  /* justify-content: space-between; */
  /* align-items: center; */
  margin: 10px auto;
  font-size: 18px;
  /* font-weight: 700; */
  text-align: center;
  font-family: JetBrainsMono;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    font-size: 15px;
    font-weight: 400;
  }
`

/**
 * Post Head
 */

type GatsbyImgProps = {
  image: IGatsbyImageData
  alt: string
  className?: string
}

export const AnimationWrapper = styled.div`
  position: relative;
  top: 2px;
`
export const PostHeadWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 90vh;

  @media (max-width: 768px) {
    height: 500px;
  }
`

export const BackgroundImage = styled((props: GatsbyImgProps) => (
  <GatsbyImage {...props} style={{ position: 'absolute' }} />
))`
  z-index: -1;
  width: 100%;
  height: 90vh;
  object-fit: cover;
  filter: brightness(0.25);

  @media (max-width: 768px) {
    height: 500px;
  }
`

/**
 * PostContent
 */

export const MarkdownRenderer = styled.div`
  // Renderer Style
  display: flex;
  flex-direction: column;
  width: 768px;
  margin: 45px auto;
  /* padding: 100px 0; */
  word-break: break-all;

  // Markdown Style
  line-height: 1.8;
  font-size: 25px;


  // Apply Padding Attribute to All Elements
  p {
    padding: 10px 0;
    font-size: 18px;
    font-family: JetBrainsMono;
    strong {
      color: #006dd7;
    }
  }

  // Adjust Heading Element Style
  h1,
  h2,
  h3,
  h4,
  h5 {
    /* font-weight: 800; */
    margin: 20px 0;
  }

  * + h1,
  * + h2,
  * + h3 {
    margin-top: 80px;
  }

  hr + h1,
  hr + h2,
  hr + h3,
  hr + h4,
  hr + h5 {
    margin-top: 0;
  }

  
  h1 {
    font-size: 40px;
  }

  h2 {
    font-size: 35px;
  }

  h3 {
    font-size: 30px;
  }

  h4 {
    font-size: 25px;
  }

  h5 {
    font-size: 20px
  }

  // Adjust Quotation Element Style
  blockquote {
    margin: 30px 0;
    padding: 5px 15px;
    border-left: 2px solid #000000;
    font-weight: 800;
  }

  // Adjust List Element Style
  ol,
  ul {
    margin-left: 20px;
    padding: 30px 0;
    li {
      list-style: disc;
    }
  }

  // Adjust Horizontal Rule style
  hr {
    border: 1px solid #000000;
    margin: 20px 0;
  }

  // Adjust Link Element Style
  a {
    color: #4263eb;
    text-decoration: underline;
  }

  // Adjust Code Style
  pre[class*='language-'] {
    margin: 30px 0;
    padding: 15px;
    font-size: 15px;

    ::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.5);
      border-radius: 3px;
    }
    box-shadow: 0 1px 10px rgb(0 0 0 / 18%);;
  }

  code[class*='language-'],
  pre[class*='language-'] {
    span {
      font-family: JetBrainsMono;  
    }
    tab-size: 2;
  }

  code[class*='language-text'] {
    background-color: #94c6f7;
    color: black;
    padding: 0 5px;
  }
  // Markdown Responsive Design
  @media (max-width: 768px) {
    width: 100%;
    padding: 80px 20px;
    line-height: 1.6;
    font-size: 14px;

    h1 {
      font-size: 23px;
    }

    h2 {
      font-size: 20px;
    }

    h3 {
      font-size: 17px;
    }

    img {
      width: 100%;
    }

    hr {
      margin: 10px 0;
    }
  }
`
