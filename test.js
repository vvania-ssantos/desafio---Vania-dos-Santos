const { calcularValorDaCompra } = require('./caixa-da-lanchonete');

// Casos de teste
const itens1 = [
  { codigo: 'cafe' },
  { codigo: 'chantily', itensExtras: ['queijo'] }
];
const formaDePagamento1 = 'dinheiro';

const itens2 = [
  { codigo: 'suco' },
  { codigo: 'sanduiche', itensExtras: ['queijo', 'queijo'] }
];
const formaDePagamento2 = 'credito';

console.log(calcularValorDaCompra(itens1, formaDePagamento1));
console.log(calcularValorDaCompra(itens2, formaDePagamento2));
