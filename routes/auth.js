// routes/auth.js
const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  console.log('Login attempt with username:', username, 'and password:', password); // ✅ THÊM DÒNG NÀY TẠM THỜI

  if (username === 'admin@example.com' && password === '123456') {
    return res.json({ token: 'demo-token', role: 'admin@example.com' });
  } else {
    return res.status(401).json({ message: 'Sai thông tin đăng nhập' });
  }
});

module.exports = router;