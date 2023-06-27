import React, { useState } from "react";
import {
  AppBar,
  Grid,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { Link } from "react-router-dom";

import DrawerComponent from "./DrawerComponent";



const Navbar = ({ links }) => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const [value, setValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <AppBar
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(91,151,204,1) 0%, rgba(9,121,12,1) 35%, rgba(0,114,255,1) 100%)",
        }}
      >
        <Toolbar>
          {isMatch ? (
            <>
              <Typography style={{fontSize: '1.5rem'}}>{'< Sonam J Sherpa />'}</Typography>
              <DrawerComponent links={links} />
            </>
          ) : (
            <Grid style={{ placeItems: "center" }} container spacing={1}>
              <Grid item xs={4}>
                <Typography style={{fontSize: '2rem'}}>{'< Sonam J Sherpa />'}</Typography>
              </Grid>
              <Grid item xs={8} >
                <Tabs
                  value={value}
                  textColor="inherit"
                  indicatorColor="secondary"
                  onChange={handleTabChange}
                  sx={{ fontWeight: 'bold' }}
                >
                  {links.map((link, index) => (
                    <Tab 
                    key={index} 
                    component={Link}
                    to={link.to}
                    label={link.label}
                    style={{marginLeft: 'auto'}} />
                  ))}
                </Tabs>
              </Grid>
            </Grid>
          )}
        </Toolbar>
      </AppBar>
     
    </>
  );
};

export default Navbar;
