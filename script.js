// script.js
document.getElementById("rideForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const pickup = document.getElementById("pickup").value;
    const destination = document.getElementById("destination").value;
    const carType = document.getElementById("carType").value;

    if (!pickup || !destination) {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    alert(`Corrida solicitada com sucesso!\nDe: ${pickup}\nPara: ${destination}\nTipo: ${carType}`);
});
