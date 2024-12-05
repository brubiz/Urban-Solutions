document.addEventListener("DOMContentLoaded", () => {
    const carOption = document.getElementById("carOption");
    const bikeOption = document.getElementById("bikeOption");
    const rideForm = document.getElementById("rideForm");
    const loadingContainer = document.getElementById("loading");
    const confirmationMessage = document.getElementById("confirmationMessage");

    let selectedVehicle = null;

    // Seleção de veículo
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

    // Envio do formulário
    rideForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const pickup = document.getElementById("pickup").value;
        const destination = document.getElementById("destination").value;

        if (!pickup || !destination || !selectedVehicle) {
            alert("Por favor, preencha todos os campos e escolha um tipo de veículo!");
            return;
        }

        // Exibe o loader
        loadingContainer.style.display = "flex";

        // Simula o carregamento e exibe a mensagem de confirmação
        setTimeout(() => {
            loadingContainer.style.display = "none";
            confirmationMessage.style.display = "block";

            // Esconde a mensagem de confirmação após 3 segundos
            setTimeout(() => {
                confirmationMessage.style.display = "none";
            }, 3000);
        }, 3000); // Tempo do carregamento simulado
    });
});

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

        // Exibe o ícone de carregamento
        loadingContainer.style.display = "block";
        confirmationMessage.style.display = "none"; // Esconde a mensagem de confirmação enquanto aguarda

        // Após 5 segundos, exibe a mensagem de confirmação
        setTimeout(() => {
            loadingContainer.style.display = "none"; // Esconde o carregamento
            confirmationMessage.style.display = "block"; // Exibe a mensagem de confirmação
        }, 5000); // 5000ms = 5 segundos
    });
});

