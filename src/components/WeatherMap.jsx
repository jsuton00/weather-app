import React, { useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

const WeatherMap = (props) => {
	const { latitude, longitude, zoomLevel } = props;

	const renderMap = () => {
		if (latitude && longitude) {
			return (
				<MapContainer center={[latitude, longitude]} zoom={zoomLevel}>
					<TileLayer
						url={'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'}
						attribution={
							'&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors,'
						}
					/>
				</MapContainer>
			);
		}
	};

	return <>{renderMap()}</>;
};

export default WeatherMap;
