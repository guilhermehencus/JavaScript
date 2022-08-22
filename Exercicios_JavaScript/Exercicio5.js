console.log("Exercício 1:");
var base = 2;
var altura = 7;
var area = (base * altura) / 2;
console.log("A área do triângulo é:" + area);
console.log("\n");
console.log("Exercício2:");
var ht = 240;
var vh = 8;
pd = 0.1;
salario_bruto = ht * vh;
console.log("O salário bruto é:" + salario_bruto);
descontos = salario_bruto * pd;
console.log("O desconto é:" + descontos);
salario_liquido = salario_bruto - descontos;
console.log("O salário líquido é:" + salario_liquido);
console.log("\n");
console.log("Exercício3:");
var fahre = 212;
var cel = (fahre - 32) / 1.8;
console.log("A temperatura em Celsius é:" + cel);
console.log("\n");
console.log("Exercício4:");
var A = 5;
var B = 6;
var C = 10;
if (A + B < C) {
  console.log("A soma de A+B é menor");
} else if (A + B == C) {
  console.log("A soma de A+B é igual");
} else {
  console.log("A soma de A+B é maior");
}
console.log("\n");
console.log("Exercício5:");
var nota = 78;
if (nota >= 0 && nota <= 49) {
  console.log("Insuficiente");
} else if (nota >= 50 && nota <= 64) {
  console.log("Regular");
} else if (nota >= 65 && nota <= 84) {
  console.log("Bom");
} else if (nota >= 85 && nota <= 100) {
  console.log("Ótimo");
} else {
  console.log("Não é uma avaliação");
}
console.log("\n");
console.log("Exercício6:");
var salarioAtual = 2800;
console.log("Salário atual:" + salarioAtual);
porcent = 0.15;
if (salarioAtual < 1500) {
  aumt = porcent * salarioAtual;
  salaumt = aumt + salarioAtual;
  console.log("Salário aumentado:" + salaumt);
} else if (salarioAtual >= 1500 && salarioAtual < 1750) {
  porcent = 0.12;
  aumt = porcent * salarioAtual;
  salaumt = aumt + salarioAtual;
  console.log("Salário aumentado:" + salaumt);
} else if (salarioAtual >= 1750 && salarioAtual < 2000) {
  porcent = 0.1;
  aumt = porcent * salarioAtual;
  salaumt = aumt + salarioAtual;
  console.log("Salário aumentado:" + salaumt);
} else if (salarioAtual >= 2000 && salarioAtual < 3000) {
  porcent = 0.07;
  aumt = porcent * salarioAtual;
  salaumt = aumt + salarioAtual;
  console.log("Salário aumentado:" + salaumt);
} else if (salarioAtual >= 3000) {
  porcent = 0.05;
  aumt = porcent * salarioAtual;
  salaumt = aumt + salarioAtual;
  console.log("Salário aumentado:" + salaumt);
}
console.log("\n");
console.log("Exercício7:");
var raio = 4;
var pi = 3.14159;
var area = pi * Math.pow(raio, 2);
console.log("A área da circunferência é:" + area);
console.log("\n");
console.log("Exercício8:");
var est_ci = "V";
switch (est_ci) {
  case "S":
    console.log("Solteiro");
    break;
  case "C":
    console.log("Casado");
    break;
  case "V":
    console.log("Viúvo");
    break;
  case "D":
    console.log("Divorciado");
    break;
  default:
    console.log("Erro");
}
console.log("\n");
console.log("Exercício9:");
var ini = 0;
var soma = 0;
var soma_s = 0;
for (var x = 1; x <= 20; x++) {
  if (x == 1) {
    console.log(soma);
  }
  if (x >= 2 && x <= 3) {
    soma = 1;
    console.log(soma);
  } else if (x == 4) {
    ini = soma;
    soma_s = ini + soma;
    console.log(soma_s);
  } else if (x >= 5) {
    soma = soma_s;
    soma_s = ini + soma;
    ini = soma;
    console.log(soma_s);
  }
}
console.log("\n");
console.log("Exercício10:");
for (var x = 1000; x <= 1999; x++) {
  if (x % 11 == 7) {
    console.log(x);
  }
}
console.log("\n");
console.log("Exercício11:");
var cel = 100;
var fahre = 100 * 1.8 + 32;
console.log("A temperatura em Fahrenhet é:" + fahre);
console.log("\n");
console.log("Exercício12:");
var id_a = 18;
var mes_ano = 30 * 12;
var viveu = mes_ano * id_a;
console.log("Quantos ele viveu em dias é:" + viveu);
console.log("\n");
console.log("Exercício13:");
var alf = "A";
switch (alf) {
  case "A":
    console.log("Vogal");
    break;
  case "B":
    console.log("Consoante");
    break;
  case "C":
    console.log("Consoante");
    break;
  case "D":
    console.log("Consoante");
    break;
  case "E":
    console.log("Vogal");
    break;
  case "F":
    console.log("Consoante");
    break;
  case "G":
    console.log("Consoante");
    break;
  case "H":
    console.log("Consoante");
    break;
  case "I":
    console.log("Vogal");
    break;
  case "J":
    console.log("Consoante");
    break;
  case "K":
    console.log("Consoante");
    break;
  case "L":
    console.log("Consante");
    break;
  case "M":
    console.log("Consoante");
    break;
  case "N":
    console.log("Consoante");
    break;
  case "O":
    console.log("Vogal");
    break;
  case "P":
    console.log("Consoante");
    break;
  case "Q":
    console.log("Consoante");
    break;
  case "R":
    console.log("Consoante");
    break;
  case "S":
    console.log("Consante");
    break;
  case "T":
    console.log("Consoante");
    break;
  case "U":
    console.log("Vogal");
    break;
  case "V":
    console.log("Consoante");
    break;
  case "W":
    console.log("Consoante");
    break;
  case "X":
    console.log("Consoante");
    break;
  case "Y":
    console.log("Consoante");
    break;
  case "Z":
    console.log("Consoante");
  default:
    console.log("Erro");
}
console.log("\n");
console.log("Exercício14:");
var ponto1 = { x1: 0, y1: 3 };
var ponto2 = { x2: 2, y2: 2 };
var dist = Math.sqrt(
  Math.pow(ponto2["x2"] - ponto1["x1"], 2) +
    Math.pow(ponto2["y2"] - ponto1["y1"], 2)
);
console.log(
  "Distancia da coordenadas(" +
    ponto1["x1"] +
    "), (" +
    ponto1["y1"] +
    ") e (" +
    ponto2["x2"] +
    "), (" +
    ponto2["y2"] +
    ") é:" +
    dist.toFixed(4)
);
console.log("\n");
console.log("Exercício15:");
var v_ano = 2010;
if (v_ano % 4 == 0 && v_ano != 100) {
  console.log("Ano é bissexto:" + v_ano);
} else {
  console.log("Não é bissexto:" + v_ano);
}
console.log("\n");
console.log("Exercício16:");
var coor = { x: 3, y: -3 };
if (coor["x"] == 0 && coor["y"] == 0) {
  console.log("Origem");
} else if (coor["x"] > 0 && coor["y"] > 0) {
  console.log("Q1");
} else if (coor["x"] < 0 && coor["y"] > 0) {
  console.log("Q2");
} else if (coor["x"] < 0 && coor["y"] < 0) {
  console.log("Q3");
} else if (coor["x"] > 0 && coor["y"] < 0) {
  console.log("Q4");
} else if (
  coor["x"] == 1 ||
  coor["x"] == 2 ||
  coor["x"] == 3 ||
  (coor["x"] == 4 && coor["y"] == 0)
) {
  console.log("Eixo Y");
} else if (
  (coor["x"] == 0 && coor["y"] == 1) ||
  coor["y"] == 2 ||
  coor["y"] == 3 ||
  coor["y"] == 4
) {
  console.log("Eixo X");
}
console.log("\n");
console.log("Exercício17:");
var n1 = 20;
var n2 = 3;
quo = n1 / n2;
rest = n1 % n2;
console.log("O quociente é:" + quo);
console.log("O resto é:" + rest);
console.log("\n");
console.log("Exercício18:");
var mes = 9;
switch (mes) {
  case 1:
    console.log("Verão");
    break;
  case 2:
    console.log("Verão");
    break;
  case 3:
    console.log("Verão");
    break;
  case 4:
    console.log("Outorno");
    break;
  case 5:
    console.log("Outorno");
    break;
  case 6:
    console.log("Outorno");
    break;
  case 7:
    console.log("Inverno");
    break;
  case 8:
    console.log("Inverno");
    break;
  case 9:
    console.log("Inverno");
    break;
  case 10:
    console.log("Primavera");
    break;
  case 11:
    console.log("Primavera");
    break;
  case 12:
    console.log("Primavera");
    break;
  default:
    console.log("Erro");
}
console.log("\n");
console.log("Exercício19:");
var num = 6;
switch (num) {
  case 1:
    console.log("Um");
    break;
  case 2:
    console.log("Dois");
    break;
  case 3:
    console.log("Três");
    break;
  case 4:
    console.log("Quatro");
    break;
  case 5:
    console.log("Cinco");
    break;
  case 6:
    console.log("Seis");
    break;
  case 7:
    console.log("Sete");
    break;
  case 8:
    console.log("Oito");
    break;
  case 9:
    console.log("Novem");
    break;
  case 10:
    console.log("Dez");
    break;
  default:
    console.log("Erro");
}
console.log("\n");
console.log("Exercício20:");
var num = 6;
console.log(num);
var quo = num / 2;
var count = 0;
count = count + 1;
if (quo < 1) {
  console.log("Quantidade de vez do quociente chegar no zero:" + count);
  console.log("Última operação:" + num + "/2");
} else {
  while (quo > 1) {
    quo = num / 2;
    if (quo < 1) {
      console.log("Quantidade de vez do quociente chegar no 0:" + count);
      console.log("Última operação:" + num + "/2");
    }
    count = count + 1;
    num = quo;
  }
}
console.log("\n");
console.log("Desafio1:");
for (x = 0; x <= 1000; x++) {
  if (x % 5 == 0) {
    console.log("PI");
  } else {
    console.log(x);
  }
}
console.log("\n");
console.log("Desafio2:");
for (x_1 = 0; x_1 <= 100; x_1++) {
  if (x_1 % 7 == 0) {
    if (x_1 == 0) {
      console.log("stop");
    } else {
      for (y = 0; y <= 4; y++) {
        console.log("VOLTA" + y);
      }
    }
  } else {
    console.log(x_1);
  }
}
