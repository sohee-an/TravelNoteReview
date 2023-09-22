import TripCarousel from '@components/units/trip/TripCarousel/TripCarousel';
import * as Styled from './styles';
import { Button } from '@material-ui/core';
import ShareIcon from '@mui/icons-material/Share';
import { FavoriteBorder } from '@material-ui/icons';
import MapComponent from '@components/units/trip/Map/MapComponent';

function Trip() {
  return (
    <Styled.Container>
      <TripCarousel />
      <Styled.ButtonGroup>
        <Button>
          좋아요 <FavoriteBorder />
        </Button>
        <Button>경로추가</Button>
        <Button>
          <ShareIcon />
        </Button>
      </Styled.ButtonGroup>
      <MapComponent />
      <Styled.TravelImgContainer>
        <Styled.SearchInputWrapper>
          <Styled.ImgSearchInput
            placeholder="검색어,또는 태그를  입력해주세요"
            variant="outlined"
          />
        </Styled.SearchInputWrapper>
        <Styled.TravelImgWrapper>
          <Styled.Img src="https://www.kagoshima-kankou.com/storage/tourism_themes/12/responsive_images/ElwnvZ2u5uZda7Pjcwlk4mMtr08kLNydT8zXA6Ie__1673_1115.jpeg"></Styled.Img>
          <Styled.Img src="https://t1.daumcdn.net/cfile/tistory/99128B3E5AD978AF20" />
          <Styled.Img src="http://europe.bluetravel.co.kr/data/phototrip/2019/110942910635.jpg" />
          <Styled.Img src="https://i.pinimg.com/originals/82/4a/20/824a207b7cd32570e43583adeea42b3b.jpg" />
        </Styled.TravelImgWrapper>
      </Styled.TravelImgContainer>
    </Styled.Container>
  );
}

export default Trip;
