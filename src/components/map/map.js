import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import { useSelector, useDispatch } from "react-redux";

import { MainConfiguration } from "../../configurations";
import { Marker } from "./components";
import { PlaceDialog } from "../shared";
import { PlacesSelectors, PlacesActions } from "../../stores/places";

function Map(props) {
  const dispatch = useDispatch();
  const [isPlaceDialogVisible, setPlaceDialogVisibility] = useState(false);
  const [currentPlace, setCurrentPlace] = useState({});
  const places = useSelector(PlacesSelectors.list);

  const onClickMap = (value) => {
    const { event, y, x, ...place } = value;
    setCurrentPlace(place);
    setPlaceDialogVisibility(true);
  };

  const onSavePlace = (place) => {
    dispatch(PlacesActions.add(place));
    setPlaceDialogVisibility(false);
  };

  const onClose = () => setPlaceDialogVisibility(false);

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: MainConfiguration.GOOGLE_MAP_KEY }} // map key here
        defaultCenter={MainConfiguration.center}
        defaultZoom={MainConfiguration.zoom}
        options={{ fullscreenControl: false }}
        onClick={onClickMap}
      >
        {places.map((place) => (
          <Marker
            lat={place.lat}
            lng={place.lng}
            key={place.id}
            place={place}
          />
        ))}
      </GoogleMapReact>

      <PlaceDialog
        place={currentPlace}
        open={isPlaceDialogVisible}
        onClose={onClose}
        onSave={onSavePlace}
      />
    </div>
  );
}

export default Map;
