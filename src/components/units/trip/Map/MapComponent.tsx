import { useState, memo, useCallback } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import * as Styled from './styles';
import { Button } from '@material-ui/core';
import TimeLineTrip from './TimeLineTrip/TimeLineTrip';

const apiKey = 'AIzaSyCgG6a_ltkZe9Xn8_ReJ0anUN67MUQPX08';
const mapStyle: React.CSSProperties = {
  width: '100%',
  height: '30rem',
};

interface Location {
  name: string;
  location: google.maps.LatLngLiteral;
}

const locations: Location[] = [
  {
    name: 'Location 1',
    location: { lat: 40.712216, lng: -74.22655 },
  },
  {
    name: 'Location 2',
    location: { lat: 40.74, lng: -74.18 },
  },
];

function MapComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey,
  });
  const [timeLineState, setTimeLineState] = useState(false);

  const [map, setMap] = useState<google.maps.Map | null>(null);

  const onLoad = useCallback(function callback(map: google.maps.Map) {
    const bounds = new google.maps.LatLngBounds(
      new google.maps.LatLng(40.712216, -74.22655),
      new google.maps.LatLng(40.74, -74.18)
    );
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback() {
    setMap(null);
  }, []);

  const handleClick = () => {
    setTimeLineState((pre) => !pre);
  };

  return isLoaded ? (
    <Styled.Container>
      <Styled.TopWrapper>
        <Button variant="outlined" onClick={handleClick}>
          타임라인{' '}
          {timeLineState ? (
            <div style={{ color: '#FFA500' }}>ON</div>
          ) : (
            <div style={{ color: 'gray' }}>OFF</div>
          )}
        </Button>
      </Styled.TopWrapper>
      <Styled.BottomWrapper>
        {timeLineState ? (
          <TimeLineTrip />
        ) : (
          <GoogleMap
            mapContainerStyle={mapStyle}
            zoom={12}
            center={{ lat: 36.5, lng: 127.5 }}
            onLoad={onLoad}
            onUnmount={onUnmount}
          >
            {locations.map((item) => {
              return <Marker key={item.name} position={item.location} />;
            })}
          </GoogleMap>
        )}
      </Styled.BottomWrapper>
    </Styled.Container>
  ) : (
    <div>Loading Google Maps...</div>
  );
}

export default memo(MapComponent);
