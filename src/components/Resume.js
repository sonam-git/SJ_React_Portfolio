import { Grid, Button, Typography, ListItem, List, ListItemText, Container } from "@mui/material";

const Resume = () => {
  return (
    <Container fixed style={{marginBottom: 150, backgroundColor: '#222' , color: 'white', borderRadius: 15}}>
      <Grid container style={{ marginTop: 150, padding: 10, paddingX: 50 }} spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h2" style={{ textAlign: "center", fontWeight: 400, marginBottom: 25 }}>
            Resume
          </Typography>
        </Grid>
        <Grid item xs={12} style={{ marginBottom: 15 }}>
          <Button variant="contained" color="primary">
            Download Resume
          </Button>
        </Grid>

        <Grid item xs={12}>
          <Grid container spacing={2}>
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
                    <strong>Libraries/Frameworks:</strong> React, jQuery, Next, Bootstrap, Material UI, Chakra UI, Bulma
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>
                    <strong>Databases:</strong> MongoDB, MySQL, FireBase
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
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Typography variant="h4">Education</Typography>
          <hr />
          <Typography variant="h6">Associate in Fullstack Web Developer</Typography>
          <Typography variant="h6" style={{ fontWeight: 400 }}>Santa Rosa Junior Collage 2023</Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer cursus bibendum magna, vitae dapibus felis ultricies ut. Sed ac odio eget est convallis ullamcorper. Duis bibendum vestibulum risus, non convallis odio aliquam eu.
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h4">Work Experience</Typography>
          <hr className="star-secondary" />
          <Typography variant="h6">Customer Service and Hospitality</Typography>
          <Typography variant="h6" style={{ fontWeight: 400 }}>Worked as Server since 2016</Typography>
          <Typography style={{ marginBottom: 15 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer cursus bibendum magna, vitae dapibus felis ultricies ut. Sed ac odio eget est convallis ullamcorper. Duis bibendum vestibulum risus, non convallis odio aliquam eu.
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h6">Proficiencies</Typography>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
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
          <Grid item xs={12} sm={6}>
            <List>
              <ListItem>
                <ListItemText primary="Express" />
              </ListItem>
              <ListItem>
                <ListItemText primary="React" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Node.js" />
              </ListItem>
              <ListItem>
                <ListItemText primary="SQL" />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Resume;
