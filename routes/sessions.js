var express = require("express");
var router = express.Router();

const sessions = [];

router.post("/", (req, res) => {
  const sessionId = Math.floor(Math.random() * 10000);
  res.json({ sessionId });
});

router.get("/:id/raw", (req, res) => {
  res.send(sessions[req.params.id].data);
});

router.get("/:id", (req, res) => {
  res.send(sessions[req.params.id]);
});

router.put("/:id", (req, res) => {
  sessions[req.params.id] = req.body;
  res.status(200).end();
});

module.exports = router;
