//primeira matriz
//É usado o Math.random para os números serem gerados de forma aleatoria
var matriz1 = new Array();
matriz1.push([Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)]);
matriz1.push([Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)]);
matriz1.push([Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)]);

//segunda matriz usando também o ramdom
var matriz2 = new Array();
matriz2.push([Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)]);
matriz2.push([Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)]);
matriz2.push([Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)]);



// Multiplicando a matriz1 e a matriz2
var resultado = new Array();
for (var p = 0; p < matriz1.length; p++) { 
    resultado[p] = new Array();
    for (var c = 0; c < matriz2[0].length; c++) { 
        var armazenamento = 0;
        for (var k = 0; k < matriz1[0].length; k++) { 
            armazenamento += matriz1[p][k] * matriz2[k][c];
        }
        resultado[p][c] = armazenamento;
    }
}


// exibindo as matrizes e o resultado
document.write("Matriz 1:");
document.write("<table>");
for (var p = 0; p < matriz1.length; p++) {
    document.write("<tr>");
    for (var k = 0; k < matriz1[0].length; k++) {
        document.write("<td>" + matriz1[p][k] + "</td>");
    }
    document.write("</tr>");
}
document.write("</table>");




document.write("Matriz 2:");
document.write("<table>");
for (var p = 0; p < matriz2.length; p++) {
    document.write("<tr>");
    for (var k = 0; k < matriz2[0].length; k++) {
        document.write("<td>" + matriz2[p][k] + "</td>");
    }
    document.write("</tr>");
}
document.write("</table>");




document.write("Resultado:");
document.write("<table>");
for (var p = 0; p < resultado.length; p++) {
    document.write("<tr>");
    for (var k = 0; k < resultado[0].length; k++) {
        document.write("<td>" + resultado[p][k] + "</td>");
    }
    document.write("</tr>");
}
document.write("</table>");

//--------------------------------------------fim-------------------------------------------------------------------------------------