import React from 'react'
import { UilCircle } from '@iconscout/react-unicons'
import { fetchWeatherData } from '../Utils/apiService'
import {apiCall} from '../Utils/FetchData';
import { useSelector } from 'react-redux';
import {
    UilTemperature,
    UilTear,
    UilWind,
    UilSun,
    UilSunset,
    UilArrowUp,
    UilArrowDown
} from "@iconscout/react-unicons";

import Forecast from './Forecast';

function TemperatureDetails() {
    
    // const apiUrl=fetchWeatherData('realtime',{location:"bangalore"});
    // apiCall(apiUrl);
    const weatherData = useSelector(store => store.weather.data);


    return (
        <div>
            <div className='flex items-center justify-center my-4 py-2 text-yellow-400'>
                <p className='text-xl'>{weatherData.weatherCode}</p>
            </div>

            <div className='flex flex-row items-center justify-between my-4 py-2'>

                <UilCircle size={25} className='text-yellow-500 bg-yellow-500 rounded-full'></UilCircle>
                <p className='text-5xl text-white'>{weatherData.temperature} °C</p>

                <div className='flex flex-col space-y-2'>

                    <div className='flex font-light text-sn items-center justify-center'>
                        <UilTemperature size={18} className='mr-1'></UilTemperature>
                        Real fell:
                        <span className='font-medium ml-1'>{weatherData.temperature}°</span>
                    </div>
                    <div className='flex font-light text-sn items-center justify-center'>
                        <UilTear size={18} className='mr-1'></UilTear>
                        Humidity:
                        <span className='font-medium ml-1'>{weatherData.humidity}</span>
                    </div>
                    <div className='flex font-light text-sn items-center justify-center'>
                        <UilWind size={18} className='mr-1'></UilWind>
                        Wind Speed:
                        <span className='font-medium ml-1'>{weatherData.windSpeed}</span>
                    </div>

                </div>

            </div>

            <div className='flex flex-row items-center justify-center space-x-5 text-white text-sm py-3'>
                <UilSun></UilSun>
                <p className='font-light'>
                    Sunrise:
                    <span className='font-medium ml-1'>5:50 AM</span>
                </p>
                <span className='ml-1'>|</span>

                <UilSunset></UilSunset>
                <p className='font-light'>
                    Sunset:
                    <span className='font-medium ml-1'>6:30 PM</span>
                </p>
                <span className='ml-1'>|</span>

                <UilSun></UilSun>
                <p className='font-light'>
                    <UilArrowUp></UilArrowUp>High:
                    <span className='font-medium ml-1'>21°</span>
                </p>
                <span className='ml-1'>|</span>

                <UilSun></UilSun>
                <p className='font-light'>
                    <UilArrowDown></UilArrowDown>Low:
                    <span className='font-medium ml-1'>17°</span>
                </p>
            </div>
            <Forecast title="Minute Forecast"></Forecast>
            <Forecast title="Hourly Forecast"></Forecast>
            <Forecast title="Daily Forecast"></Forecast>
        </div>
    )
}

export default TemperatureDetails