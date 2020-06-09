/* eslint-disable no-undef */

describe('Initial tests', () => {
  it('visits the app', () => {
    cy.visit('/');
  });
});

describe('Products', () => {
  it('displays list of products', () => {
    cy.get('[data-testid="products-list"]')
      .children()
      .should('have.length', 22);

    cy.window()
      .its('store')
      .invoke('getState')
      .its('products.productsList')
      .should('have.length', 22);
  });

  it('search list of products', () => {
    cy.visit('/');

    cy.get('[data-testid="search-icon"]').click();

    cy.get('[data-testid="search-input"]').type('blusa');

    cy.get('[data-testid="search-content"]')
      .children()
      .should('have.length', 2);
  });

  it('add a product to the cart', () => {
    cy.visit('/');

    cy.get('[data-testid="products-list"]').children().first().click();

    cy.url().should('include', '/product/');

    cy.get('[data-testid="product-button"]').click();

    cy.window()
      .its('store')
      .invoke('getState')
      .its('cart.cartItems')
      .should('have.length', 0);

    cy.get('[data-testid="product-size"]').contains('M').click();

    cy.get('[data-testid="product-button"]').click();

    cy.window()
      .its('store')
      .invoke('getState')
      .its('cart.cartItems')
      .should('have.length', 1);
  });
});
