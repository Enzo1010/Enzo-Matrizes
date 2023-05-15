//primeira matriz
//É usado o Math.random para os números serem gerados de forma aleatoria
var matriz1 = new Array();
matriz1.push([Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)]);
matriz1.push([Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)]);
matriz1.push([Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)]);

//segunda matriz
var matriz2 = new Array();
matriz2.push([Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)]);
matriz2.push([Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)]);
matriz2.push([Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)]);

// somando a matriz1 e a matriz2
var resultado = new Array();
for (let p = 0; p < matriz1.length; p++) {
    resultado[p] = new Array();
    for (let k = 0; k < matriz1[p].length; k++) {
        resultado[p][k] = matriz1[p][k] + matriz2[p][k];
    }
}

// Mostrando os valores das matrizes e também o resultado
document.write("<table>");
document.write("Matriz 1:");
for (let p = 0; p < matriz1.length; p++) {
    document.write("<tr>");
    for (let k = 0; k < matriz1[p].length; k++) {
        document.write("<td>" + matriz1[p][k] + "</td>");
    }
    document.write("</tr>");
}
document.write("</table>");


document.write("<table>");
document.write("Matriz 2:");
for (let p = 0; p < matriz2.length; p++) {
    document.write("<tr>");
    for (let k = 0; k < matriz2[p].length; k++) {
        document.write("<td>" + matriz2[p][k] + "</td>");
    }
    document.write("</tr>");
}
document.write("</table>");


document.write("<table>");
document.write("Resultado:");
for (let p = 0; p < resultado.length; p++) {
    document.write("<tr>");
    for (let k = 0; k < resultado[p].length; k++) {
        document.write("<td>" + resultado[p][k] + "</td>");
    }
    document.write("</tr>");
}