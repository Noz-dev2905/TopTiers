// Sample player data
const player = {
  name: "PvP_God",
  skin: "https://crafatar.com/avatars/069a79f444e94726a5befca90e38aaf5",
  tiers: {
    sword: "HT1",
    axe: "HT2",
    crystal: "HT2",
    pot: "HT3",
    diasmp: "HT1",
    mace: "HT2",
    nethpot: "HT3"
  },
  matches: [
    {opponent:"ComboMaster", kit:"Sword", result:"Win", date:"2026-03-31"},
    {opponent:"CrystalKing", kit:"Crystal", result:"Loss", date:"2026-03-30"},
    {opponent:"NetherPro", kit:"Mace", result:"Win", date:"2026-03-29"},
    {opponent:"DiaKnight", kit:"Diamond SMP", result:"Win", date:"2026-03-28"},
  ]
};

// Populate player info
document.getElementById("player-name").textContent = player.name;
document.getElementById("player-skin").src = player.skin;

// Populate tier badges
const tierContainer = document.getElementById("tier-badges");
for (let kit in player.tiers){
  const badge = document.createElement("span");
  badge.className = `tier-badge tier-${player.tiers[kit]}`;
  badge.textContent = `${kit.toUpperCase()}: ${player.tiers[kit]}`;
  tierContainer.appendChild(badge);
}

// Populate match history
const matchBody = document.getElementById("matches");
player.matches.forEach(m=>{
  const row = document.createElement("tr");
  row.innerHTML = `<td>${m.opponent}</td><td>${m.kit}</td><td>${m.result}</td><td>${m.date}</td>`;
  matchBody.appendChild(row);
});
