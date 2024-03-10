import { createSlice } from '@reduxjs/toolkit';

const weatherSlice = createSlice({
	name: 'weather',
	initialState: {
		data: {
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
		},
		units: "metric",
		city: "bangalore",
		forecast: [
			[
				{
					"time": "2024-03-10T14:05:00Z",
					"temperature": 30.13,
					"windSpeed": 3.5,
					"visibility": 16
				},
				{
					"time": "2024-03-10T14:06:00Z",
					"temperature": 30.08,
					"windSpeed": 3.5,
					"visibility": 16
				},
				{
					"time": "2024-03-10T14:07:00Z",
					"temperature": 30.03,
					"windSpeed": 3.51,
					"visibility": 16
				},
				{
					"time": "2024-03-10T14:08:00Z",
					"temperature": 29.98,
					"windSpeed": 3.51,
					"visibility": 16
				},
				{
					"time": "2024-03-10T14:09:00Z",
					"temperature": 29.92,
					"windSpeed": 3.51,
					"visibility": 16
				}
			],
			[
				{
					"time": "2024-03-10T15:00:00Z",
					"temperature": 27.22,
					"windSpeed": 3.61,
					"visibility": 16
				},
				{
					"time": "2024-03-10T16:00:00Z",
					"temperature": 26.43,
					"windSpeed": 5.02,
					"visibility": 16
				},
				{
					"time": "2024-03-10T17:00:00Z",
					"temperature": 24.95,
					"windSpeed": 5.64,
					"visibility": 16
				},
				{
					"time": "2024-03-10T18:00:00Z",
					"temperature": 24.08,
					"windSpeed": 4.87,
					"visibility": 16
				},
				{
					"time": "2024-03-10T19:00:00Z",
					"temperature": 23.45,
					"windSpeed": 4.28,
					"visibility": 16
				}
			],
			[
				{
					"time": "2024-03-11T00:30:00Z",
					"temperatureAvg": 26.78,
					"windSpeedAvg": 3.47,
					"visibilityAvg": 16,
					"sunriseTime": "2024-03-11T00:59:00Z",
					"sunsetTime": "2024-03-11T12:59:00Z"
				},
				{
					"time": "2024-03-12T00:30:00Z",
					"temperatureAvg": 27.1,
					"windSpeedAvg": 3,
					"visibilityAvg": 16,
					"sunriseTime": "2024-03-12T00:59:00Z",
					"sunsetTime": "2024-03-12T12:59:00Z"
				},
				{
					"time": "2024-03-13T00:30:00Z",
					"temperatureAvg": 28.35,
					"windSpeedAvg": 2.73,
					"visibilityAvg": 17.86,
					"sunriseTime": "2024-03-13T00:58:00Z",
					"sunsetTime": "2024-03-13T12:59:00Z"
				},
				{
					"time": "2024-03-14T00:30:00Z",
					"temperatureAvg": 30.11,
					"windSpeedAvg": 2.93,
					"visibilityAvg": 24.14,
					"sunriseTime": "2024-03-14T00:57:00Z",
					"sunsetTime": "2024-03-14T13:00:00Z"
				},
				{
					"time": "2024-03-15T00:30:00Z",
					"temperatureAvg": 31.58,
					"windSpeedAvg": 2.45,
					"visibilityAvg": 24.14,
					"sunriseTime": "2024-03-15T00:57:00Z",
					"sunsetTime": "2024-03-15T13:00:00Z"
				}
			]
		]
	},
	reducers: {
		updateData(state, action) {
			state.data = action.payload;
		},
		updateUnit(state, action) {
			state.units = action.payload;
		},
		updateCity(state, action) {
			state.city = action.payload;
		},
		updateForecast(state,action){
			state.forecast=action.payload;
		}
	},
});

export const { updateData, updateUnit, updateCity,updateForecast } = weatherSlice.actions;

export default weatherSlice.reducer;
