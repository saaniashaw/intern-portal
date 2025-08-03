const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Load dummy intern data
const interns = [
  {
    id: 1,
    name: "Saania Shaw",
    referralCode: "SAANIA123",
    totalDonations: 5000,
    rewards: "Gold Tier",
  },
  {
    id: 2,
    name: "John Doe",
    referralCode: "JOHN456",
    totalDonations: 3200,
    rewards: "Silver Tier",
  },
];

// API route to get intern by ID
app.get("/api/interns/:id", (req, res) => {
  const internId = parseInt(req.params.id);
  const intern = interns.find((i) => i.id === internId);
  if (!intern) {
    return res.status(404).json({ message: "Intern not found" });
  }
  res.json(intern);
});

// Root route for testing
app.get("/", (req, res) => {
  res.send("Intern Portal Backend is running.");
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
