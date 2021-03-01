Feature: Listagem

    Como usuário, desejo acessar a listage para ver dados de cadastro

    Scenario: Listagem com apenas um registro
        Given que o siste não possui apenas um registro
        When acessar a listagem
        Then devo visualizar apenas um registro

    Scenario: Listagem sem registros
        Given que o siste não possui registros
        When acessar a listagem
        Then devo visualizar a listagem vazia    