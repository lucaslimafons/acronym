const { Router } = require('express');
const acronymController = require('../../controllers/acronym.controller');
const passport = require('passport');

const router = Router();

router.get('/', acronymController.findAll);
router.get('/random/:count', acronymController.findRandomly);
router.get('/:acronym', acronymController.findByAbbrev);
router.post('/', acronymController.create);
router.put('/:id', passport.authenticate('bearer', { session: false }), acronymController.update);
router.delete('/:id', passport.authenticate('bearer', { session: false }), acronymController.delete);

module.exports = router;
