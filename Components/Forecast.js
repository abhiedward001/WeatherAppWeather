import React from 'react'
import { UilCloudSun,UilClouds,UilCloudShowers } from '@iconscout/react-unicons';
import { useSelector } from 'react-redux';

function Forecast(props) {
    let title=props.title;
    let minuteData=props.minuteData;
    return (
        <div>
            <div className='flex items-center justify-start mt-6'>
                <p className='text-white font-medium text-xl'>{title}</p>
            </div>
            <hr className='my-1'></hr>

            <div className='flex flex-row items-center justify-between text-white'>
                <div className='flex- flex-col items-center justify-center'>
                    <p>2:00 pm</p>
                    <p>19°</p>
                </div>
            </div>
        </div>
    )
}

export default Forecast