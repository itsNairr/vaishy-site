import { useState, useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

function Mapbox(props) {
  const [map, setMap] = useState();
  const mapContainer = useRef(null);

  useEffect(() => {
    const node = mapContainer.current;
    if (typeof window === "undefined" || node === null) return;

    const mapboxMap = new mapboxgl.Map({
      container: node,
      accessToken: process.env.NEXT_PUBLIC_MAPBOX_TOKEN,
      style: "mapbox://styles/itsnairr/cm0cr069o012x01qveqvvali1",
      center: [-78, 44],
      zoom: 6,
    });

    mapboxMap.on("load", () => {
      mapboxMap.on("click", (event) => {
        // Query rendered features for the 'pookie-poi' layer
        const features = mapboxMap.queryRenderedFeatures(event.point, {
          layers: ["pookie-poi"], // replace with your layer name
        });

        if (!features.length) {
          console.log("No features found at this point.");
          return;
        }

        const feature = features[0];

        // Debugging: Log the feature to ensure properties are correct
        console.log(feature.properties.title, feature.properties.description);

        // Create a popup with the title and description from the feature properties
        new mapboxgl.Popup({ offset: [0, -15] })
          .setLngLat(feature.geometry.coordinates)
          .setHTML(
            `<div style="color: black; font-family: Arial, sans-serif; padding: 10px;">
            <h3 style="margin: 0; font-size: 18px; font-weight: bold;">${feature.properties.title}</h3>
            <p style="margin: 5px 0; font-size: 14px;">${feature.properties.description}</p>
          </div>`
          )
          .addTo(mapboxMap);
      });

      setMap(mapboxMap);
    });

    return () => {
      mapboxMap.remove();
    };
  }, []);

  return <div ref={mapContainer} className="w-[600px] h-[500px] rounded-xl sm:w-[500px] sm:h-[400px] xs:w-[350px] xs:h-[500px]" data-aos="zoom-in"/>;
}

export default Mapbox;
