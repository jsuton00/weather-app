import L from 'leaflet';

export const PinLocationIcon = L.icon({
	iconUrl: require('../assets/icon-location.svg'),
	iconRetinaUrl: require('../assets/icon-location.svg'),
	iconSize: [35, 35],
	className: 'leaflet-venue-icon',
});
