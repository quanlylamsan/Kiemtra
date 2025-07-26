// routes/auth.js
const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
  // ✅ Thay đổi username thành email ở đây
  const { email, password } = req.body; 
  console.log('Login attempt with email:', email, 'and password:', password); // Log email thay vì username

  if (email === 'admin@example.com' && password === '123456') { // So sánh với email
    return res.json({ token: 'demo-token', role: 'admin@example.com' });
  } else {
    return res.status(401).json({ message: 'Sai thông tin đăng nhập' });
  }
});

module.exports = router;