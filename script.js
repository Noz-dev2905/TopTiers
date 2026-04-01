const players = [
{player:"PvP_God", sword:"HT1", axe:"HT2", crystal:"HT2", pot:"HT3", diasmp:"HT1", mace:"HT2", nethpot:"HT3", skin:"https://crafatar.com/avatars/069a79f444e94726a5befca90e38aaf5"},
{player:"ComboMaster", sword:"HT2", axe:"LT1", crystal:"HT3", pot:"HT2", diasmp:"HT2", mace:"HT3", nethpot:"LT1", skin:"https://crafatar.com/avatars/853c80ef3c3749fdaa49938b674adae6"},
{player:"CrystalKing", sword:"LT2", axe:"HT3", crystal:"HT1", pot:"HT3", diasmp:"LT2", mace:"HT3", nethpot:"HT2", skin:"https://crafatar.com/avatars/4566e69fc90748ee8d71d7ba5aa00d20"},
{player:"NetherPro", sword:"HT3", axe:"HT2", crystal:"LT1", pot:"HT2", diasmp:"HT3", mace:"LT2", nethpot:"HT1", skin:"https://crafatar.com/avatars/61699e0c9a3b48f7b0b0f99d84c29b7b"},
{player:"DiaKnight", sword:"HT2", axe:"HT3", crystal:"HT2", pot:"HT2", diasmp:"HT1", mace:"HT1", nethpot:"HT2", skin:"https://crafatar.com/avatars/e4b3f0f02aa148f68e0e227e9c6a987e"}
];

const kits = ["sword","axe","crystal","pot","diasmp","mace","nethpot"];
const leaderboard = document.getElementById("leaderboard");

function renderPlayers(filterKit="all"){
leaderboard.innerHTML="";
players.forEach(p=>{
let card = document.createElement("div");
card.className="player-card";

let content = `<img src='${p.skin}' alt='${p.player}'><h3>${p.player}</h3>`;
kits.forEach(k=>{
if(filterKit=="all" || filterKit==k){
content += `<div class='tier-badge tier-${p[k]}'>${k.toUpperCase()}: ${p[k]}</div>`;
}
});
card.innerHTML = content;
leaderboard.appendChild(card);
});
}

renderPlayers();

document.querySelectorAll(".filter-buttons button").forEach(btn=>{
btn.addEventListener("click", ()=>{
renderPlayers(btn.getAttribute("data-kit"));
});
});

document.getElementById("search").addEventListener("keyup", e=>{
const term = e.target.value.toLowerCase();
const filteredPlayers = players.filter(p=>p.player.toLowerCase().includes(term));
leaderboard.innerHTML="";
filteredPlayers.forEach(p=>{
let card = document.createElement("div");
card.className="player-card";
let content = `<img src='${p.skin}' alt='${p.player}'><h3>${p.player}</h3>`;
kits.forEach(k=>{
content += `<div class='tier-badge tier-${p[k]}'>${k.toUpperCase()}: ${p[k]}</div>`;
});
card.innerHTML=content;
leaderboard.appendChild(card);
});
});
