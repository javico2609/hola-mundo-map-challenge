import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useSelector, useDispatch } from "react-redux";

import { PlaceDialog } from "../shared";
import Place from "./place";
import { PlacesSelectors, PlacesActions } from "../../stores/places";

const useStyles = makeStyles((theme) => ({
  subtitle: {
    textAlign: "center",
  },
  root: {},
  drawer: {
    height: "100vh",
  },
  placeContainer: {
    padding: "5px",
  },
}));

function Places() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [isPlaceDialogVisible, setPlaceDialogVisibility] = useState(false);
  const [currentPlace, setCurrentPlace] = useState({});
  const places = useSelector(PlacesSelectors.list);

  const onDelete = (place) => {
    dispatch(PlacesActions.remove(place));
  };

  const onEditPlace = (place) => {
    setCurrentPlace(place);
    setPlaceDialogVisibility(true);
  };

  const onSavePlace = (place) => {
    dispatch(PlacesActions.update(place));
    setPlaceDialogVisibility(false);
  };

  const onClose = () => setPlaceDialogVisibility(false);

  return (
    <React.Fragment>
      <Typography variant="subtitle1" className={classes.subtitle}>
        Locations
      </Typography>
      {places.map((place) => (
        <div key={place.id} className={classes.placeContainer}>
          <Place
            place={place}
            onDelete={() => onDelete(place)}
            onEdit={() => onEditPlace(place)}
          />
        </div>
      ))}

      <PlaceDialog
        place={currentPlace}
        open={isPlaceDialogVisible}
        onClose={onClose}
        onSave={onSavePlace}
      />
    </React.Fragment>
  );
}

export default Places;
