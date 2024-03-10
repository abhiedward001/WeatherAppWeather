import {codeConfig} from '../Utils/weatherCodeConfig';

export const apiCall = async (api) => {
    const data = await fetch(api);
    const jsonData = await data.json();
    const dataAccumated={...jsonData.data.values,latitude:jsonData.location.lat,longitude:jsonData.location.lon,cityName:jsonData.location.name};
    
    codeConfig.map(codeData=>{
        for (const key in codeData) {
            if(key==dataAccumated.weatherCode){
                // console.log(`${key}: ${codeData[key]}`);
                dataAccumated.weatherCode=codeData[key];
                break;
            }
          }
    })
    console.log(dataAccumated);
    return dataAccumated;
};
