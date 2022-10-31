import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

interface ProfileImageProps {
  profileImage: string
}

const ProfileImageWrapper = styled.img`
  width: 120px;
  height: 120px;
  margin: 40px 0px 5px 0px;

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`

const ProfileImage: FunctionComponent<ProfileImageProps> = function ({
  profileImage,
}) {
  return <ProfileImageWrapper src={profileImage} alt="Profile Image" />
}

export default ProfileImage
