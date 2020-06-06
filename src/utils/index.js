const currencyToNumber = (value = '') =>
  Number(value.split('R$')[1].replace(/,/g, '.'));

const numberToCurrency = (value = 0) =>
  value.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL'
  });

export { numberToCurrency, currencyToNumber };
