import * as S from './styles'

interface PostContentProps {
  html: string
}

const PostContent = ({ html }: PostContentProps) => {
  const tag = document.querySelectorAll('pre')
  console.log('tag : ', tag)
  return <S.MarkdownRenderer dangerouslySetInnerHTML={{ __html: html }} />
}

export default PostContent
