import { Grid, Typography } from "@material-ui/core";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Project from "./Project";
import sonam from "../images/sonam.jpg";

const Portfolio = () => {
  return (
    <Grid container spacing={2} 
     style={{ margin: "auto", maxWidth: "1000px",marginTop: "5rem"  }}>
      <Grid item xs = {12} >
        <Typography
          variant="h2"
          style={{ textAlign: "center", fontWeight: 400, marginBottom: 2 }}
        >
          Portfolio
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <ImageList sx={{ width: 1000, marginX: "auto" }} gap={10} cols={3}>
          {[
            {
              title: "MVC Tech Blog",
              description: "CMS-Style Model View Controller Blog",
              imgSrc: sonam,
              deployedLink:
                "https://sj-mvc.herokuapp.com/",
              githubLink:
                "https://github.com/sonam-git/MVC_Tech_Blog",
            },
            {
              title: "Stack Dev Portfolio",
              description: "Built On Advanced CSS",
              imgSrc: sonam,
              deployedLink:
                "https://sonam-git.github.io/professional-portfolio/Links",
              githubLink:
                "https://github.com/sonam-git/professional-portfolio",
            },
            {
              title: "Online Workday Scheduler",
              description: "Third-Party API Sceduler ft. Day.js",
              imgSrc: sonam,
              deployedLink:
                "https://sonam-git.github.io/work-day-scheduler/",
              githubLink:
                "https://github.com/sonam-git/work-day-scheduler/",
            },
            {
              title: "Java Script: WEB API Quiz",
              description: "Dynamically updated HTML & CSS",
              imgSrc: sonam,
              deployedLink:
                "https://sonam-git.github.io/Code-Quiz/",
              githubLink:
                "https://github.com/sonam-git/Code-Quiz",
            },
            {
              title: "Emotionomics",
              description: "Third party API implementation",
              imgSrc: sonam,
              deployedLink:
                "https://sonam-git.github.io/project_1_emotionomics/",
              githubLink:
                "https://github.com/sonam-git/project_1_emotionomics",
            },
            {
              title: "Weather Dashboard",
              description: "Server-Side APIs:5 Days Weather Dashboard.",
              imgSrc: sonam,
              deployedLink:
                "https://sonam-git.github.io/Weather_Dashboard/",
              githubLink:
                "https://github.com/sonam-git/Weather_Dashboard",
            },
          ].map((project, index) => (
            // Div container for each project
            <ImageListItem key={index}>
              <Project
                title={project.title}
                description={project.description}
                imgSrc={project.imgSrc}
                deployedLink={project.deployedLink}
                githubLink={project.githubLink}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Grid>
    </Grid>
  );
};

export default Portfolio;
