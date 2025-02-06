const express = require('express');
const router = express.Router();

router.get('/contact', (req, res) => {
  res.json({ phone: '+3800000000', instagram: 'https://instagram.com/yourclinic' });
});

module.exports = router;