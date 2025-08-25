const express = require("express");

const app = express();
const PORT = 8383;

app.get("/", (req, res) => {
  res.sendStatus(200);
});

app.get("/dashboard", (req, res) => {
  res.send("hi");
});
app.listen(PORT, (req, res) => {
  console.log(`server has started at ${PORT}`);
});
