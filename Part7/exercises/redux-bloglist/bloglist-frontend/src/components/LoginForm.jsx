import PropTypes from 'prop-types';
import { TextField, Button, Typography, Container, Box } from '@mui/material';

const LoginForm = ({
  handleSubmit,
  handleUsernameChange,
  handlePasswordChange,
  username,
  password,
}) => {
  return (
    <Container component='main' maxWidth='xs'>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          mt: 8,
        }}
      >
        <Typography variant='h5' gutterBottom>
          Log in to application
        </Typography>
        <Box
          component='form'
          onSubmit={handleSubmit}
          sx={{
            mt: 1,
            width: '100%',
          }}
        >
          <TextField
            label='Username'
            variant='outlined'
            fullWidth
            margin='normal'
            value={username}
            onChange={handleUsernameChange}
            data-testid='username'
          />
          <TextField
            label='Password'
            type='password'
            variant='outlined'
            fullWidth
            margin='normal'
            value={password}
            onChange={handlePasswordChange}
            data-testid='password'
          />
          <Button type='submit' variant='contained'>
            Login
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleUsernameChange: PropTypes.func.isRequired,
  handlePasswordChange: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};

export default LoginForm;
