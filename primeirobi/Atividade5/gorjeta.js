const prompt = require("prompt-sync")();

const valorConta = parseFloat(prompt("Digite o valor da conta: R$ "));
const percentualGorjeta = parseFloat(prompt("Digite o percentual da gorjeta (%): "));

const valorGorjeta = valorConta * (percentualGorjeta / 100);

const valorTotal = valorConta + valorGorjeta;

console.log(
  `Valor da Conta: R$${valorConta.toFixed(2)}, ` +
  `Gorjeta (${percentualGorjeta}%): R$${valorGorjeta.toFixed(2)}, ` +
  `Total a pagar: R$${valorTotal.toFixed(2)}`
);
