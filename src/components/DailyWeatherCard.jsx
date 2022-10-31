import React from 'react';
import moment from 'moment';

const DailyWeatherCard = (props) => {
	const {
		dailyWeatherDate,
		dailyWeatherIcon,
		dailyWeatherTemp,
		dailyWeatherRealTemp,
		dailyWeatherDescription,
	} = props;
	return (
		<div className="daily-weather-card card">
			<div className="daily-weather-card-header card-header">
				<p className="daily-weather-date card-text">{`${moment(
					new Date(dailyWeatherDate * 1000),
				).format('Do MMM YY')}`}</p>
			</div>
			<div className="daily-weather-icon card-img-top">
				<img
					src={`http://openweathermap.org/img/wn/${dailyWeatherIcon}.png`}
					alt={dailyWeatherDescription}
					className="daily-weather-icon-image"
				/>
			</div>
			<div className="daily-weather-card-body card-body">
				<h5 className="daily-weather-temp card-title">{`${dailyWeatherTemp}°C`}</h5>
				<p className="daily-weather-real-temp card-text">
					Real feel: {`${dailyWeatherRealTemp}°C`}
				</p>
				<p className="daily-weather-description card-text">
					{dailyWeatherDescription}
				</p>
			</div>
			<div className="daily-weather-card-footer card-footer">
				<p className="daily-weather-time card-text">{`${moment(
					new Date(dailyWeatherDate * 1000),
				).format('h:mm a')}`}</p>
			</div>
		</div>
	);
};

export default DailyWeatherCard;
