import React from 'react';
import { Button, TextField } from '@material-ui/core';

const RightSidebar = ({ heightHandler, widthHandler }) => {
  return (
    <div className="rightSidebar">
      <h3>Edit Mode</h3>
      <TextField
        label="width"
        variant="filled"
        type="number"
        onChange={(e) => widthHandler(e)}
        id="id1"
      />

      <TextField
        label="height"
        variant="filled"
        type="number"
        onChange={(e) => heightHandler(e)}
        id="id2"
      />
    </div>
  );
};

export default RightSidebar;
