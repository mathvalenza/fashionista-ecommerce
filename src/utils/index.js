const currencyToNumber = (value = '') =>
  Number(value.split('R$')[1].replace(/,/g, '.'));

export { currencyToNumber };
