import React from 'react'

import * as S from './Styles'

interface ProfileImageProps {
  profileImage: string
  roketImage: string
}

const ProfileImage = ({ profileImage }: ProfileImageProps) => {
  return (
    <>
      <a
        href="https://www.flaticon.com/free-stickers/astronaut"
        title="astronaut stickers"
        target="_blank"
      >
        <S.ProfileImageWrapper src={profileImage} alt="Profile Image" />
      </a>
    </>
  )
}

export default ProfileImage
