import { Drawer, IconButton, List } from "@material-ui/core";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

import React, { useState } from "react";

const DrawerComponent = ({ links }) => {
  const [open, setOpen] = useState(false);
  const handleMenuItemClick = () => {
    setOpen(false);
  };

  return (
    <>
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
                <ListItemText sx={{ color: "white" }}>{link.label}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        style={{ marginLeft: "auto", color: "white" }}
        onClick={() => setOpen(!open)}
      >
        <MenuRoundedIcon />
      </IconButton>
    </>
  );
};

export default DrawerComponent;
