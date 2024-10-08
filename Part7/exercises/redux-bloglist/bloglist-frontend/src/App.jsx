import { useState, useEffect, useRef } from 'react';
import Blog from './components/Blog';
import blogService from './services/blogs';
import loginService from './services/login';
import Notification from './components/Notification';
import LoginForm from './components/LoginForm';
import BlogForm from './components/BlogForm';
import Togglable from './components/Togglable';
import Users from './components/Users';
import User from './components/User';
import Blogs from './components/Blogs';
import { Routes, Route, Link, BrowserRouter as Router } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { initializeBlogs, createBlog } from './reducers/blogReducer';
import {
  setNotification,
  clearNotification,
} from './reducers/notificationReducer';
import { setUser } from './reducers/userReducer';
import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
} from '@mui/material';

const App = () => {
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const blogFormRef = useRef();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginVisible, setLoginVisible] = useState(false);

  const padding = {
    padding: 5,
  };

  useEffect(() => {
    dispatch(initializeBlogs());
  }, []);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogAppUser');
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      dispatch(setUser(user));
      blogService.setToken(user.token);
    }
  }, []);

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const user = await loginService.login({
        username,
        password,
      });
      window.localStorage.setItem('loggedBlogAppUser', JSON.stringify(user));
      blogService.setToken(user.token);
      dispatch(setUser(user));
      setUsername('');
      setPassword('');
    } catch (exception) {
      dispatch(
        setNotification({
          message: 'wrong username or password',
          type: 'error',
        })
      );
      setTimeout(() => {
        dispatch(clearNotification());
      }, 5000);
    }
  };

  const addBlog = async (blogObject) => {
    blogFormRef.current.toggleVisibility();
    try {
      dispatch(createBlog(blogObject));
      dispatch(
        setNotification({
          message: `a new blog ${blogObject.title} by ${blogObject.author} added`,
          type: 'add-blog',
        })
      );
      setTimeout(() => {
        dispatch(clearNotification());
      }, 5000);
    } catch (error) {
      dispatch(
        setNotification({
          message: error.response.data.error,
          type: 'error',
        })
      );
      setTimeout(() => dispatch(clearNotification()), 5000);
    }
  };

  const handleLogout = async (event) => {
    event.preventDefault();
    window.localStorage.clear();
    window.location.reload();
  };

  const LogoutButton = () => (
    <Button variant='outlined' color='inherit' onClick={handleLogout}>
      logout
    </Button>
  );

  const loginForm = () => (
    <Box display='flex' flexDirection='column' alignItems='center'>
      {loginVisible ? (
        <>
          <LoginForm
            username={username}
            password={password}
            handleUsernameChange={({ target }) => setUsername(target.value)}
            handlePasswordChange={({ target }) => setPassword(target.value)}
            handleSubmit={handleLogin}
          />
          <Button variant='outlined' onClick={() => setLoginVisible(false)}>
            Cancel
          </Button>
        </>
      ) : (
        <Button
          variant='contained'
          color='primary'
          onClick={() => setLoginVisible(true)}
        >
          Login
        </Button>
      )}
    </Box>
  );

  return (
    <Container>
      <Router>
        <div>
          <h2>Blogs</h2>
          <Notification />
          <Routes>
            <Route
              path='/'
              element={
                user === null ? (
                  loginForm()
                ) : (
                  <div>
                    <Link style={padding} to='/blogs'>
                      blogs
                    </Link>
                    <Link style={padding} to='/users'>
                      users
                    </Link>
                    <p>
                      {user.name} logged in <LogoutButton />
                    </p>
                    <Togglable buttonLabel='new blog' ref={blogFormRef}>
                      <BlogForm createBlog={addBlog} />
                    </Togglable>
                    <Blogs />
                  </div>
                )
              }
            />
            <Route path='/users' element={<Users />} />
            <Route path='/users/:id' element={<User />} />
            <Route path='/blogs' element={<Blogs />} />
            <Route path='/blogs/:id' element={<Blog />} />
          </Routes>
        </div>
      </Router>
    </Container>
  );
};

export default App;
