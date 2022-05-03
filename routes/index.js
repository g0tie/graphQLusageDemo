var express = require('express');
var router = express.Router();
const controller = require("../controllers/mainController")

/* GET home page. */
router.get('/characters', controller.getCharacterList);

router.get('/character/:id', controller.getCharacter);

router.get('/locations', controller.getLocationsList);

router.get('/location/:id', controller.getLocationDetails);

module.exports = router;
