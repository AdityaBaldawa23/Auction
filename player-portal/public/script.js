let shuffledPlayers = [];
let currentIndex = 0;
let reAuctionList = [];
let isReAuction = false;
let reAuctionIndex = 0;
let lastSoldInfo = null; 
let rendering = false;

// Check saved progress
const savedPlayers = localStorage.getItem("remainingPlayers");
if (savedPlayers) {
  shuffledPlayers = JSON.parse(savedPlayers);
  showNextPlayer();
} else {
  fetch("https://auction-ve9y.onrender.com/api/players")
    .then((res) => res.json())
    .then((players) => {
      players = players.flat();

      // Step 1: Categorize based on new categories
      const categories = {
        "A+": [],
        "Open": [],
        "35+": [],
        "45+": [],
        "Female": [],
      };

      players.forEach((p) => {
        if (p.category === "A+") categories["A+"].push(p);
        else if (p.category === "Open") categories["Open"].push(p);
        else if (p.category === "35+") categories["35+"].push(p);
        else if (p.category === "45+") categories["45+"].push(p);
        else if (p.gender === "Female") categories["Female"].push(p);
      });

      // Step 2: Shuffle each category
      for (let key in categories) {
        categories[key].sort(() => 0.5 - Math.random());
      }

      // Step 3: Define pattern and pointer
      const sequencePattern = ["A+", "Open", "35+", "45+", "Female"];
      let patternIndex = 0;

      // Step 4: Build shuffledPlayers based on pattern
      while (
        categories["A+"].length ||
        categories["Open"].length ||
        categories["35+"].length ||
        categories["45+"].length ||
        categories["Female"].length
      ) {
        const currentCategory =
          sequencePattern[patternIndex % sequencePattern.length];
        patternIndex++;

        if (categories[currentCategory].length > 0) {
          shuffledPlayers.push(categories[currentCategory].shift());
        }
      }

      localStorage.setItem("remainingPlayers", JSON.stringify(shuffledPlayers));
      showNextPlayer();
    });
}


function showNextPlayer() {
  if (rendering) return; // ✅ Moved to top
  rendering = true;

  console.log("🔁 showNextPlayer() called");
  const container = document.getElementById("playerContainer");
  container.innerHTML = "";

  let player;

  if (!isReAuction) {
    console.log("🔁 Starting re-auction with players:", reAuctionList);
    if (currentIndex >= shuffledPlayers.length) {
      if (reAuctionList.length > 0) {
        container.innerHTML = `<h2 style="color: orange;">🔁 Normal auction complete.</h2><p>Click the button or press Enter to begin Re-Auction Round.</p>`;
        document.getElementById("startReauctionBtn").style.display = "inline-block";
        document.addEventListener("keydown", handleReauctionKey);
        rendering = false; // ✅ Reset here before return
        return;
      } else {
        container.innerHTML = `<h2 style="color: green;">✅ Auction Completed! No players for re-auction.</h2>`;
        rendering = false; // ✅ Reset here before return
        return;
      }
    }

    player = shuffledPlayers[currentIndex++];
  } else {
    if (reAuctionIndex >= reAuctionList.length) {
      container.innerHTML = `<h2 style="color: green;">✅ Re-Auction Completed! All players processed.</h2>`;
      rendering = false; // ✅ Reset here before return
      return;
    }
    player = reAuctionList[reAuctionIndex++];
  }

  console.log("Calling renderPlayerCard for player:", player);
  renderPlayerCard(player);

  rendering = false;
}


function startReauction() {
  isReAuction = true;
  reAuctionIndex = 0;
  document.getElementById("startReauctionBtn").style.display = "none";
  document.removeEventListener("keydown", handleReauctionKey);
  showNextPlayer();
}

function handleReauctionKey(e) {
  if (e.key === "Enter" || e.key === " ") {
    startReauction();
  }
}

document
  .getElementById("startReauctionBtn")
  .addEventListener("click", startReauction);

function renderPlayerCard(player) {
  const container = document.getElementById("playerContainer");
  container.innerHTML = "";

  console.log("Current player being shown:", player);
  // 🔥 Send current player to server so it can be shown in team.html
  fetch("https://auction-ve9y.onrender.com/api/set-current-player", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(player),
  }).catch((err) => console.error("Failed to update currentPlayer.json:", err));

  const layout = document.createElement("div");
  layout.className = "player-box-layout";

  const img = document.createElement("img");
  img.src =
    player.photo !== "N/A"
      ? player.photo
      : "https://via.placeholder.com/200x200?text=Player";
  img.alt = player.player_name;

  const details = document.createElement("div");
  details.className = "player-details";

  const boxes = [
    `Name:\t ${player.player_name}`,
    `Category:\t ${player.category}`,
    `District:\t ${player.previous_team}`,
    `Age:\t ${player.age}`,
    `Status:\t ${player.current_status}`,
    `Achievements:\t ${player.achievements}`,
  ];

  boxes.forEach((text) => {
    const box = document.createElement("div");
    box.className = "detail-box";
    box.textContent = text;
    details.appendChild(box);
  });

  const soldBtn = document.createElement("button");
  soldBtn.textContent = "Sold";
  soldBtn.onclick = () => {
    openSellModal(player);
  };

  const unsoldBtn = document.createElement("button");
  unsoldBtn.textContent = "Unsold";
  unsoldBtn.classList.add('unsoldBtn');
  unsoldBtn.onclick = () => {
    console.log("➡️ UNSOLD clicked for:", player.player_name);
    console.trace();

    handleUnsoldPlayer(player);
  };

  layout.appendChild(img);
  layout.appendChild(details);
  layout.appendChild(soldBtn);
  layout.appendChild(unsoldBtn);

  container.appendChild(layout);
}

let isProcessingUnsold = false;

function handleUnsoldPlayer(player) {
  if (isProcessingUnsold) return;
  isProcessingUnsold = true;

  if (!isReAuction) {
    const alreadyInReAuction = reAuctionList.some(
      (p) => p.player_id === player.player_id
    );
    if (!alreadyInReAuction) {
      reAuctionList.push(player);
    }

    shuffledPlayers.splice(currentIndex - 1, 1);
    currentIndex--;
    localStorage.setItem("remainingPlayers", JSON.stringify(shuffledPlayers));
  }

  setTimeout(() => {
    isProcessingUnsold = false;
    showNextPlayer();
  }, 100); // Just a slight delay to avoid double fire
}

function openTeamModal(player) {
  const modal = document.getElementById("teamModal");
  const teamDropdown = document.getElementById("teamDropdown");
  const finalPointsInput = document.getElementById("finalPoints");

  modal.style.display = "block";
  finalPointsInput.value = ""; // Clear previous input

  document.getElementById("confirmTeamBtn").onclick = () => {
    const selectedTeam = teamDropdown.value;
    const soldPoints = parseInt(finalPointsInput.value);

    if (!soldPoints || soldPoints < 0) {
      alert("Please enter a valid points value.");
      return;
    }

    fetch("https://auction-ve9y.onrender.com/api/sellPlayer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        player,
        team: selectedTeam,
        sold_points: soldPoints,
      }),
    }).then(() => {
      // Remove from remaining players
      let remaining =
        JSON.parse(localStorage.getItem("remainingPlayers")) || [];
      remaining = remaining.filter((p) => p.player_id !== player.player_id);
      localStorage.setItem("remainingPlayers", JSON.stringify(remaining));

      closeTeamModal();
      showNextPlayer();
    });
  };

  document.getElementById("cancelTeamBtn").onclick = closeTeamModal;
}

function closeTeamModal() {
  const modal = document.getElementById("teamModal");
  modal.style.display = "none";
}

let selectedPlayer = null;

function openSellModal(player) {
  selectedPlayer = player;
  document.getElementById("sellModal").style.display = "block";
}

document.getElementById("closeSellModal").onclick = () => {
  document.getElementById("sellModal").style.display = "none";
};

document.getElementById("cancelSell").onclick = () => {
  document.getElementById("sellModal").style.display = "none";
};

document.getElementById("editLastSoldBtn").style.display = "none";

document.getElementById("confirmSell").onclick = () => {
  const team = document.getElementById("teamSelect").value;
  const soldPoints = parseInt(document.getElementById("soldPoints").value);

  if (!team || isNaN(soldPoints)) {
    alert("Please select a team and enter valid points.");
    return;
  }

  fetch("https://auction-ve9y.onrender.com/api/sell-player", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      player: selectedPlayer,
      teamName: team,
      soldPoints: soldPoints,
      isEdit: selectedPlayer?.player_id === lastSoldInfo?.player?.player_id,
      previousTeam: lastSoldInfo?.teamName 
    }),
  })
    .then((res) => {
      if (!res.ok)
        return res.json().then((err) => {
          throw new Error(err.message || "Failed to save");
        });
      return res.json();
    })
    .then((data) => {
      console.log("✅ Player sold:", data);

      if (!isReAuction) {
        shuffledPlayers.splice(currentIndex - 1, 1);
        currentIndex--;
      } else {
        reAuctionList.splice(reAuctionIndex - 1, 1);
        reAuctionIndex--;
      }

      localStorage.setItem("remainingPlayers", JSON.stringify(shuffledPlayers));

      document.getElementById("sellModal").style.display = "none";
      showNextPlayer();
    })
    .catch((err) => {
      console.error("❌ Error:", err.message);
      alert(`Something went wrong: ${err.message}`);
    });
    lastSoldInfo = {
      player: selectedPlayer,
      teamName: team,
      soldPoints: soldPoints,
    };
    document.getElementById("editLastSoldBtn").style.display = "inline-block";
};

// RESET Button logic
document.getElementById("resetBtn").onclick = () => {
  if (confirm("⚠️ This will erase all players and team data. Proceed?")) {
    fetch("https://auction-ve9y.onrender.com/api/reset", { method: "POST" })
      .then((res) => {
        if (!res.ok) throw new Error("Reset failed");
        alert("✅ All data has been reset.");
        localStorage.clear(); // Clear frontend cache
        location.reload();
      })
      .catch((err) => {
        console.error("❌ Reset failed:", err);
        alert("❌ Reset failed. See console.");
      });
  }
};

document.getElementById("editLastSoldBtn").onclick = () => {
  if (!lastSoldInfo) {
    alert("❌ No recent player to edit.");
    return;
  }

  selectedPlayer = lastSoldInfo.player;
  document.getElementById("editModal").style.display = "block";

  // Prefill the modal with previous data
  document.getElementById("editTeamSelect").value = lastSoldInfo.teamName;
  document.getElementById("editSoldPoints").value = lastSoldInfo.soldPoints;
};

document.getElementById("confirmEdit").onclick = () => {
  const newTeam = document.getElementById("editTeamSelect").value;
  const newPoints = parseInt(document.getElementById("editSoldPoints").value);

  if (!newTeam || isNaN(newPoints)) {
    alert("❌ Please enter valid values.");
    return;
  }

  fetch("https://auction-ve9y.onrender.com/api/sell-player", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      player: selectedPlayer,
      teamName: newTeam,
      soldPoints: newPoints,
      isEdit: true,
      previousTeam: lastSoldInfo?.teamName,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      lastSoldInfo = {
        player: selectedPlayer,
        teamName: newTeam,  
        soldPoints: newPoints,
      };
      alert("✅ Player info updated successfully!");
      document.getElementById("editModal").style.display = "none";
    })
    .catch((err) => {
      console.error("❌ Failed to edit:", err);
      alert("❌ Failed to update player.");
    });
};

document.getElementById("cancelEdit").onclick = () => {
  document.getElementById("editModal").style.display = "none";
};

document.getElementById("closeEditModal").onclick = () => {
  document.getElementById("editModal").style.display = "none";
};



document.getElementById("sellModal").style.display = "none";
document.getElementById("teamSelect").value = "";
document.getElementById("soldPoints").value = "";