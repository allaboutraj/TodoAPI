const express = require('express');
const homePingConroller = require('../../controllers/home.controller');
const todoRouter = require('./todo.routes');
const routes = express.Router();

router.use('/todos', todoRouter);
router.get('/ping', homePingConroller);

module.exports = router;