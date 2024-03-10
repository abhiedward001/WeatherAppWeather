import React from 'react'
import { UilCloudSun } from '@iconscout/react-unicons';

function Forecast({title}) {
    return (
        <div>
            <div className='flex items-center justify-start mt-6'>
                <p className='text-white font-medium text-xl'>{title}</p>
            </div>
            <hr className='my-1'></hr>

            <div className='flex flex-row items-center justify-between text-white'>
                <div className='flex- flex-col items-center justify-center'>
                    <p>2:00 pm</p>
                    <UilCloudSun size={25} className='text-orange-400'></UilCloudSun>
                    <p>19°</p>
                </div>
                <div className='flex- flex-col items-center justify-center'>
                    <p>2:00 pm</p>
                    <UilCloudSun size={25} className='text-orange-400'></UilCloudSun>
                    <p>19°</p>
                </div>
                <div className='flex- flex-col items-center justify-center'>
                    <p>2:00 pm</p>
                    <UilCloudSun size={25} className='text-orange-400'></UilCloudSun>
                    <p>19°</p>
                </div>
                <div className='flex- flex-col items-center justify-center'>
                    <p>2:00 pm</p>
                    <UilCloudSun size={25} className='text-orange-400'></UilCloudSun>
                    <p>19°</p>
                </div>
                <div className='flex- flex-col items-center justify-center'>
                    <p>2:00 pm</p>
                    <UilCloudSun size={25} className='text-orange-400'></UilCloudSun>
                    <p>19°</p>
                </div>
            </div>
        </div>
    )
}

export default Forecast