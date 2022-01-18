import { Divider, List, ListItem, MenuItem, Select } from "@mui/material";
import React from "react";

const PreviewModalTrack = () => {
  return (
    <>
      <div className="episodeSelector-header">
        <h3 className="episodeSelector-label">series</h3>
        <Select className="episodeSelector-dropdown">
          <MenuItem> ten</MenuItem>
        </Select>
      </div>
      <Divider />
      <List>
        <ListItem>
          <h3>1</h3>
          <div className="image-wrapper">
            <img
              className="image-thumbnail"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjI1BzwzFjsak_OgsZClXHUww4zDZN18u-fw&usqp=CAU"
              alt=""
            />
            <progress max={1} value={0.30830302829}></progress>
          </div>
          <div>
            <div>
              <span>1 - s</span>
              <span>66분</span>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab unde,
              dolorem est dolores, doloribus hic similique dicta error
              laboriosam deserunt officia, consequatur vel eius voluptatum
              repudiandae excepturi molestiae repellendus aspernatur!
            </p>
          </div>
        </ListItem>
        <Divider />
      </List>
    </>
  );
};
export default PreviewModalTrack;
