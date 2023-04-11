import React from 'react'
import * as S from './styles'
import PostToc from './PostTableOfContents/index'
import CommentWidget from './CommentWidget'
interface PostContentProps {
  html: string
}

const PostContent = ({ html }: PostContentProps) => {
  return (
    <S.PostContentsContainer>
      <PostToc />
      <S.MarkdownRenderer dangerouslySetInnerHTML={{ __html: html }} />
      <CommentWidget />
    </S.PostContentsContainer>
  )
}

export default PostContent
