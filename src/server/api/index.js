const express = require("express");
const photoController = require("../controllers/photo");
const router = express.Router();

router.post("/photo", photoController.addPhoto);

module.exports = router;
