describe("Counter", () => {
  beforeEach(() => {
    cy.visit("http://localhost:1234");

    cy.findByRole("button", { name: "Count" }).as("button");
    cy.findByLabelText("Count:").as("count");
  });

  it("should display 0 to start and have a button to increase the count", () => {
    cy.get("@button").should("exist");
    cy.get("@count").should("exist").should("have.value", "0");
  });

  it("should increase the count when the button is clicked", () => {
    cy.get("@count").should("exist").should("have.value", "0");

    cy.get("@button").click();
    cy.get("@count").should("have.value", "1");

    cy.get("@button").click();
    cy.get("@count").should("have.value", "2");
  });
});
