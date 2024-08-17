import { useState, useEffect, useRef } from 'react';
import Blog from './components/Blog';
import blogService from './services/blogs';
import loginService from './services/login';
import Notification from './components/Notification';
import LoginForm from './components/LoginForm';
import BlogForm from './components/BlogForm';
import Togglable from './components/Togglable';
import Users from './components/Users';
import { Routes, Route, Link, BrowserRouter as Router } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  initializeBlogs,
  createBlog,
  likeBlog,
  deleteBlog,
} from './reducers/blogReducer';
import {
  setNotification,
  clearNotification,
} from './reducers/notificationReducer';
import { setUser, clearUser } from './reducers/userReducer';

const App = () => {
  const blogs = useSelector((state) => state.blogs);

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

  const updateBlog = async (blogObject) => {
    try {
      dispatch(likeBlog(blogObject));
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

  const removeBlog = async (id) => {
    try {
      dispatch(deleteBlog(id));
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
    dispatch(clearUser());
    window.location.reload();
  };

  const LogoutButton = () => {
    return <button onClick={handleLogout}>logout</button>;
  };

  const sortedBlogs = [...blogs].sort((a, b) => b.likes - a.likes);

  const loginForm = () => {
    const hideWhenVisible = { display: loginVisible ? 'none' : '' };
    const showWhenVisible = { display: loginVisible ? '' : 'none' };

    return (
      <div>
        <div style={hideWhenVisible}>
          <button onClick={() => setLoginVisible(true)}>login</button>
        </div>
        <div style={showWhenVisible}>
          <LoginForm
            username={username}
            password={password}
            handleUsernameChange={({ target }) => setUsername(target.value)}
            handlePasswordChange={({ target }) => setPassword(target.value)}
            handleSubmit={handleLogin}
          />
          <button onClick={() => setLoginVisible(false)}>cancel</button>
        </div>
      </div>
    );
  };

  return (
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
                  <Link style={padding} to='/'>
                    home
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
                  {sortedBlogs.map((blog) => (
                    <Blog
                      key={blog.id}
                      blog={blog}
                      updateBlog={updateBlog}
                      removeBlog={removeBlog}
                      user={user}
                    />
                  ))}
                </div>
              )
            }
          />
          <Route path='/users' element={<Users />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
