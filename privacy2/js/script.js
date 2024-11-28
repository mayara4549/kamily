document.addEventListener("DOMContentLoaded", () => {
    const videos = document.querySelectorAll("video");

    videos.forEach(video => {
        // Certifique-se de que os vídeos estão configurados corretamente
        video.setAttribute("autoplay", true);
        video.setAttribute("muted", true);
        video.setAttribute("playsinline", true);
        video.setAttribute("loop", true);

        // Testa se o vídeo pode ser reproduzido automaticamente
        video.play().catch(error => {
            console.warn("Reprodução automática bloqueada. O vídeo pode precisar de interação do usuário.", error);
        });
    });
});
