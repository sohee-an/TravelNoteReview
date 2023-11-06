import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import Input from '@components/common/Input/Input';
import AddressAutoCompleteInput from '@components/units/trip/AddressAutoCompleteInput/AddressAutoCompleteInput';

import TripMap from '@components/units/trip/TripMap/TripMap';
import { Button, CardContent } from '@material-ui/core';
import Card from '@mui/material/Card';
import * as Styled from './styled';

function CreateDetailTrip() {
  const navigate = useNavigate();
  const [dayCount, setDayCount] = useState(2);
  const [address, setAddress] = useState('');
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [mapStates, setMapStates] = useState(Array(dayCount).fill(false));

  const handleClick = () => {
    navigate('/createDetailTrip/1s');
  };

  const handleClickMap = (index: number) => {
    setMapStates((prevStates) =>
      prevStates.map((state, i) => (i === index ? !state : state))
    );
  };

  return (
    <Styled.Coniainer>
      <Card style={{ width: '70%', height: 'auto' }}>
        <CardContent>
          <Styled.CardHeader>나의 여행패키지 </Styled.CardHeader>

          <Styled.CardTopWrapper>
            <div>여행제목 : 여행제목이다</div>
            <div>여행설명 : 여행설명이다</div>
            <div>여행날짜 : 여행날짜</div>
            <div>공개여부 : 공개</div>
          </Styled.CardTopWrapper>

          <Styled.PackageWrapper>
            {Array.from({ length: dayCount }).map((_, index) => (
              <Styled.TripWrapper key={index}>
                <Styled.Day>{`${index + 1}일차`}</Styled.Day>

                <Input
                  variant="outlined"
                  label="여행설명"
                  width="26rem"
                  required
                  id="packageTitle"
                />
                <Styled.AddressAutoInputWrapper>
                  <div style={{ flex: 1 }}>
                    <AddressAutoCompleteInput
                      address={address}
                      setAddress={setAddress}
                      onSelect={(location: any) =>
                        setSelectedLocation(location)
                      }
                    />
                  </div>

                  <div>
                    <Button
                      variant="outlined"
                      style={{ height: '100%' }}
                      onClick={() => handleClickMap(index)}
                    >
                      지도
                    </Button>
                  </div>
                </Styled.AddressAutoInputWrapper>
                {mapStates[index] && <TripMap location={selectedLocation} />}
              </Styled.TripWrapper>
            ))}
          </Styled.PackageWrapper>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Button variant="outlined" onClick={handleClick}>
              나의 여행 등록
            </Button>
          </div>
        </CardContent>
      </Card>
    </Styled.Coniainer>
  );
}

export default CreateDetailTrip;
