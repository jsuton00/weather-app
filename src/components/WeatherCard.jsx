import React from 'react';
import moment from 'moment/moment';
import { degToCompass } from '../utils/degToCompass';

const WeatherCard = (props) => {
	const { weatherData } = props;

	return (
		<>
			{weatherData && (
				<div className="weather-card card">
					<div className="weather-card-header card-header">
						<p className="weather-timestamp">
							{`${moment(new Date(weatherData.dt * 1000)).format(
								'Do MMMM YYYY h:mm a',
							)}`}
						</p>
						<h5 className="weather-card-location">{`${weatherData.name}, ${weatherData.sys.country}`}</h5>
					</div>
					<div className="weather-card-icon card-img-top">
						<img
							src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
							alt={weatherData.weather[0].main}
							className="weather-card-icon-image"
						/>
						<p className="weather-temperature">
							{`${weatherData.main.temp}°C`}
						</p>
					</div>
					<div className="weather-card-body card-body">
						<p className="weather-card-text weather-conditions">
							{weatherData.main.feels_like && (
								<span className="weather-conditions-real-feel">
									Feels like {weatherData.main.feels_like}°C
								</span>
							)}
							{weatherData.weather[0].description && (
								<span className="weather-conditions-description">
									{weatherData.weather[0].description}
								</span>
							)}
						</p>
					</div>
					<div className="weather-card-footer card-footer">
						<div className="weather-card-left-column">
							{weatherData.wind && (
								<p className="weather-wind">{`${
									weatherData.wind.speed
								}m/s ${degToCompass(weatherData.wind.deg)}`}</p>
							)}
							{weatherData.main.humidity && (
								<p className="weather-humidity">{`${weatherData.main.humidity}%`}</p>
							)}
							{weatherData.main.temp_min && (
								<p className="weather-temp-min">{`${weatherData.main.temp_min}°C`}</p>
							)}
						</div>
						<div className="weather-card-right-column">
							{weatherData.main.pressure && (
								<p className="weather-pressure">{`${weatherData.main.pressure} hPa`}</p>
							)}
							<p className="weather-uv">UV: 0</p>
							{weatherData.visibility && (
								<p className="weather-visibility">{`${
									weatherData.visibility > 1000
										? Math.round(weatherData.visibility / 1000).toFixed(1)
										: Math.round(weatherData.visibility / 1000).toFixed(2)
								} km`}</p>
							)}
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default WeatherCard;
