import UserInfo from '@components/units/user/UserInfo/UserInfo';
import PhotoBox from '@components/units/user/PhotoBox/PhotoBox';
import * as Styled from './styles';
import UserTrip from '@components/units/user/UserTrip/UserTrip';

function User() {
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

export default User;
