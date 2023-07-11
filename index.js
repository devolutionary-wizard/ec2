const express = require("express");

const app = express();

app.get("/", (req, res) => res.send("It worked"));

let item = [
  { id: 1, title: "ReactJS" },
  { id: 2, title: "NextJS" },
  { id: 3, title: "React Native" },
];

app.get("/test", (req, res) => res.json(item));
app.post("/add", (req, res) => {
  item.push({ id: 4, title: "NodeJS" });
  return res.json(item);
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
