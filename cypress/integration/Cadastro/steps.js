// Implementação dos passos descritos na feature
/// <reference types="cypress" />

let Chance = require('chance')
let chance = new Chance()

Given(/^que acesso o site$/, () => {
    cy.server()
    cy.route('GET', '**/api/1/databases/userdetails/collections/newtable?**').as('getNewTable')
    cy.route('POST', '**/api/1/databases/userdetails/collections/newtable?**').as('postNewTable')
    cy.route('POST', '**/api/1/databases/userdetails/collections/usertable?**').as('postUserTable')
    cy.visit('Register.html');
});

When(/^informar meus dados$/, () => {
    cy.get('input[placeholder="First Name"]').type(chance.first())
    cy.get('input[ng-model^=Last]').type(chance.last())
    cy.get('textarea[ng-model="Adress"]').type(chance.address())
    cy.get('input[ng-model="EmailAdress"]').type(chance.email())
    cy.get('input[ng-model="Phone"').type(chance.phone({ formatted: false}))
    cy.get('input[value=FeMale]').check()
    cy.get('#checkbox1').check()
    cy.get('input[value=Movies]').check()
    cy.get('input[type=checkbox]').check('Cricket')
    //cy.get('#msdd').select('Bulgarian')
    cy.get('#Skills').select('Android')
    cy.get('#countries').select('Afghanistan')
    cy.get('#country').select('Bangladesh', {force: true})
    cy.get('#yearbox').select('1992')
    cy.get('select[placeholder=Month]').select('February')
    cy.get('#daybox').select('4')
    cy.get('#firstpassword').type('#Pocoyo2020')
    cy.get('#secondpassword').type('#Pocoyo2020')

    //Inserir Imagem
    cy.get('#imagesrc').attachFile('imagen.jpg')
});

When(/^salvar$/, () => {
	cy.get('#submitbtn').click()
});

Then(/^devo ser cadastrado com sucesso$/, () => {
    // cy.wait('@getNewTable').then((resNewTable) =>{
    //     expect(resNewTable.status).to.eq(200)
    //  })
});
