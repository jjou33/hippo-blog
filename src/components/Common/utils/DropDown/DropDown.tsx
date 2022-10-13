import { useState, useEffect, useRef } from 'react'
import styled from '@emotion/styled'
import { css, keyframes } from '@emotion/react'
import { useRecoilValue } from 'recoil'
import { dropDownState } from 'components/Navigation/Category/CategoryList'
const dropdown_in_animation = keyframes`
  0% {
    transform: translateY(-100%);
  }

  100% {
    transform: translateY(0);
  }
`

const dropdown_out_animation = keyframes`
  0% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(-100%);
  }
`
interface animationPropsType {
  visibility: any
}
const DropdownArticle = styled.div`
  overflow: hidden;
  ul {
    animation: ${(props: animationPropsType) =>
      props.visibility
        ? css`
            ${dropdown_in_animation} .6s ease;
          `
        : css`
            ${dropdown_out_animation} .6s ease;
          `};
    animation-fill-mode: ${props => (props.visibility ? css`forwards` : css``)};
  }
`
const Dropdown = (props: any) => {
  const selectedValue = useRecoilValue(dropDownState)
  const isSelected = selectedValue === props.selectedCategory
  const ref = useRef(null)
  console.log('ref : ', ref.current)

  const [visibilityAnimation, setVisibilityAnimation] = useState(false)

  useEffect(() => {
    if (props.visibility) {
      setVisibilityAnimation(true)
    } else {
      setTimeout(() => {
        setVisibilityAnimation(false)
      }, 350)
    }
  }, [props.visibility])
  return (
    // <DropdownArticle visibility={props.visibility}>
    //   {props.visibility && isSelected ? props.children : ''}
    // </DropdownArticle>
    <DropdownArticle visibility={props.visibility}>
      {visibilityAnimation && isSelected ? props.children : ''}
    </DropdownArticle>
  )
}

export default Dropdown
