import * as User from './styles';
import { FavoriteBorder } from '@material-ui/icons';

//  2. padding값 신경쓰지 말고 일단 넣기
function TripGallery() {
  return (
    <User.Container>
      <User.UserProfile>
        <User.ProfileLeft>
          <User.Img src="https://i.namu.wiki/i/IUKpnzynPCMlkcs4qRLos3NAnwQu48KLCi7eUXFK0RDyRO1o4rgquRpH2iEJh6G4CGkiGglBWuDp04zsc4Cwww.webp"></User.Img>

          <div>홍길동</div>
        </User.ProfileLeft>
        <User.ProfilRight>
          <User.ProfilDesc>
            <User.FavoriteIcone>
              <FavoriteBorder />
            </User.FavoriteIcone>

            <User.Text>좋아요</User.Text>
          </User.ProfilDesc>
          <User.ProfilDesc>
            <User.Number>0</User.Number>
            <User.Text>필로워</User.Text>
          </User.ProfilDesc>
          <User.ProfilDesc>
            <User.Number>0</User.Number>
            <User.Text>팔로잉</User.Text>
          </User.ProfilDesc>
        </User.ProfilRight>
      </User.UserProfile>
    </User.Container>
  );
}

export default TripGallery;
