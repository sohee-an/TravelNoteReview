import UserInfo from '@components/UserGallery/UserInfo/UserInfo';
import PhotoBox from '@components/UserGallery/PhotoBox/PhotoBox';
import * as Styled from './styles';
import UserTrip from '@components/UserGallery/UserTrip/UserTrip';

function UserGallery() {
  return (
    <Styled.Container>
      <UserInfo />
      <Styled.TopButtonGroup>
        <Styled.ProfileButton variant="outlined">
          프로필 편집
        </Styled.ProfileButton>
        <Styled.ProfileButton variant="outlined">
          프로필 공유
        </Styled.ProfileButton>
      </Styled.TopButtonGroup>
      <PhotoBox />
      <UserTrip />
    </Styled.Container>
  );
}

export default UserGallery;
