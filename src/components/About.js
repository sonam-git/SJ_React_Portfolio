import sonam from "../images/sonam.jpg";
import { Container, Grid, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
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
    <Container id="about" maxWidth="lg" sx={{ marginTop: 14, marginBottom: 20 }}>
      <Grid container style={{ height: "100%" }}>
        <Grid item xs={12}>
          <Typography
            variant="h2"
            sx={{ textAlign: "center", fontWeight: 400, marginBottom: 10 }}
          >
            About Me
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          md={4}
          className={classes.gridContainer}
          style={{ marginBottom: 15 }}
        >
          <img src={sonam} alt="profile" className={classes.profileImage} />
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
          sx={{
            backgroundColor: "white",
            borderRadius: "15px",
            boxShadow: 3,
            marginX: "auto",
          }}
        >
          <Typography
            variant="h5"
            textAlign={"center"}
            sx={{ fontWeight: "bold", paddingTop: 2 }}
          >
            About Sonam J Sherpa
          </Typography>
          <Typography padding={2} textAlign={"justify"} fontSize={".9rem"} sx={{ height: "100%" }}>
            Sonam Sherpa, a passionate 33-year-old, has discovered his purpose
            across a diverse array of fields, including Philosophy, Coding, Sports
            Science, and Technology. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Integer cursus bibendum magna, vitae dapibus felis ultricies ut. Sed ac odio
            eget est convallis ullamcorper. Duis bibendum vestibulum risus, non
            convallis odio aliquam eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            cursus bibendum magna, vitae dapibus felis ultricies ut. Sed ac odio
            eget est convallis ullamcorper. Duis bibendum vestibulum risus, non
            convallis odio aliquam eu.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
