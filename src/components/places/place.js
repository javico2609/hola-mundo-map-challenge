import React from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles((themeFn) => ({
  buttonContainer: {
    display: "flex",
    justifyContent: "flex-end",
  },
}));

function Place(props) {
  const classes = useStyles();
  const { place, onDelete, onEdit } = props;

  return (
    <Card variant="outlined">
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {place.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {place.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.buttonContainer}>
        <IconButton
          aria-label="edit"
          color="primary"
          size="small"
          onClick={onEdit}
        >
          <EditIcon fontSize="inherit" />
        </IconButton>

        <IconButton
          aria-label="delete"
          color="secondary"
          size="small"
          onClick={onDelete}
        >
          <DeleteIcon fontSize="inherit" />
        </IconButton>
      </CardActions>
    </Card>
  );
}

Place.propTypes = {
  place: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default Place;
