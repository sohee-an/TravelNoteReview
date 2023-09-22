import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import * as Styled from './styles';

function TripState() {
  return (
    <Styled.Container>
      <FormGroup>
        <FormControlLabel control={<Switch color="primary" />} label="결정" />
      </FormGroup>
      <Stack direction="row" spacing={2}>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
      </Stack>
    </Styled.Container>
  );
}

export default TripState;
