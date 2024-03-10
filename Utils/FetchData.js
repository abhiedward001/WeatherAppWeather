import { codeConfig } from '../Utils/weatherCodeConfig';

export const apiCall = async (api) => {
    try {
        const data = await fetch(api);
        if (!data.ok) {
            throw new Error('Failed to fetch data due to API rate limit. Try after sometime.');
        }
        
        const jsonData = await data.json();
        const dataAccumulated = { ...jsonData.data.values, latitude: jsonData.location.lat, longitude: jsonData.location.lon, cityName: jsonData.location.name };

        codeConfig.forEach(codeData => {
            for (const key in codeData) {
                if (key == dataAccumulated.weatherCode) {
                    dataAccumulated.weatherCode = codeData[key];
                    break;
                }
            }
        });

        console.log(dataAccumulated);
        return dataAccumulated;
    } catch (error) {
        alert(`Error:- ${error.message} `);
        return { error: error.message }; // Returning error message
    }
};
