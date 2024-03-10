import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchWeatherData } from '../Utils/apiService';
import { apiCall } from '../Utils/FetchData';
import { updateCity, updateData, updateUnit } from '../Store/weatherSlice';

function Header() {
    const dispatch = useDispatch();

    const topCities = [
        { id: 1, name: "Bangalore" },
        { id: 2, name: "Pune" },
        { id: 3, name: "Varanasi" },
        { id: 4, name: "Jaipur" },
        { id: 5, name: "Assam" }
    ];

    // function for making api call while clicking on header top cities
    const cityDataHandler = async (cityName) => {
        try {
            const apiUrl = fetchWeatherData('realtime', { location: cityName, units: "metric" });
            const newWeatherData = await apiCall(apiUrl);
            dispatch(updateData(newWeatherData));
            dispatch(updateUnit("metric"));
            dispatch(updateCity(cityName));
        } catch (error) {
            console.error("Error fetching weather data:", error);
            // Handle error , e.g., display error message to user
        }
    };

    return (
        <div className='flex items-center justify-around my-6'>
            {topCities.map(city => (
                <button key={city.id} className='text-white text-lg font-medium' onClick={() => cityDataHandler(city.name)}>
                    {city.name}
                </button>
            ))}
        </div>
    );
}

export default Header;
