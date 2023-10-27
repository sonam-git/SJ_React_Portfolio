// import necessary packages
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Drawer, IconButton, List } from "@material-ui/core";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

// This component is for  displaying hamburger menu when the screen get smaller (for mobile view)
const DrawerComponent = ({ links }) => {
  // declares a state variable name
  const [open, setOpen] = useState(false);
// set the state of a variable named open to false, when function is called
  const handleMenuItemClick = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton
        style={{ marginLeft: "auto", color: "white" }}
        onClick={() => setOpen(!open)}
      >
        <MenuRoundedIcon />
      </IconButton>
      <Drawer
        PaperProps={{
          style: { backgroundColor: "rgba(91,151,204,1)" },
        }}
        open={open}
        onClose={() => setOpen(false)}
      >
        <List>
          {links.map((link, index) => (
            <ListItemButton
              onClick={handleMenuItemClick}
              key={index}
              divider
              component={Link}
              to={link.to}
            >
              <ListItemIcon>
                <ListItemText sx={{ color: "white" }}>
                  {link.label}
                </ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </>
  );
};
// export DrawerComponent
export default DrawerComponent;
