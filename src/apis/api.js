import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;

export const searchLocation = async (searchTerm) => {
	return await axios.get(
		`http://api.openweathermap.org/geo/1.0/direct?q=${searchTerm}&appid=${API_KEY}`,
	);
};

export const fetchWeatherData = async (lat, lon) => {
	return await axios.get(
		`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`,
	);
};
