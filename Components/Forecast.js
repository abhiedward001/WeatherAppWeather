import React from 'react'
import {
    UilTemperature,
    UilTear,
    UilWind,
    UilSun,
    UilSunset,
    UilArrowUp,
    UilArrowDown,
    UilBrightness,
    UilEye
} from '@iconscout/react-unicons';
import { useSelector } from 'react-redux';

function Forecast(props) {
    const units = useSelector(store => store.weather.units);
    let title = props.title;
    let data = props.data;

    function extractTimeWithDay(timestamp) {
        const date = new Date(timestamp);
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const dayName = days[date.getDay()];
        let hours = date.getHours();
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // Handle midnight (0 hours)
    
        return `${dayName}, ${hours}:${minutes}:${seconds} ${ampm}`;
    }



    return (
        <div>
            <div className='flex items-center justify-start mt-6'>
                <p className='text-white font-medium text-xl'>{title}</p>
            </div>
            <hr className='my-1'></hr>

            <div className='flex flex-row items-center justify-between text-white'>
                {data.map((eachData, index) => <div className='flex- flex-col items-center ' key={index}>
                    <span className='flex items-center  my-2'>
                        <p>{` ${extractTimeWithDay(eachData.time)}`}</p>
                    </span>

                    <span className='flex items-center  my-2'>
                        <UilTemperature size={15} className='mr-1'></UilTemperature>
                        <p>{eachData.temperature || eachData.temperatureAvg}{(units === "metric") ? ' °C' : ' °F'}</p>
                    </span>

                    <span className='flex items-center  my-2'>
                        <UilEye size={15} className='mr-1'></UilEye>
                        <p>{`${eachData.visibility || eachData.visibilityAvg} ${(units === "metric") ? 'km' : 'mi'}`}</p>
                    </span>


                    <span className='flex items-center  my-2'>
                        <UilWind size={15} className='mr-1'></UilWind>
                        <p className=''>{`${eachData.windSpeed || eachData.windSpeedAvg} ${(units === "metric") ? 'm/s' : 'mph'}`}</p>
                    </span>

                </div>)}

            </div>
        </div>
    )
}

export default Forecast