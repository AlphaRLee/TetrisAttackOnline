var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function(req, res, next) {
	// res.send('respond with a resource');

	// TODO Delete this dummy example from https://daveceddia.com/create-react-app-express-backend/
	res.json([
		{
			id: 1,
			username: "samsepi0l"
		},
		{
			id: 2,
			username: "D0loresH4ze"
		}
	]);
});

module.exports = router;
