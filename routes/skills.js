const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('skills', { title: 'Skills' });
});

module.exports = router;
