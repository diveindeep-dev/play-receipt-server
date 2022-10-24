const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('music search api');
});

module.exports = router;
