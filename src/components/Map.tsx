import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const icon = new L.Icon({
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

type LatLng = {
  lat: number;
  lng: number;
};

type Location = {
  locations: LatLng[];
};

const Map = ({ locations }: Location) => {
  return (
    <MapContainer
      center={locations[0]}
      zoom={13}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {locations.map((loc, index) => (
        <Marker key={index} position={loc} icon={icon}>
          <Popup>
            Location {index + 1}: {loc.lat}, {loc.lng}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
