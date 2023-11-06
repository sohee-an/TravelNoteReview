import { useNavigate, useParams } from 'react-router-dom';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import Timeline from '@mui/lab/Timeline';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
// import LaptopMacIcon from '@mui/icons-material/LaptopMac';
// import HotelIcon from '@mui/icons-material/Hotel';
// import RepeatIcon from '@mui/icons-material/Repeat';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import Typography from '@mui/material/Typography';
import { dummyData } from './dummyData';

export default function TimelineTrip() {
  const navigate = useNavigate();
  const { tid } = useParams();

  const handleClick = (id: number) => {
    navigate(`/trip/${tid}/${id}/detail`);
  };

  return (
    <Timeline position="alternate">
      {dummyData.map((item) => {
        return (
          <TimelineItem key={item.id}>
            {item.time && (
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                align="right"
                variant="body2"
                color="text.secondary"
              >
                {item.time}
              </TimelineOppositeContent>
            )}
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot sx={{ cursor: 'pointer' }}>
                <FastfoodIcon onClick={() => handleClick(item.id)} />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent
              sx={{ py: '12px', px: 2, cursor: 'pointer' }}
              onClick={() => handleClick(item.id)}
            >
              <Typography variant="h6" component="span">
                {item.state}
              </Typography>
              <Typography>{item.minDesc}</Typography>
            </TimelineContent>
          </TimelineItem>
        );
      })}
    </Timeline>
  );
}
