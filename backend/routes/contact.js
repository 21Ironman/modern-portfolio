const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { name, email, subject, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: 'Name, email, and message are required.' });
  }

  // Here you could add logic to send an email (e.g., using Nodemailer or Resend)
  // For now, we will just log it to the terminal.
  console.log('\n--- New Contact Message Received ---');
  console.log(`From: ${name} <${email}>`);
  console.log(`Subject: ${subject || 'No Subject'}`);
  console.log(`Message:\n${message}`);
  console.log('------------------------------------\n');

  // Respond with success
  res.status(200).json({ success: true, message: 'Message received successfully!' });
});

module.exports = router;
