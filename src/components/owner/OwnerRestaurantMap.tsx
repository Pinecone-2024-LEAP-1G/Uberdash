// "use client";

// import L from "leaflet";

// // import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";

// import "leaflet/dist/leaflet.css";

// import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";

// import markerIcon from "leaflet/dist/images/marker-icon.png";

// import markerShadow from "leaflet/dist/images/marker-shadow.png";

// import { RestaurantBranchType } from "@/lib/types";

// // @ts-expect-error : ymar negen error garch magadgui gej l bichih ym shig baina
// delete L.Icon.Default.prototype._getIconUrl;

// L.Icon.Default.mergeOptions({
//   iconUrl: markerIcon.src,

//   iconRetinaUrl: markerIcon2x.src,

//   shadowUrl: markerShadow.src,
// });

// type OwnerRestaurantMapProps = {
//   restauranBranches?: RestaurantBranchType[];
// };

// export const OwnerRestaurantMap = ({
//   restauranBranches,
// }: OwnerRestaurantMapProps) => {
//   return (
//     <MapContainer
//       center={[47.913678, 106.915995]}
//       zoom={14}
//       scrollWheelZoom={true}
//       className="h-[90vh] w-full rounded-lg z-0"
//     >
//       <TileLayer
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       />
//       {restauranBranches?.map((branch) => (
//         <Marker key={branch._id} position={branch.location.coordinates}>
//           <Popup>{branch.branchName}</Popup>
//         </Marker>
//       ))}
//     </MapContainer>
//   );
// };
