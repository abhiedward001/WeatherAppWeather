import {configureStore} from '@reduxjs/toolkit';
import weatherReducer from '../Store/weatherSlice.js';

const appStore = configureStore({
	reducer: {
		weather: weatherReducer,
	},
});

export default appStore;
