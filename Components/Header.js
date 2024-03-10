import React from 'react'
import { fetchWeatherData } from '../Utils/apiService';
import { apiCall } from '../Utils/FetchData';
import { useDispatch } from 'react-redux';
import { updateCity, updateData,updateUnit} from '../Store/weatherSlice';

function Header() {
    const dispatch = useDispatch();

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
    const cityDataHandler = async(input,unit) => {
        // console.log(input)
        const apiUrl = fetchWeatherData('realtime', { location:input ,units:"metric"});
        console.log(apiUrl);
        const newWeatherData = await apiCall(apiUrl);
        dispatch(updateData(newWeatherData));
        dispatch(updateUnit("metric"));
        dispatch(updateCity(input));
    }
    return (
        
        <>
        <div className='flex items-center justify-around my-6'>
            {topCities.map((eachCity)=><button  key={eachCity.id}className='text-white text-lg font-medium' onClick={()=>cityDataHandler(eachCity.name)}>{eachCity.name}</button>)}
        </div>
        </>
    )
}

export default Header;