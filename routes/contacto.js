const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('contacto', { title: 'Contacto' });
});

module.exports = router;
