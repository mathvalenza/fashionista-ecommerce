import { createSelector } from 'reselect';

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

export { searchSelector };
