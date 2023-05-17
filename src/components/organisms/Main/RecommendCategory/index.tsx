import * as S from './styles'
import SquareCard from 'components/molecules/SquareCard'
import SectionHeader from 'components/molecules/SectionHeader'
import type { ImagePathPropsType } from 'types/image'

const RecommendCategory = ({ imagePath }: ImagePathPropsType) => {
  const RecommendCategoryList: string[] = [
    'Javascript',
    'react',
    'vue',
    'Babel',
    'Algorithm',
    'HTML',
    'Browser',
    'Mac',
  ]

  return (
    <S.RecommendCategoryContainer>
      <SectionHeader
        selectedCategory="추천 카테고리 🙌"
        fontSize={50}
        iconName="hambergerMenu"
        iconSize={60}
        iconmediasize={35}
        mediasize={25}
      />
      <S.RecommandCategoryWrapper>
        {RecommendCategoryList.map((categoryName, index) => {
          return (
            <SquareCard
              key={index}
              imagePath={imagePath}
              categoryName={categoryName}
              width="65%"
              height="65%"
              radius="50%"
              imagemediasize="70"
              fontSize={15}
              fontWeight={800}
              mediasize={12}
            />
          )
        })}
      </S.RecommandCategoryWrapper>
    </S.RecommendCategoryContainer>
  )
}

export default RecommendCategory
