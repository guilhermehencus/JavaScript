console.log("Exercício 1:");
console.log("A)");
var A = 3;
var B = 7;
var C = 4;
if (A + C > B) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}
console.log("\n");
console.log("B)");
if (B >= A + 2) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}
console.log("\n");
console.log("C)");
if (C == B - A) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}
console.log("\n");
console.log("D)");
if (B + A <= C) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}
console.log("\n");
console.log("E)");
if (C + A > B) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}
console.log("\n");
console.log("Exercício 2:");
console.log("A)");
var A = 5;
var B = 4;
var C = 3;
var D = 6;
if (A > C && C <= D) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}
console.log("\n");
console.log("B)");
if (A + B > 10 || A + B == C + D) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}
console.log("C)");
if (A >= C && D >= C) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}
console.log("\n");
console.log("Exercício 3:");
var p = 60;
var d = "Domingo";
if (p > 50 && d == "Sábado") {
  var ex = p - 50;
  var mult1 = 5 * ex;
  console.log("Sua multa é:" + mult1);
} else if (p > 50 && d != "Sábado") {
  var ex = p - 50;
  var mult1 = 4 * ex;
  console.log("Sua multa é:" + mult1);
} else {
  console.log("Não houve excesso de peso na pesca.");
}
console.log("\n");
console.log("Exercício 4:");
var ip = 0.17;
if (ip >= 0.05 && ip <= 0.25) {
  console.log("Aceitável");
} else if (ip >= 0.3 && ip <= 0.39) {
  console.log("Suspender indústrias do 1o grupo");
} else if (ip >= 0.4 && ip <= 0.49) {
  console.log("Suspender indústrias do 1o e 2o grupo");
} else if (ip >= 0.5) {
  console.log("Suspender todas as indústrias.");
} else {
}
console.log("\n");
console.log("Exercício 5:");
var id = 15;
if (id >= 5 && id <= 7) {
  console.log(
    "Você está com" + id + "ano(s) se enquadra na categoria Infantil A"
  );
} else if (id >= 8 && id <= 11) {
  console.log(
    "Você está com" + id + "ano(s) se enquadra na categoria Infantil B"
  );
} else if (id >= 12 && id <= 13) {
  console.log(
    "Você está com" + id + "ano(s) se enquadra na categoria Juvenil A"
  );
} else if (id >= 14 && id <= 17) {
  console.log(
    "Você está com" + id + "ano(s) se enquadra na categoria Juvenil B"
  );
} else if (id >= 18) {
  console.log("Você está com" + id + "ano(s) se enquadra na categoria Adulto");
} else {
  console.log("Você está com uma idade não listada");
}
console.log("\n");
console.log("Exercício 6:");
var nome = "José";
var p = 53;
var al = 1.71;
var imc = p / Math.pow(al, 2);
if (imc < 18.5) {
  console.log(
    nome +
      "está com Índice de Massa Corporal" +
      imc +
      "na categoria abaixo do peso"
  );
} else if (imc >= 18.5 && imc < 25) {
  console.log(
    +nome +
      "está com Índice de Massa Corporal" +
      imc +
      "na categoria peso normal"
  );
} else if (imc >= 25 && imc < 30) {
  console.log(
    +nome +
      "está com Índice de Massa Corporal" +
      imc +
      "na categoria acima do peso"
  );
} else if (imc >= 30) {
  console.log(
    +nome + "está com Índice de Massa Corporal" + imc + "na categoria obesidade"
  );
}
