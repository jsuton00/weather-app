import React from 'react';
import WeatherCard from './WeatherCard';
import WeatherDaily from './WeatherDaily';
import WeatherMap from './WeatherMap';

const WeatherGrid = (props) => {
	const { weatherData, dailyWeatherData, latitude, longitude } = props;
	return (
		<div className="weather-grid">
			<div className="weather-grid-section weather-card-section">
				<WeatherCard weatherData={weatherData} />
			</div>
			<div className="weather-grid-section weather-map-section">
				{latitude && longitude && (
					<WeatherMap
						latitude={latitude}
						longitude={longitude}
						zoomLevel={15}
					/>
				)}
			</div>
			<div className="weather-grid-section weather-daily-section">
				<h5 className="weather-daily-section-heading">Daily Weather</h5>
				{dailyWeatherData && (
					<WeatherDaily dailyWeatherData={dailyWeatherData} />
				)}
			</div>
		</div>
	);
};

export default WeatherGrid;
