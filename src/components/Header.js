// import necessary packages
import React from "react";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "./Navbar";

 // hooks to apply the styling 
const useStyles = makeStyles((theme) => ({
   // the class or style for a container .
  container: {
    backgroundColor: "#222",
    padding: 0,
    width: "100%",
    minHeight:100,
    position: "fixed",
    top: 0,
    zIndex: 100,
  },
   // the class or style for a grid container .
  gridContainer: {
    justifyContent: "center",
    textAlign: "center",
  },
   // the class or style for a title .
  title: {
    fontSize: "3rem", // Updated font size for responsiveness
    color: theme.palette.common.white,
    marginBottom: 0,
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem", // Adjust font size for smaller screens
    },
  },
   // the class or style for a link .
  link: {
    margin: 0,
    textDecoration: "none",
    color: theme.palette.common.white,
  },
   // the class or style for a icon .
  icon: {
    color: theme.palette.common.white,
    fontSize: "3rem", // Updated font size for responsiveness
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem", // Adjust font size for smaller screens
    },
  },
}));

const Header = ({ links }) => {
  //  invokes the useStyles hook 
  const classes = useStyles();
  return (
    <>
      <Grid container className={classes.container}>
        <Grid item xs={12} className={classes.gridContainer}>
          <FontAwesomeIcon icon={faCode} size="xl" className={classes.icon} />
          <Link to="/SJ_React_Portfolio/about" className={`${classes.link} ${classes.title}`}>
            Sonam J Sherpa
          </Link>
          <FontAwesomeIcon icon={faCode} size="xl" className={classes.icon} />
        </Grid>
      </Grid>
      <Navbar links={links} />
    </>
  );
};
// export Header
export default Header;
