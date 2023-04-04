import { css } from '@emotion/react'

const Reset = css`
  html {
    font-family: 'IBMPlexSansBold', Roboto, 'Noto Sans KR', NanumGothic,
      'Malgun Gothic', sans-serif;
    font-size: 14px;
  }
  body {
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
    color: rgba(29, 29, 31);
    letter-spacing: -0.05em;
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
  blockquote,
  pre,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  a,
  a:hover {
    /* color: inherit; */
    text-decoration: none;
    color: rgb(29, 29, 31);
    cursor: pointer;
  }
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
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
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
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
  div,
  span,
  article,
  section,
  header,
  footer,
  aside,
  p,
  ul,
  li,
  fieldset,
  legend,
  label,
  a,
  nav,
  form {
    box-sizing: border-box;
  }
  ol,
  ul,
  li {
    list-style: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  img {
    max-width: 100%;
    height: auto;
    border: 0;
  }
  button {
    border: 0;
    background: transparent;
    cursor: pointer;
  }
`

export default Reset
