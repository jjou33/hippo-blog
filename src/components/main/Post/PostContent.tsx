import * as S from './styles'

interface PostContentProps {
  html: string
}

const PostContent = ({ html }: PostContentProps) => {
  return <S.MarkdownRenderer dangerouslySetInnerHTML={{ __html: html }} />
}

export default PostContent
