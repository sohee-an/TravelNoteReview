import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import * as Styled from './styles';
import TripCard from './components/TripCard/TripCard';

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
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Styled.Container>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="최근 여행" {...a11yProps(0)} />
          <Tab label="추천 여행" {...a11yProps(1)} />
          <Tab label="여행 짜기" {...a11yProps(2)} />
        </Tabs>
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
      <CustomTabPanel value={value} index={2}></CustomTabPanel>
    </Styled.Container>
  );
}
