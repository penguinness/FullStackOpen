import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { likeBlog, updateBlog } from '../reducers/blogReducer';
import { setComment, clearComment } from '../reducers/commentReducer';
import blogService from '../services/blogs';
import {
  setNotification,
  clearNotification,
} from '../reducers/notificationReducer';
import {
  Paper,
  Typography,
  Button,
  TextField,
  List,
  ListItem,
} from '@mui/material';

const Blog = () => {
  const blogs = useSelector((state) => state.blogs);
  const id = useParams().id;
  const blog = blogs.find((b) => b.id === String(id));
  const comment = useSelector((state) => state.comment);
  const dispatch = useDispatch();

  console.log('blogs at Blog.jsx:', blogs);

  if (!blog) {
    return null;
  }

  const handleLike = () => {
    try {
      dispatch(likeBlog(blog));
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

  const handleComment = async () => {
    try {
      const newComment = {
        content: comment,
      };
      const updatedBlog = await blogService.addComment(blog.id, newComment);
      dispatch(updateBlog(updatedBlog));
      dispatch(clearComment());
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

  return (
    <Paper style={{ padding: '10px', marginTop: '10px' }}>
      <Typography variant='h5' gutterBottom data-testid='blog-title'>
        {blog.title}
      </Typography>
      <Typography variant='subtitle1' color='textSecondary'>
        {blog.author}
      </Typography>
      <Typography variant='body1' color='textPrimary'>
        <a href={blog.url} target='_blank' rel='noopener noreferrer'>
          {blog.url}
        </a>
      </Typography>
      <Typography variant='body1' color='textPrimary'>
        {blog.likes}
      </Typography>
      <Button variant='contained' onClick={handleLike}>
        Like
      </Button>
      <Typography variant='body2' color='textSecondary'>
        {blog.user.name}
      </Typography>
      <TextField
        label='Add a comment'
        variant='outlined'
        fullWidth
        value={comment}
        onChange={(e) => dispatch(setComment(e.target.value))}
      />
      <Button
        variant='contained'
        onClick={handleComment}
        style={{ marginTop: '10px' }}
      >
        Add Comment
      </Button>
      <Typography variant='h6' gutterBottom>
        Comments
      </Typography>
      <List>
        {blog.comments.map((comment) => (
          <ListItem key={blog.comments.indexOf(comment)}>{comment}</ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default Blog;
