var map = L.map('map').setView([0,0],2);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{
maxZoom:19
}).addTo(map);

var players = {};

function updatePlayers(){

fetch("https://tvuj-server/api/players")
.then(r=>r.json())
.then(data=>{

for(let p of data){

if(!players[p.id]){

players[p.id] =
L.marker([p.lat,p.lng]).addTo(map)
.bindPopup(p.name)

}else{

players[p.id].setLatLng([p.lat,p.lng])

}

}

})

}

setInterval(updatePlayers,5000)
