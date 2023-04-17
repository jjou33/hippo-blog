import React from 'react'

import * as S from './styles'

interface ProfileImageProps {
  profileImage: string
}

const ProfileImage = ({ profileImage }: ProfileImageProps) => {
  return <S.ProfileImageWrapper src={profileImage} alt="Profile Image" />
}

export default ProfileImage
