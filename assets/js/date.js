var year = new Date().getFullYear();
var month = new Date().getMonth() + 1;
var day = new Date().getDate();
var yo1 = "Hola, tengo ";
var yo2 = " años y me considero un entusiasta de la programación, videojuegos y tecnología en general. Actualmente estoy "
var EstudioActual = " estudiando  Tecnicatura Universitaria en Programación en la UTN de Pacheco. "
if (month >= 1 && day >= 18) {

    var NewYear = year - 1993;
    document.getElementById("yearR").innerHTML = yo1 + " " +
        NewYear + " " + yo2 + " " + EstudioActual;
} else
if (month > 1) {

    var NewYear = year - 1993;
    document.getElementById("yearR").innerHTML = yo1 + " " +
        NewYear + " " + yo2 + " " + EstudioActual;
} else
if (month = 1 && day < 18) {

    var NewYear = year - 1993 - 1;
    document.getElementById("yearR").innerHTML = yo1 + " " +
        NewYear + " " + yo2 + " " + EstudioActual;
}
document.getElementById("day").innerHTML = NewYear;