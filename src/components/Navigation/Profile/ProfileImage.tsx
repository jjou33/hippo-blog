import React from 'react'
import { getSvgJSXElement } from 'utils/Common/Common'
import {
  ProfileImageWrapper,
  RoketImageWrapper,
  RotateRocket,
} from './style/ProfileImageStyled'

interface ProfileImageProps {
  profileImage: string
  roketImage: string
}

const ProfileImage = ({ profileImage, roketImage }: ProfileImageProps) => {
  return (
    <>
      <a
        href="https://www.flaticon.com/free-stickers/astronaut"
        title="astronaut stickers"
        target="_blank"
      >
        <ProfileImageWrapper src={profileImage} alt="Profile Image" />
      </a>
    </>
  )
}

export default ProfileImage
