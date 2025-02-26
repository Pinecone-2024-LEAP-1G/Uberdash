import React, { useState, useEffect, FunctionComponent } from "react";

// Define the props for the Map component
interface MapProps {
  center?: number[];
}

export const Map: FunctionComponent<MapProps> = (props) => {
  const [Client, setClient] = useState<FunctionComponent<MapProps> | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("./ClientMap").then((mod) => {
        setClient(() => mod.default);
      });
    }
  }, []);

  if (typeof window === "undefined" || !Client) {
    return null; // Prevent rendering on the server
  }

  // Explicitly pass props to Client
  return <Client {...props} />;
};

export default Map;
