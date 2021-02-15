describe("Channel", () => {
  it("adds the 'searched' element at the end of the list", () => {
    let title;
    cy.visit("/");
    // length should be saved in a variable instead of assumed to be 5, I just don't know how to do it
    cy.get('[data-cy="title"]').should("have.length", 5);
    cy.get('[data-cy="title"]')
      .last()
      .then($title => {
        title = $title.text();
      });
    cy.get('[data-cy="input"]').type("New channel{enter}");
    cy.get('[data-cy="title"]')
      .last()
      .then($newTitle => {
        expect($newTitle.text()).to.equal("New channel");
      });
    //instead of 6 should be "initialLength + 1"
    cy.get('[data-cy="title"]').should("have.length", 6);
  });
});
