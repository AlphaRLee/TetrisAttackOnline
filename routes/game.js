var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function(req, res, next) {
	res.json({
		name: "game",
		description: "Game logic goes in here eventually"
	});
});

module.exports = router;
