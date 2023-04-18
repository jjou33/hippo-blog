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
  margin-top: 50px;
  text-align: center;
  color: #ffd381;
  font-size: 35px;
  font-weight: 800;
  @media (max-width: 768px) {
    font-size: 20px;
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
  margin: 10px auto;
  font-size: 18px;
  text-align: center;
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
  width: 100vw;
  height: 90vh;

  @media (max-width: 768px) {
    height: 500px;
  }
`
export const PostContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1000px;
  margin: 45px auto;
  padding: 100px 0;
  @media screen and (max-width: 768px) {
    padding: 0;
  }
`
export const PostTocContainer = styled.nav`
  font-size: 20px;

  @media screen and (max-width: 768px) {
    width: 100vw;
    padding: 0 20px;
    font-size: 10px;
  }
`

export const PostTocItemContainer = styled.div`
  width: 100%;
`

export const PostTocWrapper = styled.ol`
  width: 100%;
  list-style: none;
  overflow: auto;
  counter-reset: item;
`
export const PostTocTitle = styled.li`
  border-top: 1px solid #d4cfcf;
  border-radius: 10px 10px 0 0;
  display: list-item;
  outline: none;
  word-break: break-all;
  padding: 10px 10px;
  font-weight: 800;
  background-color: #ffd381;
`

export const PostTocItem = styled.li`
  display: flex;
  flex-direction: column;
  a {
    flex: 1;

    font-weight: normal;
    color: #514949;
    line-height: 1.5;
    border-left: 1px solid #d4cfcf;
    border-right: 1px solid #d4cfcf;
    border-bottom: 1px solid #d4cfcf;

    padding-left: 20px;
    padding-bottom: 12px;
    padding-top: 12px;
    &::before {
      counter-increment: item;
      content: counters(item, '.') '. ';
      color: #f0506e;
      padding-right: 5px;
    }
    &.head3 {
      background-color: rgb(246 86 96 / 3%);
    }
    &:hover {
      background-color: #fcf8eb;
    }
    @media screen and (max-width: 768px) {
      padding-left: 10px;
    }
  }
  &.head4 > a {
    padding-left: 60px;
    @media screen and (max-width: 768px) {
      padding-left: 25px;
    }
  }
  &.head5 > a {
    padding-left: 100px;
    @media screen and (max-width: 768px) {
      padding-left: 35px;
    }
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
  word-break: break-all;
  // Markdown Style
  line-height: 1.8;
  font-size: 25px;

  -webkit-user-select: text;
  -moz-user-select: text;
  -ms-user-select: text;
  user-select: text;
  // Apply Padding Attribute to All Elements
  p {
    padding: 10px 0;
    margin: 5px 0;
    font-size: 20px;
    strong {
      color: #006dd7;
    }
    @media (max-width: 768px) {
      font-size: 12px;
    }
  }

  // Adjust Heading Element Style
  h1,
  h2,
  h3,
  h4,
  h5 {
    /* font-weight: 800; */
    margin: 60px 0 10px 0;
    font-family: MaplestoryLight;
  }

  * + h1,
  * + h2,
  * + h3 {
    /* margin-top: 80px; */
  }

  hr + h1,
  hr + h2,
  hr + h3,
  hr + h4,
  hr + h5 {
    margin-top: 0;
  }

  h1 {
    font-size: 45px;
  }

  h2 {
    font-size: 43px;
  }

  h3 {
    font-size: 45px;
    &::before {
      content: '📘';
      padding-left: 5px;
      margin-right: 15px;
    }
    @media screen and (max-width: 768px) {
      font-size: 20px;
      margin: 10px 0 0 0;
    }
  }

  h4 {
    font-size: 35px;
    &::before {
      content: '📒';
      padding-left: 5px;
      margin-right: 15px;
    }
    @media (max-width: 768px) {
      font-size: 20px;
      margin: 10px 0 0 0;
    }
  }

  h5 {
    font-size: 25px;
    &::before {
      content: '📕';
      padding-left: 5px;
      margin-right: 15px;
    }
    text-indent: 15px;
    @media (max-width: 768px) {
      font-size: 15px;
      margin: 10px 0 0 0;
    }
  }
  h3 + hr {
    border: 1px solid #000000;
    height: 3px;
    position: relative;
    border: none;
    &::after {
      content: '';
      position: absolute;
      width: 50%;
      height: 3px;
      left: 0;
      display: block;
      clear: both;
      background-color: #539dfd;
    }
    &::before {
      content: '';
      position: absolute;
      width: 50%;
      height: 3px;
      right: 0;
      display: block;
      clear: both;
      background-color: #e2dfdf;
    }
    /* background: linear-gradient(to left, red, blue); */
    margin-bottom: 20px;
    border-radius: 10px;
  }
  h4 + hr {
    border: 1px solid #000000;
    height: 3px;
    position: relative;
    border: none;
    &::after {
      content: '';
      position: absolute;
      width: 50%;
      height: 3px;
      left: 0;
      display: block;
      clear: both;
      background-color: #ffd381;
    }
    &::before {
      content: '';
      position: absolute;
      width: 50%;
      height: 3px;
      right: 0;
      display: block;
      clear: both;
      background-color: #e2dfdf;
    }
    /* background: linear-gradient(to left, red, blue); */
    margin-bottom: 20px;
    border-radius: 10px;
  }

  h5 + hr {
    border: 1px solid #000000;
    height: 3px;
    position: relative;
    border: none;
    &::after {
      content: '';
      position: absolute;
      width: 50%;
      height: 3px;
      left: 0;
      display: block;
      clear: both;
      background-color: #f5a6a6;
    }
    &::before {
      content: '';
      position: absolute;
      width: 50%;
      height: 3px;
      right: 0;
      display: block;
      clear: both;
      background-color: #e2dfdf;
    }
    /* background: linear-gradient(to left, red, blue); */
    margin-bottom: 20px;
    border-radius: 10px;
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
    margin-left: 15px;
    padding: 20px 0 20px 20px;
    li {
      list-style: disc;
      padding-left: 10px;
    }
  }

  // Adjust Horizontal Rule style

  // Adjust Link Element Style
  a {
    color: #4263eb;
    text-decoration: underline;
  }

  // Adjust Code Style
  pre[class*='language-'] {
    margin: 50px 0px;

    background: #282c34;
    box-shadow: 0 1px 10px rgb(0 0 0 / 18%);
    border-radius: 0 0 10px 10px;
    ::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.5);
      border-radius: 3px;
    }
  }

  .gatsby-highlight {
    position: relative;
    &::before {
      content: '';
      border-radius: 10px 10px 0 0;
      position: absolute;
      width: 100%;
      height: 35px;
      left: 0;
      display: block;
      clear: both;
      top: -28px;
      background-color: #3d3f44;
      @media screen and (max-width: 768px) {
        height: 25px;
        top: -25px;
      }
    }
    &::after {
      content: '';
      position: absolute;
      width: 15px;
      height: 15px;
      margin: 10px 0 0 10px;
      top: -28px;
      border-radius: 50%;
      display: block;
      clear: both;
      background-color: red;
      @media screen and (max-width: 768px) {
        width: 10px;
        height: 10px;
        top: -26px;
      }
    }
  }

  code[class*='language-'],
  pre[class*='language-'] {
    span {
    }
    tab-size: 2;
    font-weight: 500;
    font-size: 18px;
    @media (max-width: 768px) {
      font-size: 10px;
    }
  }

  code[class*='language-text'] {
    background-color: #c8e3fe;
    color: black;
    padding: 0 5px;
  }
  // Markdown Responsive Design
  @media (max-width: 768px) {
    width: 100vw;
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

    h4 {
      margin-bottom: 5px;
    }

    h5 {
      margin-bottom: 5px;
    }
    img {
      width: 100%;
    }
    ul {
      margin-left: 5px;
      li {
        list-style: disc;
        padding-left: 10px;
      }
    }
  }
`
