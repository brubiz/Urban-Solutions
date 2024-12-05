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
    const loadingContainer = document.getElementById("loading");
    const confirmationMessage = document.getElementById("confirmationMessage");

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

    document.getElementById("rideForm").addEventListener("submit", (event) => {
        event.preventDefault();
        
        loadingContainer.style.display = "block";
        confirmationMessage.style.display = "none";

        setTimeout(() => {
            loadingContainer.style.display = "none";
            confirmationMessage.style.display = "block";
        }, 2000); // Simula o tempo de resposta do servidor
    });

    // Adicionando marcador no mapa para indicar a geloteca
    const marker = L.marker([-23.405966243073202, -46.388548903872206]).addTo(map);
    marker.bindPopup("Geloteca SP").openPopup();
});
