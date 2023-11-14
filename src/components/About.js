
// import necessary packages/files
import React, { useState } from "react";
import { Container, Grid, Typography, Button } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import sonam from "../images/sj_profile.JPG";

// hooks to apply the styling
const useStyles = makeStyles((theme) => ({
  // the class or style for a grid container .
  gridContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  // the class or style for a profile image
  profileImage: {
    width: 300,
    borderRadius: 16,
    boxShadow: "5px 8px 6px rgba(0, 0, 0, 0.3)",
  },
}));

export const About = () => {
  //  invokes the useStyles hook
  const classes = useStyles();
  // This line declares a state variable name
  const [showFullText, setShowFullText] = useState(false);
  // function to display the remaining text/paragraph in about section and back
  const handleReadMoreClick = () => {
    setShowFullText(true);
  };
  const handleBackClick = () => {
    setShowFullText(false);
  };

  return (
    // About Section
    <Container
      id="about"
      maxWidth="lg"
      sx={{ marginTop: 20, marginBottom: 20 }}
    >
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
            boxShadow: "0 5px 8px rgba(10, 20, 10, 5.2)",
            marginX: "auto",
          }}
        >
          <Typography
            variant="h5"
            textAlign={"center"}
            sx={{ fontWeight: "bold", paddingTop: 2 }}
          >
            About Me
          </Typography>
          <Typography
            padding={2}
            textAlign={"justify"}
            fontSize={".9rem"}
            sx={{ height: "100%" }}
          >
            {showFullText ? (
              <>
                My professional journey is enriched by valuable experiences,
                encompassing over five years in the restaurant industry, a
                decade serving as a Trekking Guide in Nepal, and active
                participation with the Himalayan Sherpa Club, a Sonoma-based
                nonprofit dedicated to volunteer work and the preservation of
                culture abroad.
                <br></br>
                <br></br>
                With a genuine aspiration to effect positive change in the
                world, I am steadfast in my pursuit of excellence and my
                commitment to creating a lasting impact in my professional
                pursuits.
                <br></br>
                <br></br>
                {!showFullText && (
                  <Button onClick={handleReadMoreClick} color="primary">
                    Read More
                  </Button>
                )}
              </>
            ) : (
              <>
                I am Sonam J Sherpa, a dedicated professional with a wealth of
                experience across various roles, fueled by a strong desire to
                make a positive contribution. My educational background
                encompasses an AS (Associate of Science) as Web Full Stack developer from Santa Rosa
                Junior College, a recent completion of the 24 Weeks Full Stack
                Web Developer program at UC Berkeley Extension, and a Diploma in
                Electrical Engineering from BSET school in Nepal, equipping me
                with a versatile skill set.
                <br></br>
                <br></br>
                Beyond my academic achievements, I hold diverse interests and
                hobbies such as Traveling, Music, Sports, Coding, and Designing,
                which enable me to continually explore different facets of life
                and facilitate personal growth. My proficiency in English,
                Nepali, Sherpa, and basic knowledge of French and Spanish
                ensures effective communication across various cultures.
                <br></br>
                <br></br>
                Driven by an unquenchable curiosity and a commitment to
                excellence, I actively seek opportunities to expand my knowledge
                and skills. Notably, I made a significant contribution to the
                redevelopment of the Burbank Housing website as part of the SRJC
                web team in 2022, showcasing my dedication to collaborative
                projects and the delivery of high-quality results.
                <br />
                {!showFullText && (
                  <Button onClick={handleReadMoreClick} color="primary">
                    Read More
                  </Button>
                )}
              </>
            )}
            {showFullText && (
              <Button onClick={handleBackClick} color="primary">
                Back
              </Button>
            )}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};
// Export About
export default About;