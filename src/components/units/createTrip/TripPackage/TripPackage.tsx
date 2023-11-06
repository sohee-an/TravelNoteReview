import React from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '@components/common/Input/Input';
import ShareSelect from '@components/common/ShareSelect/ShareSelect';
import { Button, FormControlLabel, Switch } from '@material-ui/core';
import * as Styled from './styled';

function TripPackage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/createDetailTrip/1s');
  };
  return (
    <div>
      <Styled.PackageWrapper>
        <Input
          variant="outlined"
          label="여행패키지 제목"
          width="26rem"
          required
          id="packageTitle"
        />
        <Input
          variant="outlined"
          label="여행패키지 설명"
          width="26rem"
          required
          id="packageTitle"
        />

        <ShareSelect
          label="여행장소"
          items={[
            { label: 'Oliver Hansen', value: 'korea' },
            { label: 'Van Henry', value: '광주' },
          ]}
        />
        <Input
          variant="outlined"
          label="여행패키지 날짜"
          width="26rem"
          required
          id="packageTitle"
        />
        <FormControlLabel
          value="public"
          control={<Switch color="primary" />}
          label="공개여부"
          labelPlacement="start"
        />
      </Styled.PackageWrapper>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Button variant="outlined" onClick={handleClick}>
          나의 여행 패키지 등록
        </Button>
      </div>
    </div>
  );
}

export default TripPackage;
