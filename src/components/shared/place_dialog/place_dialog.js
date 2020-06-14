import React from "react";
import PropTypes from "prop-types";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";

import PlaceForm from "./place_form";

function PlaceDialog(props) {
  const { open, onClose, onSave, place } = props;
  const onSubmit = (formData) => onSave({ ...place, ...formData });

  const formProp = {
    onSubmit,
    onClose,
    place,
  };

  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
      <DialogContent>
        <DialogContentText>
          Please Enter the name here to save this location.
        </DialogContentText>

        <PlaceForm {...formProp} />
      </DialogContent>
    </Dialog>
  );
}

PlaceDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  place: PropTypes.object.isRequired,
};

export default PlaceDialog;
