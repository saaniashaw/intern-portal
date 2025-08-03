const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());

app.get('/api/intern', (req, res) => {
  res.json({
    name: "Saania Shaw",
    referralCode: "saania2025",
    totalDonations: 7500,
    rewards: ["T-shirt", "Certificate", "Amazon Voucher"]
  });
});

app.get('/api/leaderboard', (req, res) => {
  fs.readFile('./leaderboard.json', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Could not load leaderboard data' });
    }
    res.json(JSON.parse(data));
  });
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
