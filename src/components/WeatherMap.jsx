import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';

const WeatherMap = ({ latitude, longitude }) => {
	const [myLocation, setMyLocation] = useState([latitude, longitude]);
	const [zoomLevel] = useState(12);
	const [mapUrl] = useState(
		'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
	);
	const [attribution] = useState(
		'&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors',
	);

	useEffect(() => {
		const timer = setTimeout(() => {
			if (latitude && longitude) {
				setMyLocation([latitude, longitude]);
			}
		});

		return () => {
			clearTimeout(timer);
		};
	}, [latitude, longitude]);

	return (
		<MapContainer center={myLocation} zoom={zoomLevel}>
			<TileLayer url={mapUrl} attribution={attribution} />
		</MapContainer>
	);
};

export default WeatherMap;
