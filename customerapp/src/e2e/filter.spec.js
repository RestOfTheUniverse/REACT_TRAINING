describe("filter customer", () => {
    it("filter by name Geller", () => {
        cy.visit("http://localhost:3000/");
        cy.get('input[placeholder="search by name"]')
            .type("Geller")
            .get('.row')
            .then(rows => {
                expect(rows.length).toEqual(2);
            });
    });
})