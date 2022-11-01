import { ProfileImageWrapper } from './style/ProfileImageStyled'

interface ProfileImageProps {
  profileImage: string
}

const ProfileImage = ({ profileImage }: ProfileImageProps) => {
  return <ProfileImageWrapper src={profileImage} alt="Profile Image" />
}

export default ProfileImage
