import Map from "./RestaurantMap";
import { useLocation } from "@/Providers/LocationProvider";

export type Location = {
  type: "Point";
  coordinates: [number, number];
};

export type RestaurantLocationProps = {
  restaurantId: string;
};
type input = {
  center?: number[];
  myLocation: Location;
  restaurantId: string;
};

export const RestaurantLocation = ({
  restaurantId,
}: RestaurantLocationProps) => {
  const data = useLocation();
  const { location } = data;

  const mapProps: input = {
    myLocation: {
      type: "Point",
      coordinates: [47.913678, 106.915995],
    },
    restaurantId: restaurantId,
  };

  return (
    <div className="border rounded-2xl h-[334px] flex flex-col justify-end">
      <Map {...mapProps} />
    </div>
  );
};
