Informações

Para captura de input:

* input[ng-model^⁼Name] //O acento circonflexto server para pesquisar tudo que começa com "Name"

* input[ng-model$⁼Name] //O cifrão server para pesquisar tudo que termina com "Name"

* input[ng-model*⁼Nam] //O asterisco server para pesquisas em tudo"


Para capturar retorno do servidor:

 cy.intercept('GET', '**/api/1/databases/userdetails/collections/newtable?**').as('getNewTable')
 //Os ** server para ignorar tudo que vem antes ou depois da rota. 

 cy.wait('@getNewTable').then((resNewTable) =>{
            cy.log(resNewTable)
    })

Para validar URL:

 cy.url().should('contain', 'WebTable')

 Para armazenar em uma variavel temporaria:

 //Nesse caso podemos utilziar o .as para armazenar em uma variavel temporaria e fazer asserções futuramente. 

 cy.get('div[role=row] div[role=gridcell]').eq(4).find('div').as('gridCellPhone') //Salvar como variavel temporaria
 cy.get('@gridCellPhone').should('contain.text', '12345678910')

Sobre cucumber:

* Cypress para olhar para arquivos .feature em vez de .spec
* Todos arquivos de feature deve ficar dentro da pasta integration
* Os passos para interpletar deve ter o mesmo nome do arquivo

 Given // Contexto
 When  // Ação executada   
 Then // Resultado esperado
