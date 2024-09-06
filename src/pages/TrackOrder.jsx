import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet-routing-machine";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

// Fix for default marker icon issues in Leaflet with React
let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});
L.Marker.prototype.options.icon = DefaultIcon;

const Routing = ({ senderLocation, receiverLocation }) => {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    // Remove any existing routing control before adding a new one
    let routingControl = L.Routing.control({
      waypoints: [
        L.latLng(senderLocation.lat, senderLocation.lng),
        L.latLng(receiverLocation.lat, receiverLocation.lng),
      ],
      routeWhileDragging: true,
    }).addTo(map);

    // Cleanup function to remove the control when the component unmounts or updates
    return () => {
      if (map && routingControl) {
        map.removeControl(routingControl);
      }
    };
  }, [map, senderLocation, receiverLocation]);

  return null;
};

const App = () => {
  const [senderLocation, setSenderLocation] = useState({
    lat: 28.6139, // Delhi
    lng: 77.2090,
  });
  const [receiverLocation, setReceiverLocation] = useState({
    lat: 28.3647, // Dehradun
    lng: 77.2135,
  });

  return (
    <div>
      <h2>Indian Post Services Map</h2>

      {/* Input fields to change sender and receiver locations */}
      <div style={{ marginBottom: "20px" }}>
        <div>
          <label>Sender Latitude: </label>
          <input
            type="number"
            value={senderLocation.lat}
            onChange={(e) =>
              setSenderLocation({ ...senderLocation, lat: e.target.value })
            }
          />
        </div>
        <div>
          <label>Sender Longitude: </label>
          <input
            type="number"
            value={senderLocation.lng}
            onChange={(e) =>
              setSenderLocation({ ...senderLocation, lng: e.target.value })
            }
          />
        </div>
        <div>
          <label>Receiver Latitude: </label>
          <input
            type="number"
            value={receiverLocation.lat}
            onChange={(e) =>
              setReceiverLocation({ ...receiverLocation, lat: e.target.value })
            }
          />
        </div>
        <div>
          <label>Receiver Longitude: </label>
          <input
            type="number"
            value={receiverLocation.lng}
            onChange={(e) =>
              setReceiverLocation({ ...receiverLocation, lng: e.target.value })
            }
          />
        </div>
      </div>

      {/* Map Container */}
      <MapContainer
        center={[senderLocation.lat, senderLocation.lng]}
        zoom={5}
        style={{ height: "500px", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[senderLocation.lat, senderLocation.lng]}>
          <Popup>Sender Location</Popup>
        </Marker>
        <Marker position={[receiverLocation.lat, receiverLocation.lng]}>
          <Popup>Receiver Location</Popup>
        </Marker>
        <Routing senderLocation={senderLocation} receiverLocation={receiverLocation} />
      </MapContainer>
    </div>
  );
};

export default App;