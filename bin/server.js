const express = require("express");
const app = express();
const port = 3000;

let array = [];
let i = 0;

setInterval(() => {
  array.push({ data: i++, time: Date.now() });
}, Math.random() * 10000);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/", (req, res) => {
  // res.setHeader("Access-Control-Allow-Origin", "http://localhost:9000");
  // luba kõik aadressid:
  // res.setHeader("Access-Control-Allow-Origin", "*");
  res.json({ joke: "Knock Knock" });
});

app.get("/polling", (req, res) => {
  let newInfo = array.filter((data) => data.time >= req.query.time);
  res.json(newInfo);
});

app.get("/longpolling", async (req, res) => {
  let newInfo = [];
  console.log(newInfo.length === 0);

  let interval = setInterval(() => {
    newInfo = array.filter((data) => data.time >= req.query.time);
    if (newInfo.length > 0) {
      res.json(newInfo);
      clearInterval(interval);
    }
  }, 1000);
});

app.get("/sse", async (req, res) => {
  let newInfo = [];
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-store");
  let lastTime = 0;
  let interval = setInterval(() => {
    newInfo = array.filter((data) => data.time >= lastTime);
    if (newInfo.length > 0) {
      res.write("event: data\ndata:" + JSON.stringify(newInfo) + "\n\n");
    }
    lastTime = Date.now();
  }, 1000);
});

app.listen(port, () => {
  console.log(`Example app listening on port http:\\localhost:${port}`);
});
