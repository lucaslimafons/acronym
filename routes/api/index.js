const { Router } = require('express');
const acronym = require('./acronym.route');

// Define router..
const router = Router();

// controllers
router.use('/acronym' , acronym);

module.exports = router;
