import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for the default marker icon
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

const DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconAnchor: [12, 41], // Center the marker icon
});

L.Marker.prototype.options.icon = DefaultIcon;

// Component to handle map movement
const MapUpdater = ({ lat, lon }) => {
  const map = useMap();
  
  useEffect(() => {
    if (lat && lon) {
      map.flyTo([lat, lon], 12, {
        duration: 1.5, // Smooth transition duration in seconds
      });
    }
  }, [lat, lon, map]);

  return null; // This component doesn't render anything visually
};

const Map = ({ lat, lon }) => {
  return (
    <div className="map-container">
      <MapContainer center={[0, 0]} zoom={2} style={{ height: '400px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {lat && lon && (
          <>
            <Marker position={[lat, lon]}>
              <Popup>
                <strong>Location Found</strong>
                <br />
                Latitude: {lat.toFixed(2)}
                <br />
                Longitude: {lon.toFixed(2)}
              </Popup>
            </Marker>
            <MapUpdater lat={lat} lon={lon} />
          </>
        )}
      </MapContainer>
    </div>
  );
};

export default Map;
