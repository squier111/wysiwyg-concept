import React from 'react';
import { Button } from '@material-ui/core';

const ButtonElement = React.forwardRef((ref, props) => {
  return (
    //@ts-ignore
    <button ref={ref} {...props}>
      Button Element
    </button>
  );
});

export default ButtonElement;
