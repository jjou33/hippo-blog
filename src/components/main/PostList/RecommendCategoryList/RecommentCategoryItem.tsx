import * as S from './styles'
import type { IconPropsType } from 'types/image/imagePathType'

interface RecommentCategoryItemProps {
  categoryName: string
  imagePath: IconPropsType
}
const RecommendCategoryItem = ({
  imagePath,
  categoryName,
}: RecommentCategoryItemProps) => {
  console.log('image : ', imagePath)

  return (
    <S.RecommendCategoryItem>
      <S.RecommendCategoryImg imagePath={imagePath[categoryName]} />
    </S.RecommendCategoryItem>
  )
}

export default RecommendCategoryItem
