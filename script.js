// script.js
document.addEventListener("DOMContentLoaded", () => {
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
