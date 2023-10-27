// import necessary packages/files
import React from "react";
import {
  AppBar,
  Grid,
  Tab,
  Tabs,
  Toolbar,
  Avatar,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import DrawerComponent from "./DrawerComponent";
import sonam from "../images/sonam.jpg";

const Navbar = ({ links }) => {
  //to access the current theme object provided by a UI 
  const theme = useTheme();
  // hook to determine if the current viewport size matches a specified breakpoint range and functioning accordingly
  const isMatch = useMediaQuery(theme.breakpoints.down("sm", "md"));
  // state variables defined using the useState
  const [value, setValue] = React.useState(0);
// function to update the state variable value with the newValue.
  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };
// styling for App Bar
  const appBarStyles = {
    backgroundImage:
      "linear-gradient(90deg, rgba(91,151,204,1) 0%, rgba(9,121,12,1) 35%, rgba(0,114,255,1) 100%)",
    marginTop: isMatch ? 50 : 75,
  };

  return (
    <AppBar style={appBarStyles}>
      <Toolbar>
        {isMatch ? (
          <>
            <Avatar
              style={{
                fontSize: "1.5rem",
                boxShadow: "0 5px 8px rgba(10, 20, 10, 5.2)",
              }}
              src={sonam}
              alt="Sonam"
            />
            <DrawerComponent links={links} />
          </>
        ) : (
          <Grid container alignItems="center">
            <Grid item xs={6}>
              <Avatar
                style={{
                  fontSize: "2rem",
                  width: 56,
                  height: 56,
                  boxShadow: "0 5px 8px rgba(10, 20, 10, 5.2)",
                }}
                src={sonam}
              />
            </Grid>
            <Grid item xs={6} sx={{ textAlign: "right" }}>
              <Tabs
                value={value}
                textColor="inherit"
                indicatorColor="secondary"
                onChange={handleTabChange}
                sx={{ fontWeight: "bold" }}
              >
                {links.map((link, index) => (
                  <Tab
                    key={index}
                    component={Link}
                    to={link.to}
                    label={link.label}
                  />
                ))}
              </Tabs>
            </Grid>
          </Grid>
        )}
      </Toolbar>
    </AppBar>
  );
};
// export Navbar
export default Navbar;
