const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse JSON and form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB connection
mongoose.connect('mongodb+srv://user1:user123@cluster0.aeqomso.mongodb.net/DATABASE?retryWrites=true&w=majority&appName=DATABASE', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

// Define schema and model
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  workercode: String,
 email: String
 

});

const User = mongoose.model('User', userSchema);

// Route to handle signup form submission
// Route to handle signup form submission
app.post('/signup', (req, res) => {
    const { username, password,email,workercode } = req.body;
  
    const newUser = new User({ username, password,email,workercode });
  
    newUser.save()
      .then(() => {
        res.status(200).send('User created successfully.');
      })
      .catch((err) => {
        console.error('Error creating user:', err);
        res.status(500).send('Error creating user.');
      });
  });
  
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });