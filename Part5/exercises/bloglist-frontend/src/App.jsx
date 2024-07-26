import { useState, useEffect } from 'react';
import Blog from './components/Blog';
import blogService from './services/blogs';
import loginService from './services/login';

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const [newTitle, setNewTitle] = useState('');
  const [newAuthor, setNewAuthor] = useState('');
  const [newUrl, setNewUrl] = useState('');
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState(null);

  useEffect(() => {
    blogService.getAll().then((blogs) => setBlogs(blogs));
  }, []);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogAppUser');
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
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
      setUser(user);
      setUsername('');
      setPassword('');
    } catch (exception) {
      setMessage('wrong username or password');
      setMessageType('error');
      setTimeout(() => {
        setMessage(null);
      }, 5000);
    }
  };

  const addBlog = async (event) => {
    event.preventDefault();

    try {
      const blogObject = {
        title: newTitle,
        author: newAuthor,
        url: newUrl,
      };
      const returnedBlog = await blogService.create(blogObject);
      setNewTitle('');
      setNewAuthor('');
      setNewUrl('');
      setBlogs(blogs.concat(returnedBlog));
      setMessage(
        `a new blog ${returnedBlog.title} by ${returnedBlog.author} added`
      );
      setMessageType('add-blog');
      setTimeout(() => setMessage(null), 5000);
    } catch (error) {
      setMessage(error.response.data.error);
      setMessageType('error');
      setTimeout(() => setMessage(null), 5000);
    }
  };

  const handleLogout = async (event) => {
    event.preventDefault();
    window.localStorage.clear();
    window.location.reload();
  };

  const LogoutButton = () => {
    return <button onClick={handleLogout}>logout</button>;
  };

  const Notification = ({ message, className }) => {
    if (message === null) {
      return null;
    }
    return <div className={className}>{message}</div>;
  };

  const loginForm = () => {
    return (
      <div>
        <h2>Log in to application</h2>
        <form onSubmit={handleLogin}>
          <div>
            username
            <input
              type='text'
              value={username}
              name='Username'
              onChange={({ target }) => setUsername(target.value)}
            />
          </div>
          <div>
            password
            <input
              type='password'
              value={password}
              name='Password'
              onChange={({ target }) => setPassword(target.value)}
            />
          </div>
          <button type='submit'>login</button>
        </form>
      </div>
    );
  };

  const handleTitleChange = (event) => {
    setNewTitle(event.target.value);
  };

  const handleAuthorChange = (event) => {
    setNewAuthor(event.target.value);
  };

  const handleUrlChange = (event) => {
    setNewUrl(event.target.value);
  };

  const blogForm = () => (
    <form onSubmit={addBlog}>
      <div>
        title: <input value={newTitle} onChange={handleTitleChange} />
      </div>
      <div>
        author: <input value={newAuthor} onChange={handleAuthorChange} />
      </div>
      <div>
        url: <input value={newUrl} onChange={handleUrlChange} />
      </div>
      <button type='submit'>create</button>
    </form>
  );

  return (
    <div>
      <h2>Blogs</h2>
      <Notification message={message} className={messageType} />
      {user === null ? (
        loginForm()
      ) : (
        <div>
          <p>
            {user.name} logged in <LogoutButton />
          </p>
          <h2>create new</h2>
          {blogForm()}
          {blogs.map((blog) => (
            <Blog key={blog.id} blog={blog} />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
