// Steps/passos comuns a mais de uma feature

Given(/^que acesso o site$/, () => {
    cy.intercept('GET', '**/api/1/databases/userdetails/collections/newtable?**').as('getNewTable')
    cy.intercept('POST', '**/api/1/databases/userdetails/collections/newtable?**').as('postNewTable')
    cy.intercept('POST', '**/api/1/databases/userdetails/collections/usertable?**').as('postUserTable')
    cy.visit('Register.html');
});