import * as S from './styles'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface PostContentProps {
  html: string
}




const PostContent = ({ html }: PostContentProps) => {
  return <S.MarkdownRenderer dangerouslySetInnerHTML={{ __html: html }} />
}

export default PostContent
