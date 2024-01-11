describe("Order Page Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/pizza"); 
  });
  it(".", () => {
    const text = "John Doe";
    cy.get("#isim").type(text).should("have.value", text);
    cy.get('#Küçük').click();
    cy.get('select').select('Orta');
    cy.get('#Pepperoni').check();
    cy.get('#Sucuk').check();
    cy.get('#Biber').check();
    cy.get('#Ananas').check();
    cy.get("#order-button").click()
    cy.url(".contains","/success");
  });
});
