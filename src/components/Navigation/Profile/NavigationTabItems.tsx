import { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import { CategoryNavIconProps } from 'types/Category.types'
import { IconPropsType } from 'types/index'
const TabMenuItemsIcon = styled.span`
  position: absolute;
  font-size: 1.75em;
  margin: 10px 0px 15px 0px;
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  transition: 0.5s;
  transition-delay: 0.2s;
  svg {
    z-index: 1;
  }
`

const TabMenuItemsTitle = styled.span`
  position: absolute;
  font-size: 13px;
  margin-bottom: 30px;
  color: #2f363e;
  opacity: 0;
  border-radius: 15px;
  transform: translateY(15px);
  padding: 5px 10px;
  background: #ecf0f3;
  box-shadow: 5px 5px 7px rgba(0, 0, 0, 0.25),
    inset 2px 2px 3px rgba(255, 255, 255, 0.25),
    inset -3px -3px 5px rgba(0, 0, 0, 0.5);
  transition: 0.5s;
`

const TabMenuItems = styled.li`
  position: relative;
  list-style: none;
  width: 80px;
  margin: 0 5px;
`
const shaking_in_animation = keyframes`
  0% {
    transform: rotate(10deg);
  }

  30% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(10deg);
  }
  100% {
    transform: rotate(-10deg);
  }
`
const TabMenuItemsAnchor = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-decoration: none;
  transition: all ease 1s;
  &:hover {
    animation: ${shaking_in_animation} 0.4s ease;
  }
`
interface navTabPropsType extends IconPropsType {
  title: string
  href: string
}
const NavigationTabMenu: FunctionComponent<navTabPropsType> = function ({
  title,
  navIconSet,
  href,
}) {
  return (
    // <TabMenuItems ref={tabMenuRef} isActive={isActive} onClick={toggleTab}>
    <TabMenuItems>
      <TabMenuItemsAnchor href={href} target="_blank">
        <TabMenuItemsIcon>
          {navIconSet[title] !== undefined
            ? navIconSet[title].icon('30', '30')
            : ''}
        </TabMenuItemsIcon>
        {/* <TabMenuItemsTitle>{title}</TabMenuItemsTitle> */}
      </TabMenuItemsAnchor>
    </TabMenuItems>
  )
}

export default NavigationTabMenu
