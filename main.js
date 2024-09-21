window.onload = () => {
        const startButton = document.getElementById('startButton');
        const audio = document.getElementById('audio');
    
        startButton.onclick = () => {
            document.body.classList.remove("container");
            audio.play();
            startButton.style.display = 'none'; // Ocultar el botón al iniciar
        };
    };
    
