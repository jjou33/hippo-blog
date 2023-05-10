import { css } from '@emotion/react'

const Reset = css`
  html,
  body,
  div,
  span,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  abbr,
  address,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  samp,
  small,
  strong,
  sub,
  sup,
  var,
  b,
  i,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section,
  summary,
  time,
  mark,
  a,
  audio,
  video {
    background: transparent;
    border: 0;
    box-sizing: border-box;
    font-size: 100%;
    margin: 0;
    outline: 0;
    padding: 0;
    vertical-align: baseline;
  }
  div {
    box-sizing: border-box;
  }
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    line-height: 1.6;
  }
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  ol,
  ul,
  li {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  a {
    background: transparent;
    font-size: 100%;
    margin: 0;
    padding: 0;
    text-decoration: none;
  }

  a:hover {
    /* color: inherit; */
    text-decoration: none;
    color: rgb(29, 29, 31);
    cursor: pointer;
  }

  input,
  select {
    vertical-align: middle;
  }

  input {
    -webkit-margin-after: 0;
    -webkit-margin-before: 0;
  }

  // Remove "X" button from input field
  input[type='text'] {
    &::-ms-clear {
      display: none;
      height: 0;
      width: 0;
    }

    &::-ms-reveal {
      display: none;
      height: 0;
      width: 0;
    }
  }

  input[type='search'] {
    &::-webkit-search-decoration,
    &::-webkit-search-cancel-button,
    &::-webkit-search-results-button,
    &::-webkit-search-results-decoration {
      display: none;
    }
  }
  img {
    width: 100%;
  }

  body,
  input,
  textarea,
  select,
  button,
  table {
    font-family: NanumSquareNeo, -apple-system, BlinkMacSystemFont, system-ui,
      Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo',
      'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol', sans-serif;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
    color: rgba(29, 29, 31);
    letter-spacing: -0.05em;
    box-sizing: border-box;
  }
`

export default Reset
