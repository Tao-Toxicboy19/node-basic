const express = require("express");

const router = express.Router();

router.get("/auth", (req, res) => {
  return res.json({ message: "Hello Auth" });
});

module.exports = router;
