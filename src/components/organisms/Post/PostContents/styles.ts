import styled from '@emotion/styled'
import { themedPalette } from 'styles/themeVariables'

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
      color: ${themedPalette.strong_text_color};
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
    /* font-family: MaplestoryLight; */
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
    font-size: 35px;
    /* &::before {
      content: '';
      padding-left: 5px;
      background-color: #539dfd;
      margin-right: 25px;
      @media screen and (max-width: 768px) {
        margin-right: 10px;
      }
    } */
    @media screen and (max-width: 768px) {
      font-size: 20px;
      margin: 10px 0 0 0;
    }
  }

  h4 {
    font-size: 25px;
    /* &::before {
      content: '';
      padding-left: 5px;
      background-color: #ffd381;
      margin-right: 25px;
      @media screen and (max-width: 768px) {
        margin-right: 10px;
      }
    } */
    @media (max-width: 768px) {
      font-size: 18px;
      margin: 10px 0 0 0;
    }
  }

  h5 {
    font-size: 25px;
    &::before {
      content: '';
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
    margin: 20px 0;
    padding: 5px 15px;
    border-left: 2px solid #000000;
    font-weight: 800;
    background-color: #36466a;
    color: #a8c2b2;
  }

  // Adjust List Element Style
  ol,
  ul {
    margin-left: 15px;
    padding: 20px 0 20px 20px;
    li {
      list-style: disc;
      padding-left: 10px;
      strong {
        color: ${themedPalette.strong_text_color};
      }
    }
  }
  table {
    thead {
      color: black;
      background-color: #bcebe4;
    }
    tr {
      color: black;
      background-color: #bcebe4;
    }
    th {
      padding: 0 10px;
    }
    td {
      color: black;
      padding: 0 10px;
      background-color: whitesmoke;
      border-style: solid;
    }
  }
  // Adjust Horizontal Rule style

  // Adjust Link Element Style
  a {
    color: #4263eb;
    text-decoration: none;
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
    /* background-color: ${themedPalette.bg_element4};
    color: ${themedPalette.code_text_color}; */
    font-weight: 800;
    font-style: bold;
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
