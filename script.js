document.addEventListener("DOMContentLoaded", () => {
    // Inicializando o mapa com Leaflet
    const map = L.map('map').setView([-23.5505, -46.6333], 13); // Coordenadas de São Paulo

    // Adicionando tiles do OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    let selectedVehicle = null;

    const carOption = document.getElementById("carOption");
    const bikeOption = document.getElementById("bikeOption");

    carOption.addEventListener("click", () => {
        selectedVehicle = "Carro";
        carOption.style.backgroundColor = "#3b82f6";
        carOption.style.color = "#fff";
        bikeOption.style.backgroundColor = "";
        bikeOption.style.color = "";
    });

    bikeOption.addEventListener("click", () => {
        selectedVehicle = "Moto";
        bikeOption.style.backgroundColor = "#3b82f6";
        bikeOption.style.color = "#fff";
        carOption.style.backgroundColor = "";
        carOption.style.color = "";
    });

    document.getElementById("rideForm").addEventListener("submit", (e) => {
        e.preventDefault();

        const pickup = document.getElementById("pickup").value;
        const destination = document.getElementById("destination").value;

        if (!pickup || !destination || !selectedVehicle) {
            alert("Por favor, preencha todos os campos e escolha um tipo de veículo!");
            return;
        }

        alert(`Corrida solicitada!\nDe: ${pickup}\nPara: ${destination}\nVeículo: ${selectedVehicle}`);
    });
});
// script.js
document.addEventListener("DOMContentLoaded", () => {
    // Inicializando o mapa com Leaflet
    const map = L.map('map').setView([-23.5505, -46.6333], 13); // Coordenadas de São Paulo

    // Adicionando tiles do OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    let selectedVehicle = null;

    const carOption = document.getElementById("carOption");
    const bikeOption = document.getElementById("bikeOption");

    carOption.addEventListener("click", () => {
        selectedVehicle = "Carro";
        carOption.style.backgroundColor = "#3b82f6";
        carOption.style.color = "#fff";
        bikeOption.style.backgroundColor = "";
        bikeOption.style.color = "";
    });

    bikeOption.addEventListener("click", () => {
        selectedVehicle = "Moto";
        bikeOption.style.backgroundColor = "#3b82f6";
        bikeOption.style.color = "#fff";
        carOption.style.backgroundColor = "";
        carOption.style.color = "";
    });

    document.getElementById("rideForm").addEventListener("submit", (e) => {
        e.preventDefault();

        const pickup = document.getElementById("pickup").value;
        const destination = document.getElementById("destination").value;

        if (!pickup || !destination || !selectedVehicle) {
            alert("Por favor, preencha todos os campos e escolha um tipo de veículo!");
            return;
        }

        alert(`Corrida solicitada!\nDe: ${pickup}\nPara: ${destination}\nVeículo: ${selectedVehicle}`);
    });
});
L.marker([-23.5505, -46.6333]).addTo(map)
    .bindPopup('Ponto Inicial: São Paulo')
    .openPopup();

