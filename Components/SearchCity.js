import React from 'react'
import { UilSearchAlt } from '@iconscout/react-unicons'
import { UilUserLocation } from '@iconscout/react-unicons'
import { useState } from 'react';
import { fetchWeatherData } from '../Utils/apiService'
import { apiCall } from '../Utils/FetchData';
import { useDispatch } from 'react-redux';
import { updateData } from '../Store/weatherSlice';

function SearchCity() {

    const dispatch = useDispatch();

    // Create a state variable for input of searchbar
    const [inputCity, setInputCity] = useState('');


    //Callback function used for handling while input state changes
    const inputChangeHandler = (event) => {
        setInputCity(event.target.value);
        // console.log(inputCity);
    }

    const cityDataHandler = async(input) => {
        // console.log(input)
        const apiUrl = fetchWeatherData('realtime', { location:input });
        const newWeatherData = await apiCall(apiUrl);
        dispatch(updateData(newWeatherData));
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
                <button onClick={() => cityDataHandler(inputCity)}><UilSearchAlt size={25} className='text-white cursor-pointer transform ease-out hover:scale-125'></UilSearchAlt></button>
                <UilUserLocation size={25} className='text-white cursor-pointer transform ease-out hover:scale-125'></UilUserLocation>
            </div>
            <div className='flex flex-row w-1/4 items-center justify-center'>
                <button className='text-white text-xl font-medium'>°C</button>
                <p className='text-white mx-2'>|</p>
                <button className='text-white text-xl font-medium'>°F</button>
            </div>

        </div>
    )
}

export default SearchCity;