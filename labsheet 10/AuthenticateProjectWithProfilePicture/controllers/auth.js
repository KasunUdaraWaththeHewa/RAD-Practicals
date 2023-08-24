const express = require('express');
const passport = require('passport');
const User = require('../models/user');
const multer = require('multer');

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + file.originalname);
  }
});

const upload = multer({ storage: storage });

router.get('/login', (req, res) => {
  res.render('login');
});

router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login'
}));

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

router.get('/register', (req, res) => {
  res.render('register');
});

router.post('/register', upload.single('profilePicture'), (req, res) => {
  const { username, password } = req.body;
  const profilePicturePath = req.file ? req.file.path : null;
  const newUser = new User(users.length + 1, username, password, profilePicturePath);
  users.push(newUser);
  res.redirect('/login');
});

module.exports = router;
