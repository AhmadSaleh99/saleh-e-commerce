const router = require("express").Router();

router.get("/userTest", (req, res) => {
  res.send("userTest is successfully created");
});

module.exports = router;
