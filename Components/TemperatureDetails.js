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
            <div className='flex items-center justify-center my-4 py-2 text-yellow-400'>
                <p className='text-xl'>{weatherData.weatherCode}</p>
            </div>

            <div className='flex flex-row items-center justify-between my-4 py-2'>
                <UilCircle size={25} className='text-yellow-500 bg-yellow-500 rounded-full'></UilCircle>
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
