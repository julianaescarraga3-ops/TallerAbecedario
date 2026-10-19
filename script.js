document.addEventListener("DOMContentLoaded", () => {
    const tarjetas = document.querySelectorAll(".card");
    const contadorElemento = document.getElementById("contador");
    const botones = document.querySelectorAll("main > button");

    // Registro de letras vistas únicas
    const letrasVistas = new Set();

    // 1. Interacción de volteo 3D y contador de letras descubiertas
    tarjetas.forEach((tarjeta) => {
        // Remover el atributo hidden si viene del HTML base para permitir la animación 3D
        const dorso = tarjeta.querySelector(".card-dorso");
        const frente = tarjeta.querySelector(".card-frente");
        if (dorso) dorso.removeAttribute("hidden");
        if (frente) frente.removeAttribute("hidden");

        tarjeta.addEventListener("click", () => {
            tarjeta.classList.toggle("volteada");

            // Registrar letra en el contador al voltearla
            if (tarjeta.classList.contains("volteada")) {
                const letra = tarjeta.querySelector("h2")?.textContent.trim();
                if (letra) {
                    letrasVistas.add(letra);
                    if (contadorElemento) {
                        contadorElemento.textContent = letrasVistas.size;
                    }
                }
            }
        });
    });

    // 2. Filtros interactivos ("vocales" y "abecedario")
    botones.forEach((boton) => {
        boton.addEventListener("click", () => {
            const filtro = boton.textContent.trim().toLowerCase();

            // Resaltar botón activo
            botones.forEach((b) => b.classList.remove("activo"));
            boton.classList.add("activo");

            tarjetas.forEach((tarjeta) => {
                const tipo = tarjeta.getAttribute("data-tipo");

                if (filtro === "vocales") {
                    if (tipo === "vocal") {
                        tarjeta.classList.remove("oculta");
                    } else {
                        tarjeta.classList.add("oculta");
                    }
                } else if (filtro === "abecedario") {
                    tarjeta.classList.remove("oculta");
                }
            });
        });
    });
});
