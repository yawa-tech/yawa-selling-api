/* eslint-disable no-unused-vars */
const express = require('express');

// eslint-disable-next-line import/no-unresolved
const auth = require('./auth');
const session = require('./session');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

router.use('/auth', auth);
router.use('/session', session);
module.exports = router;
