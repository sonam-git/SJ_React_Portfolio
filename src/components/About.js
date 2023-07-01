// import necessary packages/files
import React, { useState } from "react";
import { Container, Grid, Typography, Button } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import sonam from "../images/sonam.jpg";

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
            About Sonam J Sherpa
          </Typography>
          <Typography
            padding={2}
            textAlign={"justify"}
            fontSize={".9rem"}
            sx={{ height: "100%" }}
          >
            {showFullText ? (
              <>
                Driven by an insatiable curiosity and an unwavering commitment
                to excellence, Sonam consistently seeks to expand his knowledge
                and skill set. He is currently undertaking the 24 Weeks Full
                Stack web Developer course at UC Berkeley Extension, further
                enhancing his expertise in the field. Notably, Sonam also
                contributed to the redevelopment of the Burbank Housing website
                as part of the SRJC web team in 2022, showcasing his dedication
                to collaborative projects and delivering high-quality results.
                With a genuine desire to make a difference in the world, Sonam J
                Sherpa remains steadfast in his pursuit of excellence and his
                dedication to creating a positive impact in his professional
                endeavors.
                <br></br>
                <br></br>
                Sonam's professional journey has been marked by valuable
                experiences. He spent over five years working as a server in the
                restaurant industry, honing his customer service and marketing
                skills. In Nepal, he served as a Trekking Guide for more than a
                decade, showcasing his expertise in outdoor adventure and
                tourism. Additionally, Sonam has been actively involved with the
                Himalayan Sherpa Club, a Sonoma-based nonprofit organization
                dedicated to volunteer work and preserving culture abroad.
                <br></br>
                <br></br>
                Fueled by insatiable curiosity and a genuine desire to make a
                difference in the world, Sonam committed himself to mastering
                his craft and pursuing excellence in every endeavor, regardless
                of the challenges he faced.
                <br></br>
                {!showFullText && (
                  <Button onClick={handleReadMoreClick} color="primary">
                    Read More
                  </Button>
                )}
              </>
            ) : (
              <>
                Sonam J Sherpa, a passionate and dedicated individual, is a
                seasoned professional with a diverse background and a drive to
                make a positive impact. With a strong educational foundation,
                including an AA in Full Stack web development from Santa Rosa
                Junior College and a Diploma in Electrical Engineering from BSET
                school in Nepal, Sonam possesses a well-rounded skill set.
                <br></br>
                <br></br>
                Beyond his academic achievements, Sonam's interests and hobbies
                are varied, reflecting his versatile nature. He finds joy in
                traveling, sports, coding, and designing, allowing him to
                explore different facets of life and continuously learn and
                grow. Fluent in English, Nepali, Sherpa, French, and Spanish,
                Sonam's multilingual capabilities enable effective communication
                across diverse cultures and communities.
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
