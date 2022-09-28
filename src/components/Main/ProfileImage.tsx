import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
// import { GatsbyImage } from 'gatsby-plugin-image'
// import {} from '../../../static/profile-image.pn'
type ProfileImageProps = {
  profileImage: string
}

const ProfileImageWrapper = styled.img`
  width: 120px;
  height: 120px;
  margin: 80px 0px 5px 0px;

  
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
