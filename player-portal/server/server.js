const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");
const app = express();
const PORT = 5000;

const teamDataPath = path.join(__dirname, "data", "teamData.json");
const currentPlayerPath = path.join(__dirname, "data", "currentPlayer.json");

// ✅ Create currentPlayer.json if it doesn't exist
if (!fs.existsSync(currentPlayerPath)) {
  fs.writeFileSync(currentPlayerPath, JSON.stringify({}, null, 2));
}

// ✅ Set up CORS
const allowedOrigins = [
  "https://auction-lilac-seven.vercel.app", // your Vercel frontend
  "http://localhost:3000", // local dev
];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

app.use(bodyParser.json());

// ✅ Import DB function
const { getAllPlayers } = require("./db.js"); // adjust path if needed

// ✅ Get all players
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

// ✅ Sell player endpoint
app.post("/api/sell-player", (req, res) => {
  try {
    const { player, teamName, soldPoints, isEdit, previousTeam } = req.body;

    const rawData = fs.readFileSync(teamDataPath);
    const teamData = JSON.parse(rawData);

    if (!teamData[teamName]) {
      return res.status(400).json({ message: "New team not found." });
    }

    // If editing, remove the player from the previous team
    if (
      isEdit &&
      previousTeam &&
      previousTeam !== teamName &&
      teamData[previousTeam]
    ) {
      const prevTeam = teamData[previousTeam];
      const prevIndex = prevTeam.players.findIndex(
        (p) => p.player_id === player.player_id
      );

      if (prevIndex !== -1) {
        const prevPoints = prevTeam.players[prevIndex].points;
        prevTeam.players.splice(prevIndex, 1);
        prevTeam.total_points -= prevPoints;
      }
    }

    const team = teamData[teamName];
    const playerIndex = team.players.findIndex(
      (p) => p.player_id === player.player_id
    );

    if (playerIndex !== -1) {
      // If player already exists in this team (re-edit within same team)
      const prevPoints = team.players[playerIndex].points;
      team.players[playerIndex] = {
        player_id: player.player_id,
        player_name: player.player_name,
        category: player.category,
        points: soldPoints,
        max_bid: 0,
      };
      team.total_points = team.total_points - prevPoints + soldPoints;
    } else {
      if (!isEdit && team.players.length >= 11) {
        return res
          .status(400)
          .json({ message: "⚠️ Team already has 11 players." });
      }

      const remainingPoints = 60000 - team.total_points;
      if (soldPoints > remainingPoints) {
        return res
          .status(400)
          .json({
            message: `⚠️ Not enough points. Max allowed: ${remainingPoints}`,
          });
      }

      const basePointsPerPlayer = 1000;
      const maxPlayers = 11;
      const playersRemaining = maxPlayers - team.players.length - 1; // -1 because we’re adding 1 now

      const remainingAfterThisPurchase = 60000 - team.total_points - soldPoints;
      const maxBid = Math.max(
        remainingAfterThisPurchase - playersRemaining * basePointsPerPlayer,
        0
      );

      // Add player to new team
      team.players.push({
        player_id: player.player_id,
        player_name: player.player_name,
        category: player.category,
        points: soldPoints,
        max_bid: maxBid,
      });

      team.total_points += soldPoints;
    }

    fs.writeFileSync(teamDataPath, JSON.stringify(teamData, null, 2));
    res.status(200).json({ message: "✏️ Player transferred & updated." });
  } catch (err) {
    console.error("❌ Error:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// ✅ Set current player
app.post("/api/set-current-player", (req, res) => {
  const currentPlayer = req.body;

  try {
    fs.writeFileSync(currentPlayerPath, JSON.stringify(currentPlayer, null, 2));
    res.status(200).json({ message: "✅ currentPlayer.json updated" });
  } catch (err) {
    console.error("❌ Failed to update currentPlayer.json:", err);
    res.status(500).json({ error: "Failed to write current player" });
  }
});

// ✅ Get all teams
app.get("/api/teams", (req, res) => {
  try {
    const rawData = fs.readFileSync(teamDataPath);
    const teamData = JSON.parse(rawData);
    res.status(200).json(teamData);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to read teams", error: err.message });
  }
});

// ✅ Reset all teams
app.post("/api/reset", (req, res) => {
  const defaultData = {
    TeamA: { players: [], total_points: 0 },
    TeamB: { players: [], total_points: 0 },
    TeamC: { players: [], total_points: 0 },
    TeamD: { players: [], total_points: 0 },
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

// ✅ Get current player
app.get("/api/current-player", (req, res) => {
  fs.readFile(currentPlayerPath, "utf8", (err, data) => {
    if (err) {
      console.error("❌ Failed to read currentPlayer.json:", err);
      return res.status(500).json({ error: "Failed to read current player." });
    }

    try {
      const player = JSON.parse(data);
      res.json(player);
    } catch (parseErr) {
      console.error("❌ JSON parse error in currentPlayer.json:", parseErr);
      res
        .status(500)
        .json({ error: "Invalid JSON format in currentPlayer.json" });
    }
  });
});
app.get("/api/unsold-players", async (req, res) => {
  try {
    const allPlayers = await getAllPlayers();

    const teamRawData = fs.readFileSync(teamDataPath);
    const teamData = JSON.parse(teamRawData);

    // Flatten all sold player names
    const soldPlayersSet = new Set();
    Object.values(teamData).forEach((team) => {
      team.players.forEach((player) => {
        soldPlayersSet.add(player.player_name);
      });
    });

    // Filter unsold players
    const unsoldPlayers = allPlayers.filter(
      (player) => !soldPlayersSet.has(player.player_name)
    );

    // Group by category
    const grouped = { "A+": [], "A": [], "35+": [], "45+": [], "Female": []};
    unsoldPlayers.forEach((player) => {
      const cat = player.category;
      if (grouped[cat]) {
        grouped[cat].push(player);
      }
    });

    res.status(200).json(grouped);
  } catch (err) {
    console.error("❌ Failed to get unsold players:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

app.post("/api/revert-last-sold", (req, res) => {
  const players = JSON.parse(fs.readFileSync("./data/playerData.json"));
  const teamData = JSON.parse(fs.readFileSync("./data/teamData.json"));
  let currentPlayer = JSON.parse(fs.readFileSync("./data/currentPlayer.json"));

  const lastSoldPlayerIndex = [...players]
    .reverse()
    .findIndex((p) => p.current_status === "Sold");

  if (lastSoldPlayerIndex === -1) {
    return res.json({ success: false, message: "No sold player to revert!" });
  }

  const index = players.length - 1 - lastSoldPlayerIndex;
  const lastSoldPlayer = players[index];

  const team = lastSoldPlayer.sold_to;
  const soldPoints = parseInt(lastSoldPlayer.sold_points);

  // Refund points and remove player
  teamData[team].players = teamData[team].players.filter(
    (id) => id !== lastSoldPlayer.player_id
  );
  teamData[team].current_points += soldPoints;

  const playersBought = teamData[team].players.length;
  const playersRemaining = teamData[team].total_players - playersBought;
  teamData[team].max_bid =
    playersRemaining > 0
      ? teamData[team].current_points - (playersRemaining - 1)
      : 0;

  // Revert player status
  lastSoldPlayer.current_status = "unsold";
  delete lastSoldPlayer.sold_to;
  delete lastSoldPlayer.sold_points;

  // Update current player to show again
  fs.writeFileSync(
    "./data/currentPlayer.json",
    JSON.stringify(lastSoldPlayer, null, 2)
  );

  players[index] = lastSoldPlayer;

  fs.writeFileSync("./data/playerData.json", JSON.stringify(players, null, 2));
  fs.writeFileSync("./data/teamData.json", JSON.stringify(teamData, null, 2));

  res.json({ success: true, player: lastSoldPlayer });
});

// ✅ Start server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
