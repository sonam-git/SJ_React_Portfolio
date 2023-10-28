




// import necessary packages/files
import {
  Grid,
  Button,
  Typography,
  ListItem,
  List,
  ListItemText,
  Container,
} from "@mui/material";
import PDF from "../documents/sjResume.pdf";

const Resume = () => {
  // opens a new browser window to download a pdf file
  // when function is invoked after clicked the download resume button
  const handleDownload = () => {
    window.open(PDF);
  };
  return (
    <Container
      fixed
      style={{
        marginBottom: 150,
        backgroundColor: "white",
        color: "#222",
        borderRadius: 15,
        boxShadow: "0 5px 8px rgba(10, 20, 10, 5.2)",
      }}
    >
      <Grid
        container
        style={{ marginTop: 150, padding: 10, paddingX: 50 }}
        spacing={2}
      >
        <Grid item xs={12}>
          <Typography
            variant="h2"
            style={{ textAlign: "center", fontWeight: 400, marginBottom: 25 }}
          >
            Resume
          </Typography>
        </Grid>
        <Grid item xs={12} style={{ marginBottom: 15 }}>
          <Button variant="contained" color="primary" onClick={handleDownload}>
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
                    <strong>Languages:</strong> HTML, CSS, JavaScript,
                    Express.js, Node.js, Handlebars.js, Content Management
                    System(CMS), PHP(familiar), C++(familiar)
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>
                    <strong>Libraries / Frameworks:</strong> React.js, jQuery,
                    Next.js, Bootstrap, Material UI, Chakra UI, Bulma
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>
                    <strong>Databases:</strong> MongoDB, MySQL, FireBase
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>
                    <strong>Tools / Platforms:</strong> Git, GitHub, Heroku,
                    Vercel
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>
                    <strong>MS Office :</strong> Word, Excel, PowerPoint
                  </ListItemText>
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h4">Education</Typography>
          <hr />
          <Typography variant="h6">
            Associate in Fullstack Web Developer
          </Typography>
          <Typography variant="h6" style={{ fontWeight: 400 }}>
            Santa Rosa Junior Collage 2023
          </Typography>
          <br></br>
          <Typography variant="h6">
            {" "}
            24 Weeks Full Flex Web Developer 2023
          </Typography>
          <Typography variant="h6" style={{ fontWeight: 400 }}>
            UC Berkeley Extension
          </Typography>
          <br></br>
          <Typography variant="h6">Diploma in Electrical Engineer</Typography>
          <Typography variant="h6" style={{ fontWeight: 400 }}>
            Balaju School of Engineering & Technology, Kathmandu, Nepal 2010
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h4">Work Experience</Typography>
          <hr className="star-secondary" />
          <Typography variant="h6">
            Worked for a project to rebuild Burbank Housing Website
          </Typography>
          <Typography variant="h6" style={{ fontWeight: 400 }}>
            Santa Rosa Junior College / Web Project Team 2022
          </Typography>
          <br></br>
          <Typography variant="h6">Customer Service and Hospitality</Typography>
          <Typography variant="h6" style={{ fontWeight: 400 }}>
            Working as Server since 2016 / La Casa Restaurant & Bar
          </Typography>
          <br></br>
          <Typography variant="h6">Trekking and Adventure in Nepal</Typography>
          <Typography variant="h6" style={{ fontWeight: 400 }}>
            Worked as a Trekking Guide 2010 - 2015 / Atalante Mountaineering
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};
// export Resume
export default Resume;

