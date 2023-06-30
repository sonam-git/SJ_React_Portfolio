import {
  Card,
  Typography,
  CardMedia,
  CardContent,
  Button,
} from "@material-ui/core";

// Project component
function Project(props) {
  return (
    // Card container for each project
    <Card
      style={{
        borderRadius: "16px",
        boxShadow: "0 5px 8px rgba(10, 20, 10, 5.2)",
        border: " gray solid",
      }}
    >
      <Typography variant="h6" style={{ textAlign: "center", padding: 5 }}>
        {props.title}
      </Typography>
      <div style={{ position: "relative", paddingTop: "56.25%" }}>
        <CardMedia
          component="img"
          alt={props.imgAlt}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          image={props.imgSrc}
        />
      </div>
      <CardContent>
        <Typography variant="subtitle2" style={{ marginBottom: 10 }}>
          {props.description}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          href={props.deployedLink}
          target="_blank"
          rel="noreferrer"
          style={{ marginRight: 10 }}
        >
          Deployed App
        </Button>
        <Button
          variant="contained"
          color="primary"
          href={props.githubLink}
          target="_blank"
          rel="noreferrer"
        >
          GitHub Repo
        </Button>
      </CardContent>
    </Card>
  );
}

// Export Project
export default Project;
