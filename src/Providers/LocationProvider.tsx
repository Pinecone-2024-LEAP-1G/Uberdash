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
  error: string | null;
}>({
  location: {
    type: "Point",
    coordinates: [0, 0],
  },
  isLoading: false,
  error: null,
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
  const [error, setError] = useState<string | null>(null);

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
            setError(err.message || "Failed to retrieve location");
            setIsLoading(false);
          }
        );
      } else {
        setError("Geolocation is not supported by this browser");
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <LocationContext.Provider value={{ location, isLoading, error }}>
      {children}
    </LocationContext.Provider>
  );
};

export { useLocation, LocationProvider };
