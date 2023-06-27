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
              title: "Project 1",
              description: "CMS-Style Model View Controller Blog",
              imgSrc: sonam,
              deployedLink:
                "https://thomas-model-view-controller.herokuapp.com/",
              githubLink:
                "https://github.com/ThomasCalle/Thomas-Model-View-Controller-MVC-Tech-Blog",
            },
            {
              title: "Stack Dev Portfolio",
              description: "Built On Advanced CSS",
              imgSrc: sonam,
              deployedLink:
                "https://thomascalle.github.io/ThomasCalleStackDevPortfolio/",
              githubLink:
                "https://github.com/ThomasCalle/ThomasCalleStackDevPortfolio",
            },
            {
              title: "Online Workday Planner",
              description: "Third-Party API Sceduler ft. Day.js",
              imgSrc: sonam,
              deployedLink:
                "https://thomascalle.github.io/Online-Workday-Planner/",
              githubLink:
                "https://github.com/ThomasCalle/Online-Workday-Planner",
            },
            {
              title: "Java Script: WEB API Quiz",
              description: "Dynamically updated HTML/CSS Web API quiz.",
              imgSrc: sonam,
              deployedLink:
                "https://thomascalle.github.io/JavaScript_Interview_Assessment/",
              githubLink:
                "https://github.com/ThomasCalle/JavaScript_Interview_Assessment",
            },
            {
              title: "10 Things to Do in Toronto",
              description: "Interactive Front-End Application Guide.",
              imgSrc: sonam,
              deployedLink:
                "https://thomascalle.github.io/10-Things-To-Do-In-Toronto/",
              githubLink:
                "https://github.com/ThomasCalle/10-Things-To-Do-In-Toronto#links",
            },
            {
              title: "Weather Dashboard",
              description: "Server-Side APIs: (5) Day Weather Dashboard.",
              imgSrc: sonam,
              deployedLink:
                "https://thomascalle.github.io/Thomas-Weather-Dashboard/",
              githubLink:
                "https://github.com/ThomasCalle/Thomas-Weather-Dashboard",
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
