document.addEventListener("DOMContentLoaded", () => {
    // Inicializando o mapa
    const map = L.map('map').setView([-23.5505, -46.6333], 13);

    // Adicionando tiles do OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Mapeamento de bairros e ruas
    const neighborhoods = {
        "Centro": ["Rua São Bento", "Rua XV de Novembro", "Rua Direita"],
        "Vila Galvão": ["Avenida Emílio Ribas", "Rua Treze de Maio", "Rua São José"],
        "Bonsucesso": ["Avenida Paschoal Thomeu", "Rua Nossa Senhora do Bonsucesso", "Rua Coronel Estanislau"],
        "Ponte Grande": ["Rua José Brumatti", "Rua Itapegica", "Rua Santa Catarina"]
    };

    // Capturando elementos da interface
    const neighborhoodSelect = document.getElementById("neighborhood");
    const streetSelect = document.getElementById("street");

    // Atualizar ruas com base no bairro selecionado
    neighborhoodSelect.addEventListener("change", () => {
        const selectedNeighborhood = neighborhoodSelect.value;

        // Limpar ruas anteriores
        streetSelect.innerHTML = '<option value="">Escolha uma rua</option>';

        if (selectedNeighborhood && neighborhoods[selectedNeighborhood]) {
            // Preencher ruas do bairro selecionado
            neighborhoods[selectedNeighborhood].forEach(street => {
                const option = document.createElement("option");
                option.value = street;
                option.textContent = street;
                streetSelect.appendChild(option);
            });
            streetSelect.disabled = false; // Ativar o campo
        } else {
            streetSelect.disabled = true; // Desativar se nenhum bairro for escolhido
        }
    });

    // Lógica de seleção de veículos
    const carOption = document.getElementById("carOption");
    const bikeOption = document.getElementById("bikeOption");
    let selectedVehicle = null;

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

    // Submissão do formulário
    document.getElementById("rideForm").addEventListener("submit", (e) => {
        e.preventDefault();

        const pickup = document.getElementById("pickup").value;
        const destination = document.getElementById("destination").value;
        const neighborhood = neighborhoodSelect.value;
        const street = streetSelect.value;

        if (!pickup || !destination || !neighborhood || !street || !selectedVehicle) {
            alert("Por favor, preencha todos os campos e escolha um tipo de veículo!");
            return;
        }

        alert(`Corrida solicitada!
        De: ${pickup} (${street}, ${neighborhood})
        Para: ${destination}
        Veículo: ${selectedVehicle}`);
    });
});
