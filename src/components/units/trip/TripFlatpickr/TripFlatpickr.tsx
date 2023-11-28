import { memo } from 'react';
import Flatpickr from 'react-flatpickr';
import dayjs from 'dayjs';
import { Korean } from 'flatpickr/dist/l10n/ko.js';
import 'flatpickr/dist/themes/material_green.css';

type Props = {
  label: string;
  name: string;
  invalid?: boolean;
  invalidMessage?: string;
  onChange: any;
};
function TripFlatpickr({
  label,
  name,
  invalid,
  invalidMessage,
  onChange,
}: Props) {
  const handleChange = ([start, end]: any) => {
    const startday =
      typeof start === 'undefined' ? '' : dayjs(start).format('YYYY-MM-DD');
    const endday =
      typeof end === 'undefined' ? '' : dayjs(end).format('YYYY-MM-DD');

    if (startday && endday) {
      onChange && onChange({ name: 'startday', value: startday });
      onChange && onChange({ name: 'endday', value: endday });
    }
  };
  return (
    <div style={{ width: '100px', height: '50px', backgroundColor: 'yellow' }}>
      {/* <span className="card-text col-4">{label}</span> */}
      <div>
        <Flatpickr
          // style={{ width: '100px', height: '500px' }}
          onChange={handleChange}
          // value={getValues(name)}

          options={{
            locale: Korean,
            altInput: true,
            altFormat: 'Y-m-d',
            dateFormat: 'Y F j',
            mode: 'range',
          }}
        />
        {!!invalid && (
          <span className="text-danger d-block invalid-feedback">
            {invalidMessage}
          </span>
        )}
      </div>
    </div>
  );
}
export default memo(TripFlatpickr);
