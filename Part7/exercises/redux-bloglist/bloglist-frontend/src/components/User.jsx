import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { initializeUsers } from '../reducers/usersReducer';
import { useEffect } from 'react';
import { Typography, List, ListItem, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

const User = () => {
  const users = useSelector((state) => state.users);
  const id = useParams().id;
  const user = users.find((u) => u.id === String(id));
  const dispatch = useDispatch();

  useEffect(() => {
    if (users.length === 0) {
      dispatch(initializeUsers());
    }
  }, [dispatch, users.length]);

  if (!user) {
    return null;
  }

  console.log(user.blogs);
  console.log(user.blogs.length);

  return (
    <Paper style={{ padding: '10px', marginTop: '10px' }}>
      <Typography variant='h4' gutterBottom sx={{ fontFamily: 'initial' }}>
        {user.name}
      </Typography>
      <Typography variant='h6' gutterBottom sx={{ fontFamily: 'initial' }}>
        Added Blogs
      </Typography>
      <List>
        {user.blogs.length === 0 ? (
          <Typography variant='body1'>No blogs created</Typography>
        ) : (
          user.blogs.map((blog) => (
            <ListItem key={blog.id}>
              <Typography variant='body2'>
                <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
              </Typography>
            </ListItem>
          ))
        )}
      </List>
    </Paper>
  );
};

export default User;
