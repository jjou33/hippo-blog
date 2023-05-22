import { ReactNode } from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

interface GatsbyLinkProps {
  children: ReactNode
  className?: string
  to: string
}

export const CardTitleWrapper = styled.div`
  padding: 200px 20px 0 20px;
  @media screen and (max-width: 768px) {
    padding: 0;
  }
`

export const BadgeWrapper = styled.div`
  margin: 20px 0 10px 0;
  display: flex;
  flex-direction: row;
`
export const ProjectDiaryItemComtainer = styled(
  ({ ...props }: GatsbyLinkProps) => <Link {...props} />,
)`
  ${(props: { imagepath: string }) =>
    css`
      background: linear-gradient(
          to bottom,
          rgba(20, 20, 20, 0) 10%,
          rgba(20, 20, 20, 0.1) 55%,
          rgba(20, 20, 20, 0.6) 100%
        ),
        url(${props.imagepath});
      background-size: cover;
    `};
  border: none;
  height: 350px;
  margin: 50px;

  position: relative;
  width: calc((100vw - calc((100vw - 1200px))) / 2 - 20px);
  border-radius: 20px;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  box-shadow: 0px 9px 10px -2px rgb(0 0 0 / 10%);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;

  &:hover {
    box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.1);
    transform: translateY(-7px);
  }

  @media screen and (max-width: 768px) {
    width: 250px;
    padding: 170px 0 0 10px;
  }
`
