const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port = 3000;

const list = ["Deepak", "kumar"];

app.get("/", (req, res) => {
  res.send(list);
});

app.post("/", (req, res, next) => {
  const { name } = req.body;
  list.push(name);
  res.send(`Added`);
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
