"use client";
import {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from "react";
import { Location } from "@/lib/models";

export const LocationContext = createContext<{
  location: Location;
  isLoading: boolean;
}>({
  location: {
    type: "Point",
    coordinates: [0, 0],
  },
  isLoading: false,
});

const useLocation = () => useContext(LocationContext);

interface LocationProviderProps {
  children: ReactNode;
}

const LocationProvider: React.FC<LocationProviderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [location, setLocation] = useState<Location>({
    type: "Point",
    coordinates: [0, 0],
  });

  useEffect(() => {
    const fetchData = async () => {
      if (typeof window !== "undefined" && navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const newLocation: Location = {
              type: "Point",
              coordinates: [
                position.coords.latitude,
                position.coords.longitude,
              ],
            };
            setLocation(newLocation);
            setIsLoading(false);
          },
          (err) => {
            console.log(err);
          }
        );
      }
    };

    fetchData();
  }, []);

  return (
    <LocationContext.Provider value={{ location, isLoading }}>
      {children}
    </LocationContext.Provider>
  );
};

export { useLocation, LocationProvider };
