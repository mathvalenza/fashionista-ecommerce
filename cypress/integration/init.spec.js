describe('Initial tests', () => {
  it('is working', () => {
    expect(true).to.equal(true);
  });

  it('visits the app', () => {
    cy.visit('/');
  });

  it('displays list of products', () => {
    cy.get('[data-testid="products-list"]')
      .children()
      .should('have.length', 22);
  });
});

describe('Products', () => {
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

    cy.get('[data-testid="product-size"]').contains('M').click();

    cy.get('[data-testid="product-button"]').click();
  });
});
