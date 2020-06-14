import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";

import MarkerInfo from "./marker_info";

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
    padding: theme.spacing(1),
  },
}));

function Marker(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handlePopoverOpen = (event) => setAnchorEl(event.currentTarget);
  const handlePopoverClose = () => setAnchorEl(null);
  const open = Boolean(anchorEl);

  return (
    <div
      onMouseEnter={handlePopoverOpen}
      onMouseLeave={handlePopoverClose}
      className={classes.root}
    >
      <MarkerInfo
        open={open}
        onClose={handlePopoverClose}
        {...props}
        target={anchorEl}
      />
    </div>
  );
}

Marker.propTypes = {
  place: PropTypes.object.isRequired,
};

export default Marker;
