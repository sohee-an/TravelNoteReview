import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Input from '@components/common/Input/Input';
import ShareSelect from '@components/common/ShareSelect/ShareSelect';
import TripFlatpickr from '@components/units/trip/TripFlatpickr/TripFlatpickr';
import { Button, FormControlLabel, Switch } from '@material-ui/core';
import L from 'lodash';
import { getInitialFormValues } from './functions';
import * as Styled from './styled';
import { getCreateTripSchema } from '@/validatrions/trip/createTripValidation';

type Props = {
  item?: any;
};

function TripPackage({ item }: Props) {
  const navigate = useNavigate();
  const {
    register,
    setValue,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: getCreateTripSchema() });

  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleClick = (values: any) => {
    console.log('value', values);
    // navigate('/createDetailTrip/1');
  };

  const handleDateChange = (dates: any) => {
    if (dates && dates.length > 0) {
      setSelectedDate(dates[0]);
    }
  };
  const handleChange = ({ name, value }: any) => {
    console.log('name', name);
    setValue(name, value, { shouldValidate: true });
  };

  const registerForm = () => {
    const initialFormValues = getInitialFormValues(item);

    L.flow([
      L.toPairs,
      (data) => {
        L.forEach(data, ([name, value]) => {
          if (L.isEmpty(item)) {
            register(name);
          }
          setValue(name, value);
        });
      },
    ])(initialFormValues);
  };

  const handleDisclosureChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.checked; // Switch 컴포넌트의 체크 여부 값

    setValue('disclosure', value);
    console.log('event', event.target.checked);
  };

  /**
   * useEffect
   */
  useEffect(registerForm, [item, register, setValue]);

  return (
    <div>
      <Styled.PackageWrapper>
        <Input
          variant="outlined"
          label="여행패키지 제목"
          width="26rem"
          required
          onChange={handleChange}
          id="title"
          name="title"
          value={getValues('title')}
        />
        <Input
          variant="outlined"
          label="여행패키지 설명"
          width="26rem"
          required
          onChange={handleChange}
          id="desc"
          name="desc"
          value={getValues('desc')}
        />

        <ShareSelect
          label="여행장소"
          name="tripArea"
          multiple
          value={getValues('tripArea') ? getValues('tripArea') : []}
          onChange={handleChange}
          items={[
            { label: 'Oliver Hansen', value: 'korea' },
            { label: 'Van Henry', value: 'korea2' },
          ]}
        />
        <TripFlatpickr
          label="여행날짜"
          name="tripDate"
          onChange={handleChange}
        />

        <FormControlLabel
          value="public"
          control={
            <Switch
              color="primary"
              value={getValues('disclosure')}
              onChange={handleDisclosureChange}
            />
          }
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
        <Button
          variant="outlined"
          type="submit"
          onClick={handleSubmit(handleClick)}
        >
          나의 여행 패키지 등록
        </Button>
      </div>
    </div>
  );
}

export default TripPackage;
