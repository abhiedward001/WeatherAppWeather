import React, { useEffect } from 'react';
import Header from './Header';
import SearchCity from './SearchCity';
import CurrentTimeDate from './CurrentTimeDate';
import TemperatureDetails from './TemperatureDetails';
import { fetchWeatherData } from '../Utils/apiService';
import { useDispatch } from 'react-redux';
import { updateForecast } from '../Store/weatherSlice';

function Home() {

  const dispatch=useDispatch();
  const fetchData = async () => {
    try {
      const apiUrl = fetchWeatherData('forecast', { location: 'bangalore', units: 'metric' });
      const data = await fetch(apiUrl);
      
      if (!data.ok) {
        throw new Error('Failed to fetch data due to API rate limit. Try after sometime.');
      }

      const jsonData = await data.json();
      // console.log(jsonData.timelines);
      const forCastData=[];
      let { daily, hourly, minutely } = jsonData.timelines;
      daily = daily.slice(1, 6).map((inst) => {
        return {
          time:inst.time,
          temperatureAvg:inst.values.temperatureAvg,
          windSpeedAvg:inst.values.windSpeedAvg,
          visibilityAvg:inst.values.visibilityAvg,
          sunriseTime:inst.values.sunriseTime,
          sunsetTime:inst.values.sunsetTime
        }
      });
      hourly = hourly.slice(1, 6).map((inst) => {
        return {
          time:inst.time,
          temperature:inst.values.temperature,
          windSpeed:inst.values.windSpeed,
          visibility:inst.values.visibility
        }
      });
      minutely = minutely.slice(1, 6).map((inst) => {
        return {
          time:inst.time,
          temperature:inst.values.temperature,
          windSpeed:inst.values.windSpeed,
          visibility:inst.values.visibility
        }
      });
      forCastData.push(minutely);
      forCastData.push(hourly);
      forCastData.push(daily);
      
      
      // console.log(forCastData);
      dispatch(updateForecast(forCastData));
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };
  
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='mx-auto w-8/12 my-10 py-5 px-32 h-fit shadow-lg bg-gradient-to-br from-yellow-400 to-blue-600 shadow-blue-300 rounded-lg'>
      <Header />
      <SearchCity />
      <CurrentTimeDate />
      <TemperatureDetails />
    </div>
  );
}

export default Home;
