import DragDropTimeLine from './component/DragDropTimeLine/DragDropTimeLine';
import TripAdd from './component/TripAdd/TripAdd';
import TripState from './component/TripState/TripState';

import * as Styled from './styles';

function TripPlan() {
  const handleClick = () => {};
  return (
    <Styled.Container>
      <Styled.StateWrapper>
        <TripState />
      </Styled.StateWrapper>
      <Styled.TopWrapper>대기열</Styled.TopWrapper>
      <Styled.TripsWrapper>
        <DragDropTimeLine />
        <TripAdd onClick={handleClick} />
      </Styled.TripsWrapper>
    </Styled.Container>
  );
}

export default TripPlan;
