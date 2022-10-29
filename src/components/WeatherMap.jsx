import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

const WeatherMap = (props) => {
	const { latitude, longitude } = props;
	const [myLocation] = useState([latitude, longitude]);
	const [zoomLevel] = useState(12);
	const [mapUrl] = useState(
		'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
	);
	const [attribution] = useState(
		'&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors',
	);

	return (
		<MapContainer center={myLocation} zoom={zoomLevel}>
			<TileLayer url={mapUrl} attribution={attribution} />
		</MapContainer>
	);
};

export default WeatherMap;
