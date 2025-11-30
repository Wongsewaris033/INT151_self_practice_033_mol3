describe("Login Page", () => {
    it("should display login button and click it", () => {
      cy.visit("http://localhost:5173");
  
      cy.get(".login-btn")
        .should("be.visible")
        .click();
    });
  
    it("should type username", () => {
      cy.get("#username").type("win");
      cy.get("#password").type("1234");
      cy.get("button.submit").click();
    });
  });
  