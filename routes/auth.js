const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === 'admin' && password === '123456') {
    return res.json({ token: 'demo-token', role: 'admin' });
  }

  return res.status(401).json({ message: 'Sai thông tin đăng nhập' });
});

module.exports = router;
