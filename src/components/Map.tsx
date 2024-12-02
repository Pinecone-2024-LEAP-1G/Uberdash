import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngExpression } from "leaflet";

type LatLng = {
  lat: number | undefined;
  lng: number | undefined;
};

type Location1 = {
  locations: LatLng[];
};

const Map = ({ locations }: Location1) => {
  const validLocations = locations.filter(
    (location) => location.lat !== undefined && location.lng !== undefined
  );

  if (validLocations.length === 0)
    return <div>No valid locations available</div>;

  const center: LatLngExpression =
    validLocations.length === 2
      ? [
          (validLocations[0].lat + validLocations[1].lat) / 2,
          (validLocations[0].lng + validLocations[1].lng) / 2,
        ]
      : [validLocations[0].lat!, validLocations[0].lng!];

  return (
    <MapContainer
      center={center}
      zoom={100}
      style={{ height: "200px", width: "300px" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {validLocations.map((location, index) => (
        <Marker key={index} position={[location.lat!, location.lng!]}>
          <Popup>
            <div>
              <h4>Location {index + 1}</h4>
              <p>
                Coordinates: {location.lat}, {location.lng}
              </p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
