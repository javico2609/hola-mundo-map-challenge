import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "40px",
    width: "40px",
    backgroundImage: "url(images/marker2.png)",
    backgroundRepeat: "no-repeat",
  },
  popover: {
    pointerEvents: "none",
  },
  paper: {
    padding: theme.spacing(3),
  },
}));

function MarkerInfo(props) {
  const classes = useStyles();
  const { onClose, open, place, target } = props;

  return (
    <div>
      <Popover
        id="mouse-over-popover"
        className={classes.popover}
        classes={{
          paper: classes.paper,
        }}
        open={open}
        anchorEl={target}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        onClose={onClose}
        disableRestoreFocus
      >
        <Typography>{place.name}</Typography>
        <Typography>{place.description}</Typography>
      </Popover>
    </div>
  );
}

MarkerInfo.propTypes = {
  place: PropTypes.object.isRequired,
};

export default MarkerInfo;
