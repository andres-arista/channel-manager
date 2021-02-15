describe("Channel", () => {
  it("removes the clicked element", () => {
    let title;
    cy.visit("/");
    // length should be saved in a variable instead of assumed to be 5, I just don't know how to do it
    cy.get('[data-cy="title"]').should("have.length", 5);
    cy.get('[data-cy="title"]')
      .first()
      .then($title => {
        title = $title.text();
      });
    cy.get('[data-cy="channel"]')
      .first()
      .contains("Remove")
      .click();
    cy.get('[data-cy="title"]')
      .first()
      .then($newTitle => {
        expect($newTitle.text()).to.not.equal(title);
      });
    //instead of 4 should be "initialLength - 1"
    cy.get('[data-cy="title"]').should("have.length", 4);
  });
});
