// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv/config");

const session = require('express-session');
const passport = require('passport');

// Passport initial setup
require('./config/passport');

// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

const app = express();

// Session settings: allows our app to maintain the sessions and our users in it
app.use(
    session({
        secret: 'some secret goes here',
        resave: true,
        saveUninitialized: false
    })
);

// To allow our app to use passport for auth
app.use(passport.initialize());
app.use(passport.session());

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);

// 👇 Start handling routes here
// Contrary to the views version, all routes are controlled from the routes/index.js
const indexRoutes = require("./routes");
app.use("/api", indexRoutes);

const authRoutes = require("./routes/auth.routes");
app.use("/api", authRoutes);

const callRouter = require("./routes/call.routes");
app.use("/api/", callRouter);

const postRouter = require('./routes/post.routes'); 
app.use('/api/', postRouter);




// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
