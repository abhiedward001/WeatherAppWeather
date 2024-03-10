import React from 'react'
import { UilSearchAlt } from '@iconscout/react-unicons'
import { UilUserLocation } from '@iconscout/react-unicons'
import { useState } from 'react';
import { fetchWeatherData } from '../Utils/apiService'
import { apiCall } from '../Utils/FetchData';
import { useDispatch,useSelector } from 'react-redux';
import { updateCity, updateData,updateUnit } from '../Store/weatherSlice';

function SearchCity() {

    const dispatch = useDispatch();
  
    const handleLocationClick = async() => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(async (position) => {
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;
            let qryInput=`${lat},${lon}`;
            const apiUrl = fetchWeatherData('realtime', { location:qryInput ,units:"metric"});
            console.log(apiUrl);
            const newWeatherData = await apiCall(apiUrl);
            // newWeatherData.
            dispatch(updateData(newWeatherData));
            dispatch(updateUnit("metric"));
            dispatch(updateCity(qryInput));
          });
        }
      };
    // Create a state variable for input of searchbar
    const [inputCity, setInputCity] = useState('');


    //Callback function used for handling while input state changes
    const inputChangeHandler = (event) => {
        setInputCity(event.target.value);
        // console.log(inputCity);
    }

    const cityDataHandler = async(input,unit) => {
        // console.log(input)
        const apiUrl = fetchWeatherData('realtime', { location:input ,units:unit});
        console.log(apiUrl);
        const newWeatherData = await apiCall(apiUrl);
        dispatch(updateData(newWeatherData));
        dispatch(updateUnit(unit));
        dispatch(updateCity(input));
        setInputCity('');
    }


    return (
        <div className='flex flex-row justify-center my-5'>
            <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
                <input
                    type='text'
                    value={inputCity}
                    placeholder='Enter the city'
                    className='text-xl font-medium p-2 w-full shadow-lg focus:outline-none capitalize placeholder:uppercase rounded-md'
                    onChange={inputChangeHandler}
                >
                </input>
                <button onClick={() => cityDataHandler(inputCity,"metric")}><UilSearchAlt size={25} className='text-white cursor-pointer transform ease-out hover:scale-125'></UilSearchAlt></button>
                <button onClick={handleLocationClick}><UilUserLocation size={25} className='text-white cursor-pointer transform ease-out hover:scale-125'></UilUserLocation></button>
            </div>
            <div className='flex flex-row w-1/4 items-center justify-center'>
                <button className='text-white text-xl font-medium' onClick={() => cityDataHandler(inputCity,"metric")}>°C</button>
                <p className='text-white mx-2'>|</p>
                <button className='text-white text-xl font-medium' onClick={() => cityDataHandler(inputCity,"imperial")}>°F</button>
            </div>

        </div>
    )
}

export default SearchCity;