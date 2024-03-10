import React from 'react'
import { useSelector } from 'react-redux';
function CurrentTimeDate() {
  const weatherData = useSelector(store => store.weather.data);
  console.log(weatherData);
  return (
    <div>
        <div className='flex items-center justify-center my-8'>
            <p className='text-white text-lg font-light'>Tuesday,31 March 2024 | 6:00 pm</p>
        </div>
        <div className='flex items-center flex-wrap justify-center my-8'>
           <p className='text-white text-2xl font-semibold'>{weatherData?.cityName}</p>
        </div>
    </div>
  )
}

export default CurrentTimeDate