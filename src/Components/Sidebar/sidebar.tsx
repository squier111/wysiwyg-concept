import React from 'react';
import { Button } from '@material-ui/core';

const Sidebar = ({ addHandler }) => {
  return (
    <>
      <div className="sidebar">
        <h3>Widgets</h3>
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
        <Button
          onClick={() => addHandler('image')}
          variant="contained"
          color="primary"
        >
          image
        </Button>
      </div>
    </>
  );
};

export default Sidebar;
