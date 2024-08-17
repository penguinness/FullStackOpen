import { useDispatch, useSelector } from 'react-redux';
import { initializeBlogs } from '../reducers/blogReducer';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, Paper } from '@mui/material';

const Blogs = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeBlogs());
  }, []);

  const blogs = useSelector((state) => state.blogs);

  console.log('blogs at Blogs.jsx', blogs);

  const sortedBlogs = [...blogs].sort((a, b) => b.likes - a.likes);

  console.log('sortedBlogs at Blogs.jsx', sortedBlogs);

  return (
    <Paper elevation={3} style={{ padding: 20 }}>
      <List>
        {sortedBlogs.map((blog) => (
          <ListItem key={blog.id}>
            <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default Blogs;
