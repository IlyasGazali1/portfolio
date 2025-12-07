let map = L.map('mijnMap').setView([51.203948, 4.470056], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 16,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

let bounds = [[51.20947, 4.483499], [51.200404, 4.459438]];

L.rectangle(bounds, {color: "#e60005", weight: 1}).addTo(map);

let mijnMarker = L.marker([51.203948, 4.470056]).addTo(map);
mijnMarker.bindPopup("<b>Mijn locatie</b>").openPopup();