import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import TripCard from './components/TripCard/TripCard';
import * as Styled from './styles';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function UserTrip() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Styled.Container>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', display: 'flex' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="최근 여행" {...a11yProps(0)} />
          <Tab label="추천 여행" {...a11yProps(1)} />
        </Tabs>
        <Link
          to="/trip/plan"
          style={{ display: 'flex', textDecoration: 'none', color: 'inherit' }}
        >
          <Button>여행짜기</Button>
        </Link>
        <Link
          to="/createTrip"
          style={{ display: 'flex', textDecoration: 'none', color: 'inherit' }}
        >
          <Button>여행등록</Button>
        </Link>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Styled.CardContainer>
          <TripCard />
          <TripCard />
        </Styled.CardContainer>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Styled.CardContainer>
          <TripCard />
          <TripCard />
        </Styled.CardContainer>
      </CustomTabPanel>
    </Styled.Container>
  );
}
