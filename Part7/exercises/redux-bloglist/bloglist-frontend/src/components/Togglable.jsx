import { useState, useImperativeHandle, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Button, Box } from '@mui/material';

const Togglable = forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  useImperativeHandle(ref, () => {
    return {
      toggleVisibility,
    };
  });

  return (
    <Box sx={{ my: 2 }}>
      {!visible && (
        <Button variant='contained' onClick={toggleVisibility} sx={{ mb: 2 }}>
          {props.buttonLabel}
        </Button>
      )}
      {visible && (
        <Box>
          {props.children}
          <Button variant='outlined' onClick={toggleVisibility} sx={{ mt: 2 }}>
            Cancel
          </Button>
        </Box>
      )}
    </Box>
  );
});

Togglable.displayName = 'Togglable';

Togglable.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};

export default Togglable;
