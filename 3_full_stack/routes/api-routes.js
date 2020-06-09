const express = require("express");
const router = express.Router();
// const path = require("path");

router.get("/api/test", (req, res) => {
  res.json({ mes: "Hello from the API" });
});

router.get("/api/test2", (req, res) => {
  res.json({ mes: "This is the 2nd example!" });
});

module.exports = router;
