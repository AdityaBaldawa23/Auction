const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");
const app = express();
const PORT = 5000;

const teamDataPath = path.join(__dirname, "data", "teamData.json");
const currentPlayerPath = path.join(__dirname, "data", "currentPlayer.json");

// Create currentPlayer.json if it doesn't exist
if (!fs.existsSync(currentPlayerPath)) {
  fs.writeFileSync(currentPlayerPath, JSON.stringify({}, null, 2));
}


app.use(cors());
app.use(bodyParser.json());

const { getAllPlayers } = require("./db.js"); // adjust path if needed

app.get("/api/players", async (req, res) => {
  try {
    const players = await getAllPlayers();

    if (!Array.isArray(players) || players.length === 0) {
      return res.status(404).json({ message: "No players found" });
    }

    res.status(200).json(players);
  } catch (err) {
    console.error("❌ Failed to get players:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});



app.post("/api/sell-player", (req, res) => {
  try {
    const { player, teamName, soldPoints } = req.body;

    const rawData = fs.readFileSync(teamDataPath);
    const teamData = JSON.parse(rawData);

    if (!teamData[teamName]) {
      return res.status(400).json({ message: "Team not found." });
    }

    const team = teamData[teamName];
    const playerCount = team.players.length;

    if (playerCount >= 8) {
      return res.status(400).json({ message: "⚠️ Team already has 8 players." });
    }

    const remainingPoints = 60000 - team.total_points;

    if (soldPoints > remainingPoints) {
      return res.status(400).json({ message: `⚠️ Not enough points. Max allowed: ${remainingPoints}` });
    }

    team.players.push({
      player_name: player.player_name,
      category: player.category,
      points: soldPoints,
      max_bid: remainingPoints - soldPoints
    });

    team.total_points += soldPoints;

    fs.writeFileSync(teamDataPath, JSON.stringify(teamData, null, 2));

    res.status(200).json({ message: "✅ Player sold and JSON updated." });
  } catch (err) {
    console.error("❌ Error:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

app.post("/api/set-current-player", (req, res) => {
  const currentPlayer = req.body;
  const currentPlayerPath = path.join(__dirname, "data", "currentPlayer.json");

  console.log(req.body);
  try {
    fs.writeFileSync(currentPlayerPath, JSON.stringify(currentPlayer, null, 2));
    res.status(200).json({ message: "✅ currentPlayer.json updated" });
  } catch (err) {
    console.error("❌ Failed to update currentPlayer.json:", err);
    res.status(500).json({ error: "Failed to write current player" });
  }
});



app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});

app.get("/api/teams", (req, res) => {
  try {
    const rawData = fs.readFileSync(teamDataPath);
    const teamData = JSON.parse(rawData);
    res.status(200).json(teamData);
  } catch (err) {
    res.status(500).json({ message: "Failed to read teams", error: err.message });
  }
});


app.post("/api/reset", (req, res) => {
  const defaultData = {
    TeamA: { players: [], total_points: 0 },
    TeamB: { players: [], total_points: 0 },
    TeamC: { players: [], total_points: 0 },
    TeamD: { players: [], total_points: 0 }
  };

  fs.writeFile(teamDataPath, JSON.stringify(defaultData, null, 2), (err) => {
    if (err) {
      console.error("❌ Failed to reset teamData:", err);
      return res.status(500).json({ message: "Reset failed." });
    }

    console.log("🔁 teamData.json has been reset.");
    return res.status(200).json({ message: "Reset successful." });
  });
});

app.get("/api/current-player", (req, res) => {
  const filePath = path.join(__dirname, "data", "currentPlayer.json");

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("❌ Failed to read currentPlayer.json:", err);
      return res.status(500).json({ error: "Failed to read current player." });
    }

    try {
      const player = JSON.parse(data);
      res.json(player);
    } catch (parseErr) {
      console.error("❌ JSON parse error in currentPlayer.json:", parseErr);
      res.status(500).json({ error: "Invalid JSON format in currentPlayer.json" });
    }
  });
});
