import React, { useState } from 'react';
import ShareSelect from '@components/common/ShareSelect/ShareSelect';
import TripPackage from '@components/units/createTrip/TripPackage/TripPackage';
import { Button, CardContent } from '@material-ui/core';
import { Label } from '@material-ui/icons';
import {
  Select,
  MenuItem,
  Input as MuiInput,
  FormControl,
  InputLabel,
} from '@mui/material';
import Card from '@mui/material/Card';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import * as Styled from './styled';

import Input from '@/components/common/Input/Input';

function CreateTrip() {
  const [selectedValues, setSelectedValues] = useState([]);
  const [days, setDays] = useState([{ id: 1, inputFields: Array(3).fill('') }]);
  const [dayCount, setDayCount] = useState(1);
  const handleChange = (event: any) => {
    setSelectedValues(event.target.value);
  };

  const handleAddDay = () => {
    setDayCount(dayCount + 1);
  };
  const handleInputChange = (dayId: any, inputIndex: any, value: any) => {
    const updatedDays = [...days];
    updatedDays[dayId - 1].inputFields[inputIndex] = value;
    setDays(updatedDays);
  };

  return (
    <Styled.Coniainer>
      <Card style={{ width: '70%', height: 'auto' }}>
        <CardContent>
          <Styled.CardHeader>나의 여행패키지 등록</Styled.CardHeader>
          <TripPackage />

          {/* {Array.from({ length: dayCount }).map((_, index) => (
            <Styled.TripWrapper key={index}>
              <Styled.Day>{`${index + 1}일차`}</Styled.Day>

              <Input
                variant="outlined"
                label="여행설명"
                width="26rem"
                required
                id="packageTitle"
              />
              <Input
                variant="outlined"
                label="여행장소"
                width="26rem"
                required
                id="packageTitle"
              />
            </Styled.TripWrapper>
          ))} */}

          {/* <Button variant="outlined" onClick={handleAddDay}>
            + 여행 등록
          </Button> */}
        </CardContent>
      </Card>
    </Styled.Coniainer>
  );
}

export default CreateTrip;
