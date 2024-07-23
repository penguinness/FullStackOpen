const { test, after, beforeEach } = require('node:test');
const assert = require('node:assert');
const mongoose = require('mongoose');
const supertest = require('supertest');
const app = require('../app');
const api = supertest(app);

const helper = require('./test_helper');

const Blog = require('../models/blog');

beforeEach(async () => {
  await Blog.deleteMany({});

  await Blog.insertMany(helper.initialBlogs);
});

test('blogs are returned as json', async () => {
  await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/);
});

test('there are six blogs', async () => {
  const response = await api.get('/api/blogs');

  assert.strictEqual(response.body.length, 6);
});

test('the unique identifier property of blog posts is named id', async () => {
  const response = await api.get('/api/blogs');
  const blogs = response.body;

  blogs.forEach((blog) => {
    assert.notStrictEqual(blog.id, undefined);
    assert.strictEqual(blog._id, undefined);
  });
});

test('a valid blog can be added ', async () => {
  const newBlog = {
    title: 'Random Blog',
    author: 'Rando',
    url: 'https://randomblog.com',
    likes: 24,
  };

  await api
    .post('/api/blogs')
    .send(newBlog)
    .expect(201)
    .expect('Content-Type', /application\/json/);

  const response = await api.get('/api/blogs');

  const titles = response.body.map((r) => r.title);

  assert.strictEqual(response.body.length, helper.initialBlogs.length + 1);

  assert(titles.includes('Random Blog'));
});

test('a blog missing likes is default to 0', async () => {
  const newBlog = {
    title: 'Random Blog',
    author: 'Rando',
    url: 'https://randomblog.com',
  };

  const response = await api
    .post('/api/blogs')
    .send(newBlog)
    .expect(201)
    .expect('Content-Type', /application\/json/);

  assert.strictEqual(response.body.likes, 0);
});

test('blog without title is not added', async () => {
  const newBlog = {
    author: 'Rando',
    url: 'https://randomblog.com',
    likes: 0,
  };

  await api.post('/api/blogs').send(newBlog).expect(400);

  const response = await api.get('/api/blogs');

  assert.strictEqual(response.body.length, helper.initialBlogs.length);
});

test('blog without url is not added', async () => {
  const newBlog = {
    title: 'Random Blog',
    author: 'Rando',
    likes: 0,
  };

  await api.post('/api/blogs').send(newBlog).expect(400);

  const response = await api.get('/api/blogs');

  assert.strictEqual(response.body.length, helper.initialBlogs.length);
});

test('a blog with valid id can be deleted', async () => {
  const blogsAtStart = await helper.blogsInDb();
  const blogToDelete = blogsAtStart[0];

  await api.delete(`/api/blogs/${blogToDelete.id}`).expect(204);

  const blogsAtEnd = await helper.blogsInDb();

  assert.strictEqual(blogsAtEnd.length, helper.initialBlogs.length - 1);

  const titles = blogsAtEnd.map((r) => r.title);
  assert(!titles.includes(blogToDelete.title));
});

after(async () => {
  await mongoose.connection.close();
});
