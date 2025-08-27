let texto = prompt("Escribe una cadena de caracteres: ");
let texto2 = prompt("Escribe una segunda cadena de caracteres: ");

lon_1 = texto.length;
lon_2 = texto2.length;

let contador1 = {};
let contador2 = {};

for (let char1 of texto) {
    char1 = char1.toLowerCase(); // opcional, para no distinguir mayúsculas
    contador1[char1] = (contador1[char1] || 0) + 1;
}

for (let char2 of texto2) {
    char2 = char2.toLowerCase(); // opcional, para no distinguir mayúsculas
    contador2[char2] = (contador2[char2] || 0) + 1;
}

let result1 = "";
for (let letra1 in contador1) {
    result1 += `${letra1}: ${contador1[letra1]}\n`;
}

let result2 = "";
for (let letra2 in contador2) {
    result2 += `${letra2}: ${contador2[letra2]}\n`;
}


alert("Recuento de caracteres en el texto " + texto +", con una longitud total de " + lon_1 + ":\n" + result1);
alert("Recuento de caracteres en el texto " + texto2 +", con una longitud total de " + lon_2 + ":\n" + result2);