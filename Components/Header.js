import React from 'react'

function Header() {

    const topCities = [
        {
            id: 1,
            name: "Bangalore"
        },
        {
            id: 2,
            name: "Pune"
        },
        {
            id: 3,
            name: "Varanasi"
        },
        {
            id: 4,
            name: "Jaipur"
        },
        {
            id: 5,
            name: "Assam"
        }


    ]
    return (
        <>
        <div className='flex items-center justify-around my-6'>
            {topCities.map((eachCity)=><button  key={eachCity.id}className='text-white text-lg font-medium'>{eachCity.name}</button>)}
        </div>
        </>
    )
}

export default Header;