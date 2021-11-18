const router = require("express").Router();
const isLoggedOut = require("../middleware/isLoggedOut");

/* GET home page */
router.get("/", isLoggedOut, (req, res, next) => {
  res.json("All good in here");
});

module.exports = router;
