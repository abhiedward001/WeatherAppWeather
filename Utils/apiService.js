const apiKey1="HgSU3cgzccwy5SiekhpNAok3ky0SPKAl";
const apiKey2="M7KL2h89slV9ucaznKAUmV3Xh5mpH04G";
const apiKey3="eKrOywm09MPqZMh9R8zAQwsMjPSQQuX8"
const baseUrl='https://api.tomorrow.io/v4/weather';

export const fetchWeatherData=(information,searchParams)=>{
    const newUrl=new URL(baseUrl + "/" + information );
    newUrl.search=new URLSearchParams({...searchParams,apikey:apiKey2});
    console.log(newUrl.href);
    return newUrl.href;
}
