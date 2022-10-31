import React from 'react';
import Carousel from 'react-multi-carousel';
import { carouselResponsiveStyle } from '../utils/componentUtils';
import DailyWeatherCard from './DailyWeatherCard';

const WeatherDaily = (props) => {
	const { dailyWeatherData } = props;
	return (
		<Carousel
			responsive={carouselResponsiveStyle}
			containerClass="carousel-container"
			itemClass="carousel-item-padding-40-px"
			removeArrowOnDeviceType={['desktop', 'tablet', 'mobile']}
			className="weather-daily row"
		>
			{dailyWeatherData.list.length > 0 &&
				dailyWeatherData.list.map((data) => {
					return (
						<DailyWeatherCard
							key={data.dt}
							dailyWeatherDate={data.dt}
							dailyWeatherIcon={data.weather[0].icon}
							dailyWeatherTemp={data.main.temp}
							dailyWeatherRealTemp={data.main.feels_like}
							dailyWeatherDescription={data.weather[0].description}
						/>
					);
				})}
		</Carousel>
	);
};

export default WeatherDaily;
