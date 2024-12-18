"use client";

import L from "leaflet";

import { MapContainer, Marker, TileLayer } from "react-leaflet";

import "leaflet/dist/leaflet.css";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";

import markerIcon from "leaflet/dist/images/marker-icon.png";

import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { useEffect, useState } from "react";
import axios from "axios";
import { Location } from "./RestaurantLocation";

// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconUrl: markerIcon.src,

  iconRetinaUrl: markerIcon2x.src,

  shadowUrl: markerShadow.src,
});

type MapProps = {
  center?: number[];
  myLocation: Location;
  restaurantId: string;
};

const Map: React.FC<MapProps> = ({ myLocation, restaurantId }) => {
  const [branch, setBranch] = useState<{ location: Location } | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.post(`/api/restaurant-branch/distance`, {
          location: myLocation,
          restaurantId,
        });

        setBranch(data.closestBranch);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  if (!branch) {
    return null;
  }

  return (
    <MapContainer
      center={
        (branch.location.coordinates as L.LatLngExpression) || [
          47.913678, 106.915995,
        ]
      }
      zoom={(branch.location.coordinates as L.LatLngExpression) ? 10 : 18}
      scrollWheelZoom={true}
      className="h-[35vh] rounded-lg z-0"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        position={
          (branch.location.coordinates as L.LatLngExpression) || [
            47.913678, 106.915995,
          ]
        }
      />
    </MapContainer>
  );
};

export default Map;
