import React from "react";
import PropTypes from "prop-types";
import { makeStyles, ThemeProvider } from "@material-ui/styles";
import theme from "./theme";

const useStyles = makeStyles((themeFn) => ({
  root: {
    height: "100%",
    display: "flex",
  },
  content: {
    height: "100vh",
    width: "100%",
  },
  sidebar: {
    width: "400px",
    padding: "5px",
    borderLeft: "1px solid grey",
    height: "100vh",
    overflow: "auto",
  },
  spacer: {
    height: "10px",
  },
}));

const MainLayout = (props) => {
  const { mainPanel: MainComponent, rightPanel: RightComponent } = props;
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <main className={classes.content}>
          <MainComponent />
        </main>
        <div className={classes.sidebar}>
          <RightComponent />
        </div>
        <div className={classes.spacer}></div>
      </div>
    </ThemeProvider>
  );
};

MainLayout.propTypes = {
  mainPanel: PropTypes.any.isRequired,
  rightPanel: PropTypes.any.isRequired,
};

export default MainLayout;
