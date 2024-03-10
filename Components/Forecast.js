import React from 'react'
import {
    UilTemperature,
    UilWind,
    UilEye
} from '@iconscout/react-unicons';
import { useSelector } from 'react-redux';
import {extractTimeWithDay} from "../Utils/extractTimeWithDay"
function Forecast(props) {
    const units = useSelector(store => store.weather.units);
    let title = props.title;
    let data = props.data;

    return (
        <div>
            <div className='flex items-center justify-start mt-6'>
                <p className='text-white font-medium text-2xl'>{title}</p>
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