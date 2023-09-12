const express = require("express");

const {
  readController,
  listController,
  createController,
  deleteController,
} = require("../Controllers/product.controller");

const router = express.Router();

router.get("/product", listController);
router.get("/product/:id", readController);
router.post("/product", createController);
router.put("/product/:id", createController);
router.delete("/product/:id", deleteController);

module.exports = router;
