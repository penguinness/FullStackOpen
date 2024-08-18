import { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';

const BlogForm = ({ createBlog }) => {
  const [newTitle, setNewTitle] = useState('');
  const [newAuthor, setNewAuthor] = useState('');
  const [newUrl, setNewUrl] = useState('');

  const addBlog = async (event) => {
    event.preventDefault();
    const newBlog = await createBlog({
      title: newTitle,
      author: newAuthor,
      url: newUrl,
    });

    console.log('newTitle is', newTitle);
    console.log('newAuthor is', newAuthor);
    console.log('newBlog is', newBlog);

    setNewTitle('');
    setNewAuthor('');
    setNewUrl('');
  };

  return (
    <Box component='form' onSubmit={addBlog} sx={{ mt: 2 }}>
      <Typography variant='h6' gutterBottom>
        Create a new Blog
      </Typography>
      <TextField
        label='Title'
        value={newTitle}
        onChange={(event) => setNewTitle(event.target.value)}
        fullWidth
        margin='normal'
        data-testid='title-input'
      />
      <TextField
        label='Author'
        value={newAuthor}
        onChange={(event) => setNewAuthor(event.target.value)}
        fullWidth
        margin='normal'
        data-testid='author-input'
      />
      <TextField
        label='URL'
        value={newUrl}
        onChange={(event) => setNewUrl(event.target.value)}
        fullWidth
        margin='normal'
        data-testid='url-input'
      />
      <Button type='submit' variant='contained' color='primary' sx={{ mt: 2 }}>
        Create
      </Button>
    </Box>
  );
};

export default BlogForm;
