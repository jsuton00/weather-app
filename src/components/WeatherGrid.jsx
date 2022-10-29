import React from 'react';
import WeatherCard from './WeatherCard';
import WeatherMap from './WeatherMap';

const WeatherGrid = (props) => {
	const { weatherData, latitude, longitude, hourlyData } = props;
	return (
		<div className="weather-grid">
			<div className="weather-grid-section weather-card-section">
				<WeatherCard weatherData={weatherData} />
			</div>
			<div className="weather-grid-section weather-map-section">
				<WeatherMap latitude={latitude} longitude={longitude} />
			</div>
		</div>
	);
};

export default WeatherGrid;
