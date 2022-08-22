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
for (x = 0; x <= 1000; x++) {
  if (x == 0) {
    console.log("stop");
  } else if (x % 7 == 0) {
    for (y = 0; y <= 4; y++) {
      console.log("VOLTA" + y);
    }
  } else {
    console.log(x);
  }
}
