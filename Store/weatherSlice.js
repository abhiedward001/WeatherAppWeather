import {createSlice} from '@reduxjs/toolkit';

const weatherSlice = createSlice({
	name: 'weather',
	initialState: {
		data:{
			"cloudBase": 0.95,
			"cloudCeiling": null,
			"cloudCover": 49,
			"dewPoint": 21.38,
			"freezingRainIntensity": 0,
			"humidity": 65,
			"precipitationProbability": 0,
			"pressureSurfaceLevel": 914.66,
			"rainIntensity": 0,
			"sleetIntensity": 0,
			"snowIntensity": 0,
			"temperature": 30.81,
			"temperatureApparent": 35.71,
			"uvHealthConcern": 3,
			"uvIndex": 9,
			"visibility": 16,
			"weatherCode": "Partly Cloudy",
			"windDirection": 149,
			"windGust": 8.31,
			"windSpeed": 4.81,
			"latitude": 12.97679328918457,
			"longitude": 77.59008026123047,
			"cityName": "Bengaluru, Bangalore North, Bengaluru Urban District, Karnataka, India"
		} ,
	},
	reducers: {
		
		updateData(state, action) {
			state.data=action.payload;
		}
	},
});

export const {updateData} = weatherSlice.actions;

export default weatherSlice.reducer;
