var express = require("express");
var router = express.Router();

const sessions = [];

router.post("/", (req, res) => {
  const sessionId = sessions.length;
  sessions.push({});
  res.json({ sessionId });
});

router.get("/:id", (req, res) => {
  res.send(sessions[req.params.id]);
});

router.put("/:id", (req, res) => {
  sessions[req.params.id] = req.body;
  res.status(200).end();
});

module.exports = router;
