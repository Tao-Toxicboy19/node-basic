const express = require("express");

const router = express.Router();

router.get("/product", (req, res) => {
  return res.json({ message: "Hello" });
});

router.get("/product/:id", (req, res) => {
  return res.json({ message: "Hello" });
});

router.post("/product", (req, res) => {
  return res.json({ message: "Hello POST" });
});

module.exports = router;
