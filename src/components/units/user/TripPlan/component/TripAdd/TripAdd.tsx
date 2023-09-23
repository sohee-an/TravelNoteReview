import * as Styled from './styles';
import { AddCircleOutline } from '@material-ui/icons';
type Props = {
  onClick: () => void;
};

function TripAdd({ onClick }: Props) {
  return (
    <Styled.Container>
      <AddCircleOutline onClick={onClick} />
    </Styled.Container>
  );
}

export default TripAdd;
