import { createSelector } from 'reselect';

import { currencyToNumber, percentageToNumber } from 'utils';

const searchSelector = (search = '') =>
  createSelector(
    (state) => state.products.productsList,
    (productsList) =>
      search
        ? productsList.filter((product) =>
            product.name.toUpperCase().includes(search.toUpperCase())
          )
        : []
  );

const sortSelector = (sort = 'padrao') =>
  createSelector(
    (state) => state.products.productsList,
    (productsList) => {
      if (sort === 'padrao') return productsList;

      if (sort === 'desconto')
        return [...productsList].sort(
          (p1, p2) =>
            percentageToNumber(p2.discount_percentage) -
            percentageToNumber(p1.discount_percentage)
        );

      if (sort === 'preco')
        return [...productsList].sort(
          (p1, p2) =>
            currencyToNumber(p1.actual_price) -
            currencyToNumber(p2.actual_price)
        );

      return [...productsList];
    }
  );

export { searchSelector, sortSelector };
