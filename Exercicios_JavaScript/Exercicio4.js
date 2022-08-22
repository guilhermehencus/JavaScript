console.log("Exercício 1:");
var times = [
  "CSKA Moscou",
  "Krasnodar",
  "Spartak de Moscou",
  "Zenit",
  "Dinamo de Moscou",
];
console.log("Times russos:");
console.log(times[0]);
console.log(times[1]);
console.log(times[2]);
console.log(times[3]);
console.log(times[4]);
console.log("Exercício 2:");
var num = [];
for (x = 100; x >= 0; x--) {
  num[x] = x;
  console.log(num[x]);
}
console.log("Exercício 3:");
var num = [3];
num[0] = Math.floor(Math.random() * 101);
num[1] = Math.floor(Math.random() * 101);
num[2] = Math.floor(Math.random() * 101);
if (num[0] > num[1] && num[0] > num[2] && num[1] > num[2]) {
  console.log(num[2]);
  console.log(num[1]);
  console.log(num[0]);
} else if (num[0] > num[1] && num[0] > num[2] && num[2] > num[1]) {
  console.log(num[1]);
  console.log(num[2]);
  console.log(num[0]);
} else if (num[2] > num[0] && num[2] > num[1] && num[1] > num[0]) {
  console.log(num[0]);
  console.log(num[1]);
  console.log(num[2]);
} else if (num[2] > num[0] && num[2] > num[1] && num[0] > num[1]) {
  console.log(num[1]);
  console.log(num[0]);
  console.log(num[2]);
} else if (num[1] > num[0] && num[1] > num[2] && num[2] > num[0]) {
  console.log(num[0]);
  console.log(num[2]);
  console.log(num[1]);
} else if (num[1] > num[0] && num[1] > num[2] && num[0] > num[2]) {
  console.log(num[2]);
  console.log(num[0]);
  console.log(num[1]);
}
console.log("Exercício 4:");
var pessoa = { nome: "João", sobrenome: "Almeida", idade: 18, altura: 175 };
console.log(pessoa.nome);
console.log(pessoa.sobrenome);
console.log(pessoa.idade);
console.log(pessoa.altura);
console.log("Exercício 5:");
var num = [10];
num[0] = Math.floor(Math.random() * 101);
num[1] = Math.floor(Math.random() * 101);
num[2] = Math.floor(Math.random() * 101);
num[3] = Math.floor(Math.random() * 101);
num[4] = Math.floor(Math.random() * 101);
num[5] = Math.floor(Math.random() * 101);
num[6] = Math.floor(Math.random() * 101);
num[7] = Math.floor(Math.random() * 101);
num[8] = Math.floor(Math.random() * 101);
num[9] = Math.floor(Math.random() * 101);
if (num[0] % 2 == 0) {
  console.log("Par:" + num[0]);
} else {
  console.log("Ímpar:" + num[0]);
}
if (num[1] % 2 == 0) {
  console.log("Par:" + num[1]);
} else {
  console.log("Ímpar:" + num[1]);
}
if (num[2] % 2 == 0) {
  console.log("Par:" + num[2]);
} else {
  console.log("Ímpar:" + num[2]);
}
if (num[3] % 2 == 0) {
  console.log("Par:" + num[3]);
} else {
  console.log("Ímpar:" + num[3]);
}
if (num[4] % 2 == 0) {
  console.log("Par:" + num[4]);
} else {
  console.log("Ímpar:" + num[4]);
}
if (num[5] % 2 == 0) {
  console.log("Par:" + num[5]);
} else {
  console.log("Ímpar:" + num[5]);
}
if (num[6] % 2 == 0) {
  console.log("Par:" + num[6]);
} else {
  console.log("Ímpar:" + num[6]);
}
if (num[7] % 2 == 0) {
  console.log("Par:" + num[7]);
} else {
  console.log("Ímpar:" + num[7]);
}
if (num[8] % 2 == 0) {
  console.log("Par:" + num[8]);
} else {
  console.log("Ímpar:" + num[8]);
}
if (num[9] % 2 == 0) {
  console.log("Par:" + num[9]);
} else {
  console.log("Ímpar:" + num[9]);
}
