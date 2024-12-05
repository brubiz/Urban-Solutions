document.addEventListener("DOMContentLoaded", () => {
    const neighborhoodSelect = document.getElementById("neighborhood");
    const streetSelect = document.getElementById("street");
    const loadingContainer = document.getElementById("loadingContainer");
    const loadingMessage = document.getElementById("loadingMessage");

    // Inicializando o mapa
    const map = L.map('map').setView([-23.5505, -46.6333], 13);
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

    // Atualizar ruas com base no bairro selecionado
    neighborhoodSelect.addEventListener("change", () => {
        const selectedNeighborhood = neighborhoodSelect.value;

        // Limpar ruas anteriores
        streetSelect.innerHTML = '<option value="">Escolha uma rua</option>';

        if (selectedNeighborhood && neighborhoods[selectedNeighborhood]) {
            neighborhoods[selectedNeighborhood].forEach(street => {
                const option = document.createElement("option");
                option.value = street;
                option.textContent = street;
                streetSelect.appendChild(option);
            });
            streetSelect.disabled = false;
        } else {
            streetSelect.disabled = true;
        }
    });

    // Seleção de veículo
   
