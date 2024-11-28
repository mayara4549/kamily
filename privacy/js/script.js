document.addEventListener("DOMContentLoaded", () => {
    const video = document.querySelectorAll("video");

    video.forEach((vid) => {
        // Garantir que o vídeo seja carregado
        vid.load();
        vid.play().catch((error) => {
            console.warn("Erro ao tentar reproduzir o vídeo:", error);
        });
    });
});
