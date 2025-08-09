const readline = require('readline');

// Configurar la interfaz para leer desde consola
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let numeroSecreto = Math.floor(Math.random() * 31);

console.log("Adivina el número entre 0 y 30.");

function preguntar() {
    rl.question("Ingresa tu número: ", (respuesta) => {
        let intento = parseInt(respuesta);
        let diferencia = Math.abs(intento - numeroSecreto);

        if (intento === numeroSecreto) {
            console.log(`🎉 ¡Correcto! El número era ${numeroSecreto}`);
            rl.close();
        } else {
            if (diferencia > 5) {
                console.log("❄️ Frío");
            } else {
                console.log("🔥 Caliente");
            }
            preguntar(); // vuelve a preguntar
        }
    });
}

preguntar();
