console.log("Exercício 1:");
var n1 = 10;
if (n1 > 10) {
  console.log("Esse número" + n1 + "é maior que 10");
} else {
  console.log("Esse número" + n1 + " é menor que 10");
}
console.log("\n");
console.log("Exercício2:");
var n1_a = 20;
if (n1_a >= 10) {
  console.log("Esse número" + n1_a + "é maior ou igual que 10");
} else {
  console.log("Esse número" + n1_a + "é menor ou igual que 10");
}
console.log("\n");
console.log("Exercícios3:");
var npnz = 0;
if (npnz < 0) {
  console.log("Valor Negativo");
} else if (npnz == 0) {
  console.log("Igual a Zero");
} else {
  console.log("Valor Positivo");
}
console.log("\n");
console.log("Exercícios4:");
var a = 3;
var b = 3;
var c = 6;
var d = 3;
var soma_ac = a + c;
var multi_bd = b * d;
if (soma_ac > multi_bd) {
  console.log("A+C é maior que B*D");
} else if (soma_ac < multi_bd) {
  console.log("A+C é menor que B*D");
} else {
  console.log("A+C é igual a B*D");
}
console.log("\n");
console.log("Exercícios5:");
var a = 5;
var b = 5;
if (a > b) {
  console.log(b + "," + a);
} else if (a < b) {
  console.log(a + "," + b);
} else {
  console.log(a + "," + b);
}
console.log("\n");
console.log("Exercícios6:");
var n1 = 8;
var n2 = 7;
var n3 = 7;
var n4 = 7;
var media = (n1 + n2 + n3 + n4) / 4;
if (media >= 7) {
  console.log("média maior ou igual a 7, Aprovado");
} else {
  console.log("média menora 7, Reprovado");
}
console.log("\n");
console.log("Exercícios7:");
var s = "Feminino";
var alt = 1.72;
if (s == "Masculino") {
  var imc = 72.7 * alt - 58;
  console.log("seu IMC é" + imc);
} else {
  var imc = 62.1 * alt - 44.7;
  console.log("seu IMC é" + imc);
}
console.log("\n");
console.log("Exercícios8:");
var es = "MG";
if (es == "SP") {
  console.log("Paulista");
} else if (es == "RJ") {
  console.log("Carioca");
} else if (es == "MG") {
  console.log("Mineiro");
} else {
  console.log("Outro estado");
}
console.log("\n");
console.log("Exercícios9:");
var n = 3;
if (n % 2 == 0) {
  console.log("Par");
} else {
  console.log("Impar");
}
console.log("\n");
console.log("Exercícios10:");
var n = 99;
if (n <= 10) {
  console.log("F1");
} else if (n > 10 && n <= 100) {
  console.log("F2");
} else if (n > 100) {
  console.log("F3");
}
console.log("\n");
console.log("Exercícios11:");
var x = 5;
var y = 4;
var z = 5;
if (x == y && x == z) {
  console.log("Equilátero");
} else if (x == y && x != z) {
  console.log("Isóscele");
} else if (x == z && x != y) {
  console.log("Isóscele");
} else if (z == y && z != x) {
  console.log("Isóscele");
} else {
  console.log("Escaleno");
}
