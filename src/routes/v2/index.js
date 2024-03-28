const express = require('express');
const homePingConroller = require('../../controllers/home.controller');

const routes = express.Router();
router.get('/ping', homePingConroller);

module.exports = router;