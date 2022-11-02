import React, { useState } from 'react';
import { useEffect } from 'react';
import {
	fetchDailyWeatherData,
	fetchWeatherData,
	searchLocation,
} from './apis/api';
import Header from './components/Header';
import WeatherGrid from './components/WeatherGrid';

const App = () => {
	const [location, setLocation] = useState('');
	const [searchTerm, setSearchTerm] = useState('');
	const [weatherData, setWeatherData] = useState('');
	const [dailyWeatherData, setDailyWeatherData] = useState('');
	const [latitude, setLatitude] = useState(0);
	const [longitude, setLongitude] = useState(0);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	const getPosition = () => {
		return new Promise((resolve, reject) => {
			navigator.geolocation.getCurrentPosition(resolve, reject);
		});
	};

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

	const getDailyWeatherData = async (lat, lon) => {
		try {
			setIsLoading(true);
			let response;

			if (lat && lon) {
				response = await fetchDailyWeatherData(lat, lon);
			}

			setDailyWeatherData(response.data);
		} catch (error) {
			setIsError(true);
			console.log(error);
		}
	};

	useEffect(() => {
		const timer = setTimeout(() => {
			if (searchTerm && searchTerm.length > 0) {
				getLocation(searchTerm);
			} else {
				getPosition()
					.then((position) => {
						console.log(position);
						setLatitude(position.coords.latitude);
						setLongitude(position.coords.longitude);
					})
					.catch((error) => {
						console.log(error.message);
					});
			}
		});

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
		}, 300);

		return () => {
			clearTimeout(timer);
		};
	}, [latitude, location, longitude]);

	useEffect(() => {
		const timer = setTimeout(() => {
			if (latitude && longitude) {
				getWeatherData(latitude, longitude);
				getDailyWeatherData(latitude, longitude);
			}
		}, 300);

		return () => {
			clearTimeout(timer);
		};
	}, [latitude, longitude]);

	console.log(location);
	console.log(weatherData);
	console.log(dailyWeatherData);
	return (
		<>
			<Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
			<main className="main">
				<div className="main-content container">
					<WeatherGrid
						weatherData={weatherData}
						dailyWeatherData={dailyWeatherData}
						latitude={latitude}
						longitude={longitude}
					/>
				</div>
			</main>
		</>
	);
};

export default App;
