import React from 'react';
import WeatherCard from './WeatherCard';

const WeatherGrid = (props) => {
	const { weatherData } = props;
	return (
		<div className="weather-grid">
			<div className="weather-grid-section weather-card-section">
				<WeatherCard weatherData={weatherData} />
			</div>
			<div className="weather-grid-section weather-map-section">
				Weather Map
			</div>
			<div className="weather-grid-section weather-hourly-section">
				Hourly Weather forecast
			</div>
			<div className="weather-grid-section weather-daily-section">
				Weather daily forecast
			</div>
		</div>
	);
};

export default WeatherGrid;
