/* eslint-disable no-unused-vars */
const express = require('express');

// eslint-disable-next-line import/no-unresolved
const auth = require('./auth');
const session = require('./session');

const trajet = require('./trajet');

const tickets = require('./tickets');
const controles = require('./control');
const rentals = require('./rentals');
// eslint-disable-next-line import/no-unresolved
const fees = require('./fees');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

router.use('/auth', auth);
router.use('/session', session);
router.use('/session/end', session);
router.use('/trajet', trajet);
router.use('/trajet/add', trajet);
router.use('/tickets', tickets);
router.use('/controles', controles);
router.use('/rentals', rentals);
router.use('/fees', fees);
router.use('/fees/delete', fees);
router.use('/rentals/update', rentals);
module.exports = router;
