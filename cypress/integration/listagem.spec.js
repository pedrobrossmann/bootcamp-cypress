/// <reference types="cypress" />
let getTable = require('../fixtures/webtable-get-unico.json')
context('Listagem', () => {
    it('Listar sem registro', () => {
        cy.intercept({
            method: 'GET',
            url: '**/api/1/databases/userdetails/collections/newtable?**',
            status: 200,
            response: []
        }).as('getNewTable');

        cy.visit('WebTable.html')

        cy.get('div[role=row]').should('have.length', 1)
    });

    it('Listagem com um registro', () => {
        cy.intercept('GET', '**/api/1/databases/userdetails/collections/newtable?**',{
            statusCode:200,
            body: getTable
        })

        cy.visit('WebTable.html')

        cy.get('div[role=row] div[role=gridcell]').eq(4).find('div').as('gridCellPhone') //Salvar como variavel temporaria
        cy.get('@gridCellPhone').should('contain.text', '12345678910')

    });
});