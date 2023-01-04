describe("Temperature Converter", () => {
  beforeEach(() => {
    cy.visit("http://localhost:1234");
  });

  it("should display empty fields for celsius and fahrenheit", () => {
    cy.findByLabelText("Celsius").should("exist").should("have.value", "");
    cy.findByLabelText("Fahrenheit").should("exist").should("have.value", "");
  });
});
