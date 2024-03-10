import {codeConfig} from '../Utils/weatherCodeConfig';

// This function is used for making API call for particular city and Accumulate all data in single js object
export const apiCall = async (api) => {
    const data = await fetch(api);
    const jsonData = await data.json();
    const dataAccumated={...jsonData.data.values,latitude:jsonData.location.lat,longitude:jsonData.location.lon,cityName:jsonData.location.name};
    
    codeConfig.map(codeData=>{
        for (const key in codeData) {
            if(key==dataAccumated.weatherCode){
                dataAccumated.weatherCode=codeData[key];
                break;
            }
          }
    });
    console.log(dataAccumated);
    return dataAccumated;
};
