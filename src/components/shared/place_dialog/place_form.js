import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import DialogActions from "@material-ui/core/DialogActions";

import useFormValidation from "./form_vlidation_hook";

function PlaceForm(props) {
  const { onSubmit, onClose, place } = props;
  const { handleChange, hasError, formState } = useFormValidation(place);

  return (
    <form>
      <TextField
        autoFocus
        margin="dense"
        label="Name"
        name="name"
        type="text"
        error={hasError("name")}
        helperText={hasError("name") ? formState.errors.name[0] : null}
        onChange={handleChange}
        value={formState.values.name || ""}
        fullWidth
      />

      <TextField
        margin="dense"
        label="Description"
        name="description"
        type="text"
        error={hasError("description")}
        helperText={
          hasError("description") ? formState.errors.description[0] : null
        }
        onChange={handleChange}
        value={formState.values.description || ""}
        fullWidth
      />

      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>

        <Button
          disabled={!formState.isValid}
          onClick={() => onSubmit(formState.values)}
          color="primary"
        >
          Save
        </Button>
      </DialogActions>
    </form>
  );
}

PlaceForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  place: PropTypes.object,
};

export default PlaceForm;
