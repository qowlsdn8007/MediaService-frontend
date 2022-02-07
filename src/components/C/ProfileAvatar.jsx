import {
  Avatar,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuItem,
  Popover,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

const ProfileAvatar = () => {
  const [anchor, setAnchor] = useState(null);
  const handleOpenMenu = (e) => {
    setAnchor(e.currentTarget);
  };

  const handleCloseMenu = (e) => {
    setAnchor(null);
    console.log(e.currentTarget);
  };
  const open = Boolean(anchor);
  return (
    <Box onMouseOver={handleOpenMenu}>
      <IconButton>
        <Avatar
          sx={{ pointerEvents: "none" }}
          variant="square"
          src="https://occ-0-988-395.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbme8JMz4rEKFJhtzpOKWFJ_6qX-0y5wwWyYvBhWS0VKFLa289dZ5zvRBggmFVWVPL2AAYE8xevD4jjLZjWumNo.png?r=a41"
        ></Avatar>
        <Menu
          open={open}
          anchorEl={anchor}
          onClose={handleCloseMenu}
          onMouseLeave={handleCloseMenu}
          keepMounted
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <MenuItem onClick={handleCloseMenu}>ASDF</MenuItem>
          <MenuItem>ASDF</MenuItem>
          <MenuItem>ASDF</MenuItem>
        </Menu>
      </IconButton>
    </Box>
  );
};
export default ProfileAvatar;
