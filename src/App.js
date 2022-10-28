import React, { useState } from 'react';
import { useEffect } from 'react';
import { fetchWeatherData, searchLocation } from './apis/api';
import Header from './components/Header';
import WeatherCard from './components/WeatherCard';
import WeatherGrid from './components/WeatherGrid';

const App = () => {
	const [location, setLocation] = useState('');
	const [searchTerm, setSearchTerm] = useState('split');
	const [weatherData, setWeatherData] = useState('');
	const [latitude, setLatitude] = useState(0);
	const [longitude, setLongitude] = useState(0);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	const getLocation = async (searchTerm) => {
		try {
			let response;

			if (searchTerm) {
				response = await searchLocation(searchTerm);
			}

			setLocation(response.data);
		} catch (err) {
			console.log(err);
		}
	};

	const getWeatherData = async (lat, lon) => {
		try {
			setIsLoading(true);
			let response;

			if (lat && lon) {
				response = await fetchWeatherData(lat, lon);
			}

			setWeatherData(response.data);
		} catch (error) {
			setIsError(true);
			console.log(error);
		}
	};

	useEffect(() => {
		const timer = setTimeout(() => {
			if (searchTerm) {
				getLocation(searchTerm);
			}
		}, 300);

		return () => {
			clearTimeout(timer);
		};
	}, [searchTerm]);

	useEffect(() => {
		const timer = setTimeout(() => {
			if (location) {
				setLatitude(location[0].lat);
				setLongitude(location[0].lon);
			}

			if (latitude && longitude) {
				getWeatherData(latitude, longitude);
			}
		}, 800);

		return () => {
			clearTimeout(timer);
		};
	}, [latitude, location, longitude]);

	useEffect(() => {
		const timer = setTimeout(() => {
			if (latitude && longitude) {
				getWeatherData(latitude, longitude);
			}
		}, 800);

		return () => {
			clearTimeout(timer);
		};
	}, [latitude, longitude]);

	console.log(location);
	console.log(latitude, longitude);
	console.log(weatherData);
	return (
		<>
			<Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
			<main className="main">
				<div className="main-content container">
					<WeatherGrid weatherData={weatherData} />
				</div>
			</main>
		</>
	);
};

export default App;
