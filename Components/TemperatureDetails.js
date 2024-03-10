import React from 'react';
import { useSelector } from 'react-redux';
import { UilCircle, UilTemperature, UilTear, UilWind, UilBrightness, UilEye, UilRaindropsAlt, UilClouds, UilCompressV } from '@iconscout/react-unicons';
import Forecast from './Forecast';

function TemperatureDetails() {
    const weatherData = useSelector(store => store.weather.data);
    const units = useSelector(store => store.weather.units);
    const foreCastData = useSelector(store => store.weather.forecast);

    //Making a generic componet for all weather details as a wrapper
    const WeatherDetail = ({ icon, label, value }) => (
        <span className='flex font-light  items-center'>
            {icon}
            <p className='font-light'>
                {label}: <span className='font-medium ml-2'>{value}</span>
            </p>
        </span>
    );

    return (
        <div>
            <div className='flex items-center justify-center my-4 py-2 text-2xl text-gray-700 font-semibold'>
                <p className='flex items-center justify-center'>{weatherData.weatherCode}</p>
            </div>

            <div className='flex flex-row items-center justify-between my-4 py-2'>
               <span className='flex items-center justify-between'>
               <UilCircle size={40} className='text-[#e86211] bg-[#e86211] rounded-full mx-1'></UilCircle>
               <UilClouds size={60} className= 'text-blue-400 mx-1'></UilClouds>
               <UilWind size={40} className= 'mx-1'></UilWind>
                </span> 
                <p className='text-5xl text-white'>{weatherData.temperature} °{(units === "metric") ? 'C' : 'F'}</p>
                <div className='flex flex-col space-y-2'>
                    <WeatherDetail
                        icon={<UilTemperature size={18} className='mr-1' />}
                        label="Temp"
                        value={`${weatherData.temperature}° ${(units === "metric") ? 'C' : 'F'}`}
                    />
                    <WeatherDetail
                        icon={<UilTear size={18} className='mr-1' />}
                        label="Humidity"
                        value={`${weatherData.humidity} %`}
                    />
                    <WeatherDetail
                        icon={<UilWind size={18} className='mr-1' />}
                        label="Wind Speed"
                        value={`${weatherData.windSpeed} ${(units === "metric") ? 'm/s' : 'mph'}`}
                    />
                    <WeatherDetail
                        icon={<UilBrightness size={18} className='mr-1' />}
                        label="UvIndex"
                        value={weatherData.uvIndex}
                    />
                    <WeatherDetail
                        icon={<UilEye size={18} className='mr-1' />}
                        label="Visibility"
                        value={`${weatherData.visibility} ${(units === "metric") ? 'km' : 'mi'}`}
                    />
                </div>
            </div>

            <div className='flex flex-row items-center justify-center space-x-5 text-white text-sm py-3'>
                <WeatherDetail
                    icon={<UilRaindropsAlt size={25} />}
                    label="dewPoint"
                    value={weatherData.dewPoint}
                />
                <span className='ml-1'>|</span>
                <WeatherDetail
                    icon={<UilWind size={25} />}
                    label="windDirection"
                    value={weatherData.windDirection}
                />
                <span className='ml-1'>|</span>
                <WeatherDetail
                    icon={<UilClouds size={25} />}
                    label="cloudCover"
                    value={weatherData.cloudCover}
                />
                <span className='ml-1'>|</span>
                <WeatherDetail
                    icon={<UilCompressV size={25} />}
                    label="pressureSurfaceLevel"
                    value={weatherData.pressureSurfaceLevel}
                />
            </div>

            {foreCastData.map((data, index) => (
                <Forecast key={index} title={index === 0 ? "Minute Forecast" : (index === 1 ? "Hourly Forecast" : "Daily Forecast")} data={data} />
            ))}
        </div>
    );
}

export default TemperatureDetails;
