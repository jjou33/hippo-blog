import React from 'react'
import * as S from './styles'
import CommentWidget from 'components/molecules/CommentWidget'
import PostToc from 'components/molecules/PostToc'

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
