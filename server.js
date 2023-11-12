// server.js

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Sample in-memory storage for posts
let posts = [];

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the Posts Management Page');
});

// Task 1: Posts management page
app.get('/posts', (req, res) => {
  res.json(posts);
});

app.post('/posts', (req, res) => {
  const { title, description, author } = req.body;
  const newPost = { title, description, author };
  posts.push(newPost);
  res.json(newPost);
});

app.put('/posts/:id', (req, res) => {
  const postId = req.params.id;
  const { title, description, author } = req.body;
  const updatedPost = { title, description, author };
  posts[postId] = updatedPost;
  res.json(updatedPost);
});

app.delete('/posts/:id', (req, res) => {
  const postId = req.params.id;
  posts = posts.filter((post, index) => index != postId);
  res.send('Post deleted successfully');
});

// Task 2: Storing the posts (in-memory approach)
app.get('/store-posts', (req, res) => {
  // Display the in-memory stored posts
  res.json(posts);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
