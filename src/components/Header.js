import React from "react";
import { Container, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChessKnight } from "@fortawesome/free-solid-svg-icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.primary.dark,
    padding: 0,
  },
  gridContainer: {
    justifyContent: "center",
    textAlign: "center",
    marginBottom: 0,
  },
  title: {
    fontSize: "70px",
    color: theme.palette.common.white,
    marginBottom: 0,
  },
  link: {
    margin: 0,
    textDecoration: "none",
    color: theme.palette.common.white,
  },
  icon: {
    color: theme.palette.common.white,
  },
}));



const Header = () => {
  const classes = useStyles();

  return (
    <>
    <Container maxWidth="xl" className={classes.container}>
      <Grid container className={classes.gridContainer}>
        <Grid item xs={12} className={classes.title}>
          <FontAwesomeIcon
            icon={faChessKnight}
            size="xl"
            className={classes.icon}
          />
          <Link
            to="/7homas7he7ank-react-portfolio/"
            className={`${classes.link} ${classes.title}`}
          >
            Sonam J Sherpa
          </Link>
          <FontAwesomeIcon
            icon={faChessKnight}
            flip="horizontal"
            size="xl"
            className={classes.icon}
          />
        </Grid>
      </Grid>
    </Container>
       </>
  );
};

export default Header;
