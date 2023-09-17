import * as styles from './styles';
import { FavoriteBorder } from '@material-ui/icons';

//  1. css 컴포넌트화
//  2. padding값 신경쓰지 말고 일단 넣기
function TripGallery() {
  return (
    <div css={styles.container}>
      <div css={styles.userProfile}>
        <div css={styles.profileLeft}>
          <img
            css={styles.userImg}
            src="https://i.namu.wiki/i/IUKpnzynPCMlkcs4qRLos3NAnwQu48KLCi7eUXFK0RDyRO1o4rgquRpH2iEJh6G4CGkiGglBWuDp04zsc4Cwww.webp"
          ></img>

          <div>홍길동</div>
        </div>
        <div css={styles.profilRight}>
          <div css={styles.profilDesc}>
            <span css={styles.favoriteIcone}>
              <FavoriteBorder />
            </span>

            <span css={styles.text}>좋아요</span>
          </div>
          <div css={styles.profilDesc}>
            <span css={styles.number}>0</span>
            <span css={styles.text}>필로워</span>
          </div>
          <div css={styles.profilDesc}>
            <span css={styles.number}>0</span>
            <span css={styles.text}>팔로잉</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TripGallery;
