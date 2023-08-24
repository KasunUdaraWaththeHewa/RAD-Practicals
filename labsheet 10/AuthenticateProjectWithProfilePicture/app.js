const express = require('express');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const multer = require('multer');

const app = express();
const port = 3000;
const users = [];

class User {
  constructor(id, username, password, profilePicturePath) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.profilePicturePath = profilePicturePath;
  }
}

users.push(new User(1, 'user1', 'password1'));

app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: 'your-secret-key', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

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

app.get('/', (req, res) => {
  res.render('home', { user: req.user });
});

const authRoutes = require('./controllers/auth');
app.use(authRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
