describe("empty spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:1234");
    cy.findByText('Counter').click();
    expect(location.pathname).to.eq('counter');
  });

  it("passes", () => {
    expect(true).to.eq(true);
  });
});
