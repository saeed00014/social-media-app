const express = require("express");
const cors = require("cors");
const multer = require("multer");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");
require("dotenv").config();
const authRoutes = require("./api/routes/auths.js");
const userRoutes = require("./api/routes/users.js");
const postRoutes = require("./api/routes/posts.js");
const commentRoutes = require("./api/routes/comments.js");
const likeRoutes = require("./api/routes/likes.js");
const messagesRoute = require("./api/routes/messages.js");
const friendRuotes = require("./api/routes/friends.js");
// const productRuotes = require("./api/routes/product.js");  

const app = express();
app.use(cors());
//middlewares
  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Credentials", true);
    next();
  });
  app.use(express.json());
  app.use(bodyParser.json());
  app.use(cors());
  app.use(cookieParser());

  app.use("/auth", authRoutes);
  app.use("/users", userRoutes);
  app.use("/posts", postRoutes);
  app.use("/comments", commentRoutes);
  app.use("/likes", likeRoutes);
  app.use("/messages", messagesRoute);
  app.use("/friends", friendRuotes);

module.exports = app