Feature: Gestão de atributos personalizados

    Scenario: Add atributo tipo Text e preencher toda a parametrização disponivel
        Given Que estou conectado no Jasmin
        When Acesso o form para criar um atributo
        And Realizo o seu cadastro na entitie order
        Then Devo visualiza-lo na lista entitie order
    
