// Generar número aleatorio entre 0 y 30
let numeroSecreto = Math.floor(Math.random() * 31);
let adivinado = false;

while (!adivinado) {
    let intento = parseInt(prompt("Adivina el número (entre 0 y 30):"));
    let diferencia = Math.abs(intento - numeroSecreto);

    if (intento === numeroSecreto) {
        console.log("¡Correcto! El número era " + numeroSecreto);
        adivinado = true;
    } else {
        if (diferencia > 5) {
            console.log("❄️ Frío");
        } else if (diferencia >= 3 && diferencia <= 5) {
            console.log("🌤️ Tibio");
        } else {
            console.log("🔥 Caliente");
        }
    }
}