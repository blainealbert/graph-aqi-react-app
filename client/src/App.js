import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Form from './components/Form';
import CityInfo from './components/CityInfo';
import Aqigraph from './components/Aqigraph';
import { useState } from 'react';
import './App.css';

function App() {
  const [dailyForecast, setDailyForecast] = useState(null);

  const [cityName, setCityName] = useState('');
  const [currentAQI, setCurrentAQI] = useState(null);
  const [geoLocation, setGeoLocation] = useState(null);
  const [isInfoAvailable, setIsInfoAvailable] = useState(null);
  

  let handleFeedUpdate = (data) => {
    //set city info state
    if(data !== null){
      setCurrentAQI(data.aqi);
      setCityName(data.city.name);
      setGeoLocation(data.city.geo);
      //set daily forecast state
      setDailyForecast(data.forecast.daily);
    } else{
      setCurrentAQI(null);
      setCityName(null);
      setGeoLocation(null);
      //set daily forecast state
      setDailyForecast(null);
    }
  };
  
  return (
    <div className="App">
      <Navbar />
      <Form handleFeedUpdate={handleFeedUpdate} isInfoAvailable={isInfoAvailable} setIsInfoAvailable={setIsInfoAvailable}/>

      <CityInfo cityName={cityName} currentAQI={currentAQI} geoLocation={geoLocation}/>
      <Aqigraph dailyForecast={dailyForecast}/>
      <Footer />
    </div>
  );
}

export default App;
