import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UilSearchAlt, UilUserLocation } from '@iconscout/react-unicons';
import { fetchWeatherData } from '../Utils/apiService';
import { apiCall } from '../Utils/FetchData';
import { updateCity, updateData, updateUnit } from '../Store/weatherSlice';

function SearchCity() {
    const dispatch = useDispatch();
    const city = useSelector(store => store.weather.city);
    //Function for handling live location logic
    const handleLocationClick = async () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(async (position) => {
                const { latitude, longitude } = position.coords;
                const qryInput = `${latitude},${longitude}`;
                const apiUrl = fetchWeatherData('realtime', { location: qryInput, units: "metric" });
                const newWeatherData = await apiCall(apiUrl);
                dispatch(updateData(newWeatherData));
                dispatch(updateUnit("metric"));
                dispatch(updateCity(qryInput));
            });
        }
    };

    const [inputCity, setInputCity] = useState('');

    const inputChangeHandler = (event) => {
        setInputCity(event.target.value);
    }


    //function for celcius and farenheit toggle
    const cityDataHandler = async (input, unit) => {
        const apiUrl = fetchWeatherData('realtime', { location: input, units: unit });
        const newWeatherData = await apiCall(apiUrl);
        dispatch(updateData(newWeatherData));
        dispatch(updateUnit(unit));
        dispatch(updateCity(input));
        setInputCity('');
    }

    return (
        <div className='flex flex-row justify-center my-20'>
            <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
                <input
                    type='text'
                    value={inputCity}
                    placeholder='Enter the city'
                    className='text-xl font-medium p-2 w-full shadow-lg focus:outline-none capitalize placeholder:uppercase rounded-md'
                    onChange={inputChangeHandler}
                />
                <button onClick={() => cityDataHandler(inputCity, "metric")}><UilSearchAlt size={25} className='text-white cursor-pointer transform ease-out hover:scale-125' /></button>
                <button onClick={handleLocationClick}><UilUserLocation size={25} className='text-white cursor-pointer transform ease-out hover:scale-125' /></button>
            </div>
            <div className='flex flex-row w-1/4 items-center justify-center'>
                <button className='text-white text-xl font-medium' onClick={() => cityDataHandler(city, "metric")}>°C</button>
                <p className='text-white mx-2'>|</p>
                <button className='text-white text-xl font-medium' onClick={() => cityDataHandler(city, "imperial")}>°F</button>
            </div>
        </div>
    );
}

export default SearchCity;
