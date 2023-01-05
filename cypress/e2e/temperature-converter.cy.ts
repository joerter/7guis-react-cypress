describe("Temperature Converter", () => {
  beforeEach(() => {
    cy.visitHome();
  });

  it("should display empty fields for celsius and fahrenheit", () => {
    cy.findByLabelText("Celsius").should("exist").should("have.value", "");
    cy.findByLabelText("Fahrenheit").should("exist").should("have.value", "");
  });
});
