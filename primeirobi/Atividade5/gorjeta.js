const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("Digite o valor da conta: R$ ", (valorContaInput) => {
  readline.question("Digite o percentual da gorjeta (%): ", (percentualInput) => {
    const valorConta = parseFloat(valorContaInput);
    const percentualGorjeta = parseFloat(percentualInput);

    const valorGorjeta = valorConta * (percentualGorjeta / 100);
    const valorTotal = valorConta + valorGorjeta;

    console.log(
      `Valor da Conta: R$${valorConta.toFixed(2)}, ` +
      `Gorjeta (${percentualGorjeta}%): R$${valorGorjeta.toFixed(2)}, ` +
      `Total a pagar: R$${valorTotal.toFixed(2)}`
    );

    readline.close();
  });
});
