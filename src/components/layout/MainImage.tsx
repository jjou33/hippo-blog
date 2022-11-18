import { useTypingTitle } from 'hooks/useTypingTitle'
import { getMainImageIconSvgElement } from 'utils/Common/Common'
import StarAnimation from '../Common/Animations/StarAnimation/StarAnimation'

import type { HeaderPropsType } from 'types/index'
import * as S from './Styles'

const typedList = ['Front Developer', 'Passion', 'HTML']

const MainImage = (props: HeaderPropsType) => {
  const currentTitle = useTypingTitle(typedList)
  return (
    <S.MainAnimationContainer>
      <StarAnimation />
      {/* <S.MainImageIconWrapper>
        <S.MainImageHtmlIcon>
          {getMainImageIconSvgElement('Html', '200')}
        </S.MainImageHtmlIcon>
        <S.MainImageCssIcon>
          {getMainImageIconSvgElement('Css', '200')}
        </S.MainImageCssIcon>
        <S.MainImageJavscriptIcon>
          {getMainImageIconSvgElement('Javascript', '200')}
        </S.MainImageJavscriptIcon>
        <S.MainImageReactIcon>
          {getMainImageIconSvgElement('React', '200')}
        </S.MainImageReactIcon>
        <S.MainImageVueIcon>
          {getMainImageIconSvgElement('Vue', '200')}
        </S.MainImageVueIcon>
      </S.MainImageIconWrapper> */}
      <S.MainImageTextWrapper>
        <S.MainImageStaticText>Welcome to HippoDev 😎 </S.MainImageStaticText>
        <br />
        <S.MainImageDynamicText>{currentTitle}</S.MainImageDynamicText>
      </S.MainImageTextWrapper>
    </S.MainAnimationContainer>
  )
}

export default MainImage
