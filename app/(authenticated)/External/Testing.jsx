import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const GooglePlacesInput = () => {
  return (
    <GooglePlacesAutocomplete
      placeholder='Search'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      query={{
        key: 'AIzaSyCXNV5E5xnGxDycQmLy2wHpUe7xyOGstdY',
        language: 'en',
        components: 'country:ng',
      }}
    />
  );
};

export default GooglePlacesInput;