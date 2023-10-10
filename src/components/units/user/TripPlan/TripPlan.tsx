import DragDropTimeLine from './component/DragDropTimeLine/DragDropTimeLine';
import TripState from './component/TripState/TripState';

import * as Styled from './styles';

function TripPlan() {
  // const handleClick = () => {};
  return (
    <Styled.Container>
      <Styled.StateWrapper>
        <TripState />
      </Styled.StateWrapper>

      <Styled.TripsWrapper>
        <DragDropTimeLine />
      </Styled.TripsWrapper>
    </Styled.Container>
  );
}

export default TripPlan;
