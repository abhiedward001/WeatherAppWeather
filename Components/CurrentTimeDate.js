import React from 'react'
import { useSelector } from 'react-redux';
import useCurrentDateAndTime from "../CustomHooks/useCurrentDateAndTime";

function CurrentTimeDate() {
  const newdate = new Date();
  const updatedDateAndTime=useCurrentDateAndTime(newdate);
  const weatherData = useSelector(store => store.weather.data);
  
  return (
    <div>
        <div className='flex items-center justify-center my-8'>
            <p className='text-white text-lg font-light'>{updatedDateAndTime}</p>
        </div>
        <div className='flex items-center flex-wrap justify-center my-8'>
           <p className='text-white text-3xl font-semibold'>{(weatherData?.cityName===undefined)?"Your City":`${weatherData?.cityName}`}</p>
        </div>
    </div>
  )
}

export default CurrentTimeDate