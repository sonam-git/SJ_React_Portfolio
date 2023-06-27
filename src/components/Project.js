import { Card, Typography,CardMedia,CardContent } from "@material-ui/core";
import "../style/Project.css";

// Project component
function Project(props) {
  return (
    // Card container for each project
    <Card sx={{borderRadius: '16px',boxShadow: 1 }} >
      <Typography variant="h6">{props.title}</Typography>
      <CardMedia
        component="img"
        alt={props.imgAlt}
        height="250"
        image={props.imgSrc}
        href={props.deployedLink}
        target="_blank"
        rel="noreferrer"
      />
      <CardContent>
        
        <Typography variant="subtitle2" style={{marginBottom: 10}}>{props.description}</Typography>
        <a
          href={props.deployedLink}
          target="_blank"
          rel="noreferrer"
          className="btn btn-deployed"
        >
          Deployed App
        </a>
        <a
          href={props.githubLink}
          target="_blank"
          rel="noreferrer"
          className="btn btn-repo"
        >
          GitHub Repo
        </a>
      </CardContent>
    </Card>
  );
}
// Export Project
export default Project;