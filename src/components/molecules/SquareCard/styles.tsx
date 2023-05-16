import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { ReactNode } from 'react'
import { themedPalette } from 'styles/themeVariables'
interface GatsbyLinkProps {
  children: ReactNode
  className?: string
  to: string
}

export const SquareCardTextWrapper = styled.div`
  margin: auto;
`

export const SquareCardWrapper = styled(({ ...props }: GatsbyLinkProps) => (
  <Link {...props} />
))`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  height: 200px;
  border: none;
  border-radius: 20px;
  background-color: ${themedPalette.bg_element4};
  color: ${themedPalette.text1};
  display: flex;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
  &:hover {
    box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.1);
    transform: translateY(-7px);
    background-color: ${themedPalette.bg_element1};
    color: ${themedPalette.text1};
  }
  @media screen and (max-width: 1200px) {
    width: 100px;
    height: 120px;
  }
  @media screen and (max-width: 768px) {
    width: 100px;
    height: 120px;
  }
`
