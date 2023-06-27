import sonam from "../images/sonam.jpg";
import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  profileImage: {
    width: 300,
    borderRadius: 16,
    boxShadow: "3px 3px 6px rgba(0, 0, 0, 0.3)",
  },
}));

export const About = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      spacing={2}
      sx={{ marginTop: "5rem", maxWidth: "1000px", marginX: "auto" }}
    >
      <Grid item xs={12} md={12}>
        <Typography
          variant="h2"
          sx={{ textAlign: "center", fontWeight: 400, marginBottom: 2 }}
        >
          About Me
        </Typography>
      </Grid>

      <Grid
        item
        xs={12}
        md={4}
        rowGap={25}
        className={classes.gridContainer}
        style={{ marginBottom: 15 }}
      >
        <img src={sonam} alt="profile" className={classes.profileImage} />
      </Grid>
      <Grid
        item
        xs={10}
        md={8}
        sx={{
          backgroundColor: "white",
          borderRadius: "15px",
          boxShadow: 3,
          marginX: "auto",
        }}
      >
        <Typography variant="h5" textAlign={"center"} sx={{ fontWeight: "bold" }}>
          About Sonam J Sherpa
        </Typography>
        <Typography padding={2} textAlign={"justify"} fontSize={".9rem"}>
          Sonam Sherpa, a passionate 29-year-old, has discovered his purpose
          across a diverse array of fields, including Philosophy, Coding, Sports
          Science, and Philanthropy. As a dedicated polymath, Thomas' intellect
          and steadfast determination to excel led him to embark on an
          unforgettable journey at the University of Toronto's esteemed 12-week
          Full-Stack Developer Coding Bootcamp. Fueled by insatiable curiosity
          and a genuine desire to make a difference in the world, Thomas
          committed himself to mastering his craft and pursuing excellence in
          every endeavor, regardless of the challenges he faced.
        </Typography>
      </Grid>
    </Grid>
  );
};
export default About;
