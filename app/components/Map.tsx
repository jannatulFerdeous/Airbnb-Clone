'use client';
import L from 'leaflet';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

//@ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
const Map = () => {
  return <div>Map</div>;
};

export default Map;
