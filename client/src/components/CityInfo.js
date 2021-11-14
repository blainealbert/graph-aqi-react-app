import {useState} from 'react';

function CityInfo(props) {
    // const [c]

    return (
    <>
        {props.cityName && props.geoLocation && props.currentAQI &&
            <div className="city-info card">
                <h2>Location</h2>
                <p>Name: {props.cityName}</p>
                <p> Latitude: {props.geoLocation[0]}, Longitude: {props.geoLocation[1]}</p>
                <p>Current AQI: {props.currentAQI}</p>
            </div>
        }
    </>
  );
   
}
export default CityInfo;