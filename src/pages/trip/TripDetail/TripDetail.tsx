import TripCarousel from '@components/units/trip/TripCarousel/TripCarousel';
import * as Styled from './styles';
import { useState } from 'react';
import { Button } from '@material-ui/core';
import ShareIcon from '@mui/icons-material/Share';
import { FavoriteBorder, LocationOn } from '@material-ui/icons';
import MapComponent from '@components/units/trip/Map/MapComponent';
import TimelineTrip from '@components/units/trip/Map/TimeLineTrip/TimeLineTrip';
import Typography from '@mui/material/Typography';

function TripDetail() {
  const [locationState, setLoacationState] = useState(false);

  const handleClick = () => {
    setLoacationState((pre) => !pre);
  };
  return (
    <Styled.Container>
      <TripCarousel />
      <Styled.ButtonGroup>
        <Button variant="contained">이전 여행</Button>
        <Button>
          좋아요 <FavoriteBorder />
        </Button>
        <LocationOn onClick={handleClick} />

        <Button>경로추가</Button>
        <Button>
          <ShareIcon />
        </Button>
        <Button variant="contained">다음 여행 </Button>
      </Styled.ButtonGroup>
      <TimelineTrip timelinePosition="left" />
      {locationState && <MapComponent />}
      <Typography component="span">여행을 상세내용들</Typography>
    </Styled.Container>
  );
}

export default TripDetail;
