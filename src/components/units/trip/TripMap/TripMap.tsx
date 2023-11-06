import { useState, memo, useCallback, useEffect } from 'react';
import { Button } from '@material-ui/core';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import * as Styled from './styles';

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

type Props = {
  location: any;
};

function TripMap({ location }: Props) {
  const [locationState, setLocationState] = useState({ lat: 0, lng: 0 });
  const [markerPosition, setMarkerPosition] = useState(null);
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey,
    libraries: ['places'],
  });

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

  // useEffect(() => {
  //   // Geocode the address when the component loads
  //   if (props.address) {
  //     const geocoder = new window.google.maps.Geocoder();
  //     geocoder.geocode({ address: props.address }, (results, status) => {
  //       if (status === 'OK' && results[0].geometry.location) {
  //         setLocation(results[0].geometry.location);
  //       }
  //     });
  //   }
  // }, [props.address]);

  return isLoaded ? (
    <Styled.Container>
      <GoogleMap
        mapContainerStyle={mapStyle}
        zoom={12}
        center={location || { lat: 36.5, lng: 127.5 }}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {/* {locations.map((item) => {
          return <Marker key={item.name} position={item.location} />;
        })} */}
        {location && <Marker position={location} />}
      </GoogleMap>
    </Styled.Container>
  ) : (
    <div>Loading Google Maps...</div>
  );
}

export default memo(TripMap);
