/// <reference types="cypress" />
let getTable = require('../../fixtures/webtable-get-unico.json')

//teste 01
Given(/^que o siste não possui apenas um registro$/, () => {
	cy.intercept('GET', '**/api/1/databases/userdetails/collections/newtable?**',{
        statusCode:200,
        body: getTable
    })
});

When(/^acessar a listagem$/, () => {
    cy.visit('WebTable.html')
});

Then(/^devo visualizar apenas um registro$/, () => {
	cy.get('div[role=row] div[role=gridcell]').eq(4).find('div').as('gridCellPhone') //Salvar como variavel temporaria
    cy.get('@gridCellPhone').should('contain.text', '12345678910')
});

//teste 02

Given(/^que o siste não possui registros$/, () => {
    cy.intercept({
        method: 'GET',
        url: '**/api/1/databases/userdetails/collections/newtable?**',
        status: 200,
        response: []
    }).as('getNewTable');
});

Then(/^devo visualizar a listagem vazia$/, () => {
    cy.get('div[role=row]').should('have.length', 1)
});
