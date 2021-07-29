import React from 'react';
import { Button } from '@material-ui/core';

const Sidebar = ({ addHandler }) => {
  return (
    <div className="sidebar">
      <Button
        onClick={() => addHandler('button')}
        variant="contained"
        color="primary"
      >
        Button
      </Button>
      <Button
        onClick={() => addHandler('textfield')}
        variant="contained"
        color="primary"
      >
        Textfield
      </Button>
    </div>
  );
};

export default Sidebar;
