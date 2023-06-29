import React from "react";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "./Navbar";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#222",
    padding: 0,
    width: "100%",
    position: "fixed",
    top: 0,
    zIndex: 100,
  },
  gridContainer: {
    justifyContent: "center",
    textAlign: "center",
  },
  title: {
    fontSize: "3rem", // Updated font size for responsiveness
    color: theme.palette.common.white,
    marginBottom: 0,
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem", // Adjust font size for smaller screens
    },
  },
  link: {
    margin: 0,
    textDecoration: "none",
    color: theme.palette.common.white,
  },
  icon: {
    color: theme.palette.common.white,
    fontSize: "3rem", // Updated font size for responsiveness
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem", // Adjust font size for smaller screens
    },
  },
}));

const Header = ({ links }) => {
  const classes = useStyles();
console.log('Rendering Header');
  return (
    <>
      <Grid container className={classes.container}>
        <Grid item xs={12} className={classes.gridContainer}>
          <FontAwesomeIcon
            icon={faCode}
            size="xl"
            className={classes.icon}
          />
          <Link to="/" className={`${classes.link} ${classes.title}`}>
            Sonam J Sherpa
          </Link>
          <FontAwesomeIcon
            icon={faCode}
            flip="horizontal"
            size="xl"
            className={classes.icon}
          />
        </Grid>
      </Grid>
      <Navbar links={links} />
    </>
  );
};

export default Header;
