import React, { useEffect } from "react";
import Leaflet from "leaflet";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import { useIpContext } from "../../context";

import "./Map.css";

const Map = () => {
  const { data, ip } = useIpContext();
  const mapPosition = {
    latitude: data.location.lat,
    longitude: data.location.lng,
  };
  const zoomLevel = 13;

  const RefreshMap = ({ lat, lng }) => {
    const map = useMap();

    useEffect(() => {
      map.setView([lat, lng]);
      // eslint-disable-next-line
    }, [ip]);

    return null;
  };

  return (
    <MapContainer
      center={[mapPosition.longitude, mapPosition.longitude]}
      zoom={zoomLevel}
      scrollWheelZoom={false}
      dragging={false}
      zoomControl={false}
    >
      <TileLayer
        attribution='Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
      Coded by <a href="https://github.com/valleyman89" target="_blank">Steven Rolph</a>.'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        position={[mapPosition.latitude, mapPosition.longitude]}
        icon={Leaflet.divIcon({
          className: "custom-marker",
          iconSize: [48, 64],
          iconAnchor: [24, 64],
        })}
      />
      <RefreshMap lat={mapPosition.latitude} lng={mapPosition.longitude} />
    </MapContainer>
  );
};

export default Map;
