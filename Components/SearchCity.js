import React from 'react'
import { UilSearchAlt } from '@iconscout/react-unicons'
import { UilUserLocation } from '@iconscout/react-unicons'
function SearchCity() {

    return (
        <div className='flex flex-row justify-center my-5'>
            <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
                <input type='text'
                    placeholder='Enter the city'
                    className='text-xl font-medium p-2 w-full shadow-lg focus:outline-none capitalize placeholder:uppercase rounded-md'>

                </input>
                <UilSearchAlt size={25} className='text-white cursor-pointer transform ease-out hover:scale-125'></UilSearchAlt>
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