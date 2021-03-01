const express = require("express");
const app = express();
const path = require("path");
const serverless = require("serverless-http");
const fs = require("fs");
const router = express.Router();

router.get("/", function(request, response) {
  console.log("Home page visited!");
  const filePath = path.resolve(__dirname, "../build", "index.html");
  fs.readFile(filePath, "utf8", function(err, data) {
    if (err) {
      return console.log(err);
    }
    data = data.replace(/\$OG_TITLE/g, "Home Page");
    data = data.replace(/\$OG_DESCRIPTION/g, "Home page description");
    result = data.replace(/\$OG_IMAGE/g, "https://i.imgur.com/V7irMl8.png");
    response.send(result);
  });
});

router.get("/about", function(request, response) {
  console.log("About page visited!");
  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", function(err, data) {
    if (err) {
      return console.log(err);
    }
    data = data.replace(/\$OG_TITLE/g, "About Page");
    data = data.replace(/\$OG_DESCRIPTION/g, "About page description");
    result = data.replace(/\$OG_IMAGE/g, "https://i.imgur.com/V7irMl8.png");
    response.send(result);
  });
});

router.get("/contact", function(request, response) {
  console.log("Contact page visited!");
  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", function(err, data) {
    if (err) {
      return console.log(err);
    }
    data = data.replace(/\$OG_TITLE/g, "Contact Page");
    data = data.replace(/\$OG_DESCRIPTION/g, "Contact page description");
    result = data.replace(/\$OG_IMAGE/g, "https://i.imgur.com/V7irMl8.png");
    response.send(result);
  });
});

router.use(express.static(path.resolve(__dirname, "./build")));

// app.use('/.netlify/functions/server', router);

router.get("*", function(request, response) {
  const filePath = path.resolve(__dirname, "../build", "index.html");
  response.sendFile(filePath);
});

module.exports = app;
