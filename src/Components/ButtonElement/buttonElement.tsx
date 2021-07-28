import { Button } from '@material-ui/core';

const ButtonElement = ({ ref }) => {
  return (
    <Button buttonRef={ref} variant="contained" color="primary">
      Button Element
    </Button>
  );
};

export default ButtonElement;
