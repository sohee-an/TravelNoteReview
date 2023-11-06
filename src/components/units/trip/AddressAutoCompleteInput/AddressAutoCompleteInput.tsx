import React, { memo } from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import Input from '@components/common/Input/Input';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import * as Styled from './styled';

type Props = {
  address: any;
  setAddress: any;
  onSelect: any;
};

function AddressAutocompleteInput({ address, setAddress, onSelect }: Props) {
  console.log('value', address);
  const handleSelect = async (value: any) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddress(value);
    onSelect(latLng);
  };

  return (
    <PlacesAutocomplete
      value={address}
      onChange={setAddress}
      onSelect={handleSelect}
    >
      {({
        getInputProps,
        suggestions,
        getSuggestionItemProps,
        loading,
      }: any) => (
        <div>
          <input
            style={{
              width: '20rem',
              height: '3rem',
              border: '1px solid gray',
              padding: '1rem',
            }}
            {...getInputProps({
              placeholder: '주소를 입력해주세요',
              className: 'form-control',
            })}
          />
          <div>
            {loading && <div>Loading...</div>}
            {suggestions.map((suggestion: any) => (
              <Styled.AddressItem {...getSuggestionItemProps(suggestion)}>
                <FmdGoodIcon /> {suggestion.description}
              </Styled.AddressItem>
            ))}
          </div>
        </div>
      )}
    </PlacesAutocomplete>
  );
}

export default memo(AddressAutocompleteInput);
