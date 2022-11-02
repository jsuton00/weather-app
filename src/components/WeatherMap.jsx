import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

const WeatherMap = (props) => {
	const { latitude, longitude, zoomLevel } = props;
	const [center, setCenter] = useState([latitude, longitude]);
	const [map, setMap] = useState('');
	const [zoom, setZoom] = useState(zoomLevel);

	useEffect(() => {
		const timer = setTimeout(() => {
			if (latitude && longitude) {
				setCenter([latitude, longitude]);
				setZoom(zoomLevel);
			}
		});

		return () => {
			clearTimeout(timer);
		};
	}, [latitude, longitude, zoomLevel]);

	return (
		<MapContainer center={center} zoom={zoom}>
			<TileLayer
				url={'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'}
				attribution={
					'&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors'
				}
			/>
		</MapContainer>
	);
};

export default WeatherMap;
