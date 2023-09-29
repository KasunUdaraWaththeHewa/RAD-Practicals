const express = require('express');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb+srv://sandaresdf3070:4F6SbRZEdZith22n@cluster0.wlyjwpe.mongodb.net/?retryWrites=true&w=majority');

// Create a user schema and model
const User = mongoose.model('User', new mongoose.Schema({
    username: String,
    password: String,
}));

passport.use(new LocalStrategy(
    async (username, password, done) => {
        try {
            const user = await User.findOne({ username: username });

            if (!user) {
                return done(null, false, { message: 'Incorrect username.' });
            }

            if (!bcrypt.compareSync(password, user.password)) {
                return done(null, false, { message: 'Incorrect password.' });
            }

            return done(null, user);
        } catch (err) {
            return done(err);
        }
    }
));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id);
        done(null, user);
    } catch (err) {
        done(err);
    }
});

// Configure Express
app.use(express.urlencoded({ extended: false }));
app.use(session({ secret: 'narutouzumaki', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

// Define login and home routes
app.get('/', (req, res) => {
    if (req.isAuthenticated()) {
        res.send('Welcome ' + req.user.username + '<br><a href="/logout">Logout</a>');
    } else {
        res.redirect('./login.ejs');
    }
});

app.get('/login', (req, res) => {
    res.render('./login.ejs');
});

app.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'
})
);

app.get('/logout', (req, res) => {
    req.logout(() => {
        res.redirect('/login'); // Redirect to the home page after logging out
    });
});

app.get('/register', (req, res) => {
    res.render('./register.ejs');
});

app.post('/register', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Check if the username is already taken
        const existingUser = await User.findOne({ username: username });
        if (existingUser) {
            return res.status(400).redirect('./register.ejs');
        }

        // Create a new user
        const newUser = new User({ username: username, password: bcrypt.hashSync(password, 10) });

        await newUser.save();
        res.redirect('/login');

    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(5000, () => {
    console.log('Server started on http://localhost:3000');
});