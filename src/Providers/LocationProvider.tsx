"use client";
import {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from "react";

export type locationCoordinates = number[];

export const LocationContext = createContext<{
  location: locationCoordinates;
  isLoading: boolean;
  error: string | null;
  setLocation: (location: locationCoordinates) => void;
  selectLocation: (newLocation: locationCoordinates) => void;
}>({
  location: [0, 0],
  isLoading: true,
  error: null,
  setLocation: () => {},
  selectLocation: () => {},
});

const useLocation = () => useContext(LocationContext);

interface LocationProviderProps {
  children: ReactNode;
}

const LocationProvider: React.FC<LocationProviderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [location, setLocation] = useState<locationCoordinates>([0, 0]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const savedLocation = localStorage.getItem("location");

    if (savedLocation) {
      try {
        const parsedLocation = JSON.parse(savedLocation);
        if (Array.isArray(parsedLocation) && parsedLocation.length === 2) {
          setLocation(parsedLocation);
        }
      } catch (e) {
        console.log(e);
        setError("Failed to parse location from localStorage");
      }
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (location[0]) {
      localStorage.setItem("location", JSON.stringify(location));
    }
  }, [location]);

  const selectLocation = (newLocation: locationCoordinates) => {
    setLocation(newLocation);
  };

  return (
    <LocationContext.Provider
      value={{
        location,
        isLoading,
        error,
        setLocation,
        selectLocation,
      }}
    >
      {!isLoading ? children : null}
    </LocationContext.Provider>
  );
};

export { useLocation, LocationProvider };
