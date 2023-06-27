import {
  Grid,
  Button,
  Typography,
  ListItem,
  List,
  ListItemText,
} from "@mui/material";
import React from "react";

const Resume = () => {
  return (
    <Grid container style={{ marginTop: 80, padding: 10, paddingX: 50 }}>
      <Grid item xs={12}>
        <Typography
          variant="h2"
          style={{ textAlign: "center", fontWeight: 400, marginBottom: 25 }}
        >
          Resume
        </Typography>
      </Grid>
      <Grid item xs={12} style={{ marginBottom: 15 }}>
        <Button variant="contained" color="primary">
          Download Resume
        </Button>
      </Grid>

      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h4">Technical Skills</Typography>
          <hr />
          <List>
            <ListItem>
              <ListItemText>
                <strong>Languages:</strong> JavaScript, HTML, CSS
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                <strong>Libraries/Frameworks:</strong> React, jQuery, Next,
                Bootstrap, Material UI, Chakra UI, Bulma
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                <strong>Databases:</strong> MongoDB, MySQL,FireBase
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                <strong>Tools/Platforms:</strong> Git, GitHub, Heroku, Vercel
              </ListItemText>
            </ListItem>
          </List>
        </Grid>
      </Grid>
      <Grid container style={{ marginBottom: 15 }}>
        <Grid>
          <Typography variant="h4">Education</Typography>
          <hr />
          <Typography variant="h6">
            Associate in Fullstack Web Developer
          </Typography>
          <Typography variant="h6" style={{ fontWeight: 400 }}>
            Santa Rosa Junior Collage 2023
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            cursus bibendum magna, vitae dapibus felis ultricies ut. Sed ac odio
            eget est convallis ullamcorper. Duis bibendum vestibulum risus, non
            convallis odio aliquam eu.
          </Typography>
        </Grid>
      </Grid>

      <Grid container style={{ marginBottom: 15 }}>
        <Grid>
          <Typography variant="h4">Work Experience</Typography>
          <hr className="star-secondary" />
          <Typography variant="h6">Customer Service and Hospitality</Typography>
          <Typography variant="h6" style={{ fontWeight: 400 }}>
            Worked as Server since 2016
          </Typography>
          <Typography style={{ marginBottom: 15 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            cursus bibendum magna, vitae dapibus felis ultricies ut. Sed ac odio
            eget est convallis ullamcorper. Duis bibendum vestibulum risus, non
            convallis odio aliquam eu.
          </Typography>
          <Typography variant="h4">
            Working for Non Profit Organization
          </Typography>
          <Typography variant="h6">Since 2018</Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            cursus bibendum magna, vitae dapibus felis ultricies ut. Sed ac odio
            eget est convallis ullamcorper. Duis bibendum vestibulum risus, non
            convallis odio aliquam eu.
          </Typography>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h6">Proficiencies</Typography>
        </Grid>
        <Grid container spacing={25}>
          <Grid item xs={6}>
            <List>
              <ListItem>
                <ListItemText primary="HTML/CSS" />
              </ListItem>
              <ListItem>
                <ListItemText primary="JavaScript" />
              </ListItem>
              <ListItem>
                <ListItemText primary="WordPress" />
              </ListItem>
              <ListItem>
                <ListItemText primary="MongoDB" />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={6}>
            <List>
              <ListItem>
                <ListItemText primary="Express"></ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText primary="React"></ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText primary="Node.js"></ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText primary="SQL" />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Resume;
