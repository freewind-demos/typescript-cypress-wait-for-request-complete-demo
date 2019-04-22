describe('wait', () => {
  it('should waits for background request complete', () => {
    cy.visit('https://example.cypress.io/commands/waiting')

    cy.server()
    cy.route('GET', 'comments/*').as('getComment')
    cy.get('button.network-btn').click()
    cy.wait('@getComment').its('status').should('eq', 200)
  })

})
