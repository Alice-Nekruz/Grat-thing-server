// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv/config");

// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);


// 👇 Start handling routes here
// Contrary to the views version, all routes are controlled from the routes/index.js
const indexRoutes = require("./routes");
app.use("/api", indexRoutes);

const authRoutes = require("./routes/auth.routes");
app.use("/api", authRoutes);

const callRoutes = require("./routes/call.routes");
app.use("/api/", callRoutes);

const postRoutes = require('./routes/post.routes');
app.use('/api/', postRoutes);

const userRoutes = require('./routes/profile.routes');
app.use('/api/', userRoutes);

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);



//this is for testing
module.exports = app;
