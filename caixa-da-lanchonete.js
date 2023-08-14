// Importe o módulo de descontos e taxas, e também o módulo de itens do cardápio se você os criar separadamente.
// const descontosETaxas = require('./descontos-etaxas'); // Módulo de descontos e taxas
// const cardapio = require('./cardapio'); // Módulo de cardápio

// Função para calcular o valor da compra
function calcularValorDaCompra(itens, formaDePagamento) {
    if (!Array.isArray(itens) || itens.length === 0) {
      return "Não há itens no carrinho de compra!";
    }
  
    let total = 0;
  
    for (const item of itens) {
      // Verificar se o código do item existe no cardápio
      if (!cardapio.hasOwnProperty(item.codigo)) {
        return "Item inválido!";
      }
  
      // Calcular o valor do item
      const itemInfo = cardapio[item.codigo];
      total += itemInfo.valor;
  
      // Verificar se há itens extras
      if (item.itensExtras) {
        for (const extra of item.itensExtras) {
          if (!cardapio.hasOwnProperty(extra)) {
            return "Item extra inválido!";
          }
          total += cardapio[extra].valor;
        }
      }
    }
  
    // Aplicar desconto ou taxa baseado na forma de pagamento
    if (formaDePagamento === "dinheiro") {
      total *= 0.95; // Aplicar desconto de 5% para pagamento em dinheiro
    } else if (formaDePagamento === "credito") {
      total *= 1.03; // Aplicar taxa de 3% para pagamento em crédito
    } else if (formaDePagamento !== "debito") {
      return "Forma de pagamento inválida!";
    }
  
    return `Total a pagar: R$ ${total.toFixed(2)}`;
  }
  
  // Exportar a função para uso externo
  module.exports = {
    calcularValorDaCompra,
  };
  