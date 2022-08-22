console.log("Exercício 1:");
var num = 5;
if (num < 0) {
  console.log("Não usa na faturação número  menor que 0");
} else {
  if (num == 0 && num == 1) {
    var xresult = 1;
    console.log("O resultado da faturação de" + num + "é" + xresult);
  } else {
    var x2result = num;
    for (var x = num - 1; x > 1; x--) {
      x2result = x2result * x;
    }
    console.log("O resultado da faturação de" + num + "é" + x2result);
  }
}
console.log("\n");
console.log("Exercício 2:");
var soma = 0;
for (var x = 1; x <= 100; x++) {
  soma = soma + x;
}
console.log("O resultado da soma é" + soma);
console.log("\n");
console.log("Exercício 3:");
for (var x = 1000; x >= 7; x--) {
  if (x % 7 == 0) {
    console.log(x);
  }
}
console.log("\n");
console.log("Exercício 4:");
for (var x = 85; x <= 907; x++) {
  if (x % 2 == 0) {
    console.log(x);
  }
}
console.log("\n");
console.log("Exercício 5:");
var num = 2;
for (var x = 1; x <= 10; x++) {
  result = num * x;
  console.log(num + "X" + x + "=" + result);
}
console.log("\n");
console.log("Exercício 6:");
var chi = 1.5;
var ze = 1.1;
var x = 0;
while (chi > ze) {
  chi = chi + 0.02;
  ze = ze + 0.03;
  x++;
}
console.log("O Zé vai ultrapassar em" + x + "anos a estatula do Chico");
console.log("\n");
console.log("Exercício 7:");
for (var x = 1000; x <= 2000; x++) {
  if (x % 11 == 5) {
    console.log(x);
  }
}
console.log("\n");
console.log("Exercício 8:");
for (var x = 1; x <= 10; x++) {
  for (var y = 1; y <= 10; y++) {
    var result = x * y;
    console.log(x + "X" + y + "=" + result);
  }
}
console.log("\n");
console.log("Exercício 9:");
var num = 11;
for (var x = num; x >= 0; x--) {
  var result = num - x;
  console.log(result);
}
console.log("\n");
console.log("Exercício 10:");
var num = 15;
var num2 = 5;
if (num < num2) {
  for (var x = num + 1; x < num2; x++) {
    console.log(x);
  }
} else if (num > num2) {
  for (var y = num2 + 1; y < num; y++) {
    console.log(y);
  }
}
