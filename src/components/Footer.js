import { Box, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faGithub, faYoutube, faLinkedin, faTiktok } from "@fortawesome/free-brands-svg-icons";

// Array of social media objects with name, url, icon, and color
const socials = [
  {
    name: "GitHub",
    url: "https://github.com/",
    icon: faGithub,
    color: "#5DE512",
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/",
    icon: faYoutube,
    color: "#FF0000",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/",
    icon: faLinkedin,
    color: "#2EACE8",
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/",
    icon: faTiktok,
    color: "white",
  },
];

const useStyles = makeStyles((theme) => ({
  footer: {
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100%",
    backgroundColor: " #222",
    padding: theme.spacing(2),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  socialIcon: {
    marginRight: theme.spacing(5),
    color: "white",
    cursor: "pointer",
    fontSize: 24,
  },
  designer: {
    color: "white",
    fontWeight: "bold",
  },
}));

export const Footer = () => {
  const classes = useStyles();

  return (
    <Box component="footer" className={classes.footer}>
      <Box style={{margin: 'auto'}}>
        {socials.map((social, index) => (
          <a key={index} 
          href={social.url} 
          target="_blank" 
          rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={social.icon}
              className={classes.socialIcon}
              style={{ color: social.color,marginTop: 5 }}
              bounce
            />
          </a>
        ))}
        <Box >
      <Typography sx={{marginTop:5, color: 'White'}}>&copy; {new Date().getFullYear()} SJ Sherpa All rights reserved.</Typography>
      </Box>
      </Box>
    </Box>
  );
};

export default Footer;
