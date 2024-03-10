import React from 'react'
import Header from './Header'
import SearchCity from './SearchCity';
import CurrentTimeDate from './CurrentTimeDate';
import TemperatureDetails from './TemperatureDetails';


function Home() {
  return (
    <div className='mx-auto w-8/12 mt-4 py-5 px-32  h-fit shadow-lg bg-gradient-to-br from-sky-400 to-blue-700 shadow-blue-300'>
    <Header></Header>
    <SearchCity></SearchCity>
    <CurrentTimeDate></CurrentTimeDate>
    <TemperatureDetails></TemperatureDetails>
  </div>
  )
}

export default Home;