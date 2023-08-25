// import necessary packages/files
import { Grid, Typography } from "@material-ui/core";
import Project from "./Project";
import { Container } from "@mui/material";
import mern from "../images/mern-stack.png";
import project2 from "../images/project2.png";
import workscheduler from "../images/workscheduler.png";
import quiz from "../images/quiz.png";
import emotionomics from "../images/emotionomics.png";
import weather from "../images/weather.png";

const Portfolio = () => {
  return (
    <Container
      id="portfolio"
      maxWidth="lg"
      style={{ margin: "auto", marginTop: 160, marginBottom: 150 }}
    >
      <Typography variant="h2" style={{ textAlign: "center", fontWeight: 400 }}>
        Portfolio
      </Typography>
      <Grid container spacing={2} style={{ marginTop: 70 }}>
        {[
          {
            title: "MERN Alumni Book",
            description: "interactive MERN stack SAP",
            imgSrc: mern,
            deployedLink: "https://alumni-book-app-cae10c9784e0.herokuapp.com/",
            githubLink: "https://github.com/sonam-git/MEARN_Alumni_Book",
          },
          {
            title: "Full Stack App ",
            description: "Built On JS, and Server Side API",
            imgSrc: project2,
            deployedLink: "hhttps://tech-ing-prep.herokuapp.com/",
            githubLink: "https://github.com/sonam-git/Tech_Int_Prep",
          },
          {
            title: "Online Workday Scheduler",
            description: "Third-Party API Scheduler ft. Day.js",
            imgSrc: workscheduler,
            deployedLink: "https://sonam-git.github.io/work-day-scheduler/",
            githubLink: "https://github.com/sonam-git/work-day-scheduler/",
          },
          {
            title: "Java Script: WEB API Quiz",
            description: "Dynamically updated HTML & CSS",
            imgSrc: quiz,
            deployedLink: "https://sonam-git.github.io/Code-Quiz/",
            githubLink: "https://github.com/sonam-git/Code-Quiz",
          },
          {
            title: "Emotionomics",
            description: "Third party API implementation",
            imgSrc: emotionomics,
            deployedLink: "https://sonam-git.github.io/project_1_emotionomics/",
            githubLink: "https://github.com/sonam-git/project_1_emotionomics",
          },
          {
            title: "Weather Dashboard",
            description: "Server-Side APIs: Weather Dashboard.",
            imgSrc: weather,
            deployedLink: "https://sonam-git.github.io/Weather_Dashboard/",
            githubLink: "https://github.com/sonam-git/Weather_Dashboard",
          },
        ].map((project, index) => (
          <Grid item key={index} xs={12} md={4}>
            <Project
              title={project.title}
              description={project.description}
              imgSrc={project.imgSrc}
              deployedLink={project.deployedLink}
              githubLink={project.githubLink}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
// export Portfolio
export default Portfolio;
