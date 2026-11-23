const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Serve CSS, JavaScript and images
app.use(express.static(path.join(__dirname, "public")));

// Home page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "homepage.html"));
});

// About page
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "about.html"));
});

// hobbies page
app.get("/hobbies", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "hobbies.html"));
});

// achievements page
app.get("/achievement", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "achievement.html"));
});

//projects page
app.get("/projects", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "projects.html"));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
