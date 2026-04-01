const express = require("express");
const app = express();

app.get("/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date() });
});

app.get("/api/activities", (req, res) => {
  res.json([
    { id: 1, activity: "running", duration: 30 },
    { id: 2, activity: "cycling", distance: 15 },
  ]);
});

app.get("/api/users", (req, res) => {
  res.json([{ id: 1, name: "Alice" }]);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`VitalSync API on :${PORT}`));
