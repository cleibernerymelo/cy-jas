///<reference types="cypress"/>

import locJasmin from '../../support/locatorsJasmin'
import '../../support/commandsJasmin'
import { should } from 'chai'


describe('Verificar parametrizações para add atributo personalizado na Entitie Order', () => {
    before(() => {

        cy.LoginJasmin('cleiber.melo@primaverabss.com','qualquer')
        //cy.LoginJasmin('cleiber.melo@primaverabss.com','qualquer')
        //cy.get('div[id="rootMenus"]').click()
       // cy.get('div[id="rootMenus"]').click()
       // cy.get('div[id="rootMenus"]').click()
       // cy.wait(5000)
       // cy.log(locJasmin.MENUJASMIN.OVERWIEW)  
        //cy.xpath(locJasmin.MENUJASMIN.SALES).click()
        //cy.wait(5000)
       // cy.xpath(locJasmin.MENUJASMIN.ORDERS).click()
        //cy.wait(5000)
        //cy.get(locJasmin.EXTENSIBILIDADE.BTN_CONFIG).click()
        //cy.get(locJasmin.EXTENSIBILIDADE.MANAGE_CUSTOM_ATTRIBUTE).click()
        //cy.get(locJasmin.EXTENSIBILIDADE.BTN_ADD_ATTRIBUTE).click()
        //cy.wait(2000)
    })

    it.skip('Verificar se todos os domain types estão disponiveis', () => {
        cy.ValidarDomainType()
/*         cy.get(locJasmin.MENUJASMIN.BTN_ADD_ATTRIBUTE).click()
        cy.wait(2000)
        cy.get(locJasmin.FORMCREATEATTRIBUTE.VERIFICARDOMAINTYPE).should('have.length', 16)
        cy.get(locJasmin.FORMCREATEATTRIBUTE.VERIFICARDOMAINTYPE).then($arr => {
            const values = []
            $arr.each(function () {
                values.push(this.innerHTML)
            })
            expect(values).to.have.members(["ShortText","Text","LongText","Memo","Boolean","Number",
            "Decimal","Percentage","Date","DateTime","URL","Phone","Email","Entity Lookup","Enumerable","Money"])
        }) */
    })

    it.skip('Verificar se todos os field type estão disponiveis', () => {
        cy.ValidarFieldType()
    })

    it.skip('Verificar se todos os default value strategy estão disponiveis', () => {
        cy.ValidarDefaultValueStrategy()
    })

    it.skip('Verificar se todas as opções de format estão disponiveis', () => {
        cy.ValidarFormat()
        cy.get(locJasmin.FORMCREATEATTRIBUTE.BTN_CANCEL).click()
        cy.get(locJasmin.FORMCREATEATTRIBUTE.BTN_CLOSED).click()
    })
})

describe.skip('Criar, apagar e alterar atributos personalizado na Entitie Order', () => {
    it('Add atributo tipo Memo', () => {
        cy.get(locJasmin.EXTENSIBILIDADE.BTN_ADD_ATTRIBUTE).click()
        cy.wait(2000)
        cy.AddAttibutoTipoMemo()
    })

    it('Add atributo tipo Number', () => {
        cy.get(locJasmin.EXTENSIBILIDADE.BTN_ADD_ATTRIBUTE).click()
        cy.wait(2000)
        cy.AddAtributoTipoNumber()
    })

    it('Add atributo tipo URL', () => {
        cy.get(locJasmin.EXTENSIBILIDADE.BTN_ADD_ATTRIBUTE).click()
        cy.wait(2000)
        cy.AddAtributoTipoURL()
    })

    it('Add atributo tipo Email', () => {
        cy.get(locJasmin.EXTENSIBILIDADE.BTN_ADD_ATTRIBUTE).click()
        cy.wait(2000)
        cy.AddAtributoTipoEmail()
    })

    it('Apagar o atributo TipoURL', () => {
        cy.xpath(locJasmin.LISTADEATRIBUTOS.SELECIONARATRIBUTO('TipoURL')).click()
        cy.wait(2000)
        cy.ApagarAtributo()
        
    })
    
    
    it('Não deve permitir gravar um atributo com o mesmo nome', () => {
        cy.get(locJasmin.EXTENSIBILIDADE.BTN_ADD_ATTRIBUTE).click({ force: true })
        //cy.get('.pri-main-actions > .pri-btn-primary').click()
        cy.get(locJasmin.FORMCREATEATTRIBUTE.ESCREVERLABEL).type('TipoNumber', {backspace: true})
        //cy.get('.pri-field-required > .content-wrapper > pri-wrapper-label.ng-star-inserted > :nth-child(2) > pri-field-wrapper.ng-star-inserted > .pri-field > pri-text-field.ng-star-inserted > .form-control').type('Cypress1')
        cy.wait(2000)
        //cy.get(locJasmin.FORMCREATEATTRIBUTE.ATUALIZARNAME).click({ force: true })
        cy.get(locJasmin.FORMCREATEATTRIBUTE.SELECIONARTYPE).select('Number', { force: true })
        //cy.get('#popupView > .pri-editor-view').click()
        cy.get(locJasmin.FORMCREATEATTRIBUTE.BTN_GUARDAR_ATTRIBUTE).click({ force: true })
        //cy.get('.pri-main-actions > .pri-btn-primary').click()
        cy.wait(2000)
        cy.get(locJasmin.MESSAGENEGACAO).should('contain', 'already exists')
        cy.get(locJasmin.FORMCREATEATTRIBUTE.BTN_CANCEL).click({ force: true })
        cy.reload()
        cy.get(locJasmin.EXTENSIBILIDADE.BTN_CONFIG).click()
        cy.get(locJasmin.EXTENSIBILIDADE.MANAGE_CUSTOM_ATTRIBUTE).click()
        //cy.get('.pri-main-actions > .pri-btn-link').click()
    })  
})

describe.skip('Verificar parametrizações para add atributo personalizado na Entitie Order Line', () => {
    it('Validar que existe 15 domain type na combobox e que o tipo Memo não esteja na lista ', () => {
        cy.xpath(locJasmin.FORMCREATEATTRIBUTE.LINKORDERLINE).click()
        cy.get(locJasmin.EXTENSIBILIDADE.BTN_ADD_ATTRIBUTE).click()
        cy.ValidarDomainTypeOrderLine()
    })

    it('Verificar se todos os field type estão disponiveis', () => {
        cy.ValidarFieldType()
    })

    it('Verificar se todos os default value strategy estão disponiveis', () => {
        cy.ValidarDefaultValueStrategy()
    })

    it('Verificar se todas as opções de format estão disponiveis', () => {
        cy.ValidarFormat()
        cy.get(locJasmin.FORMCREATEATTRIBUTE.BTN_CANCEL).click()
    })
})

describe.skip('Criar, apagar e alterar atributos personalizado na Entitie Order Line', () => {
    it('Add atributo tipo ShortText', () => {
        cy.get(locJasmin.EXTENSIBILIDADE.BTN_ADD_ATTRIBUTE).click()
        cy.wait(2000)
        cy.AddAtributoTipoShortText()
    })

    it('Add atributo tipo Text', () => {
        cy.get(locJasmin.EXTENSIBILIDADE.BTN_ADD_ATTRIBUTE).click()
        cy.wait(2000)
        cy.AddAtributoTipoText()
    })

    it('Add atributo tipo LongText', () => {
        cy.get(locJasmin.EXTENSIBILIDADE.BTN_ADD_ATTRIBUTE).click()
        cy.wait(2000)
        cy.AddAtributoTipoLongText()
    })

    it('Add atributo tipo Boolean', () => {
        cy.get(locJasmin.EXTENSIBILIDADE.BTN_ADD_ATTRIBUTE).click()
        cy.wait(2000)
        cy.AddAtributoTipoBoolean()
    })

/*       it('Add atributo tipo Decimal', () => {
        cy.xpath(locJasmin.FORMCREATEATTRIBUTE.LINKORDERLINE).click()
        cy.get(locJasmin.EXTENSIBILIDADE.BTN_ADD_ATTRIBUTE).click()
        cy.wait(2000)
        cy.get(locJasmin.FORMCREATEATTRIBUTE.ESCREVERLABEL).type('TipoDecimal', {backspace: true})
        cy.wait(2000)
        cy.get(locJasmin.FORMCREATEATTRIBUTE.ATUALIZARNAME).click()
        cy.wait(2000)
        cy.get(locJasmin.FORMCREATEATTRIBUTE.SELECIONARTYPE).select('Decimal')
        cy.wait(2000)
        cy.xpath(locJasmin.FORMCREATEATTRIBUTE.DECIMALPLACES).click()
        cy.wait(2000) 
        cy.xpath(locJasmin.FORMCREATEATTRIBUTE.DECIMALPLACES).should('have.length', 6)
        cy.xpath(locJasmin.FORMCREATEATTRIBUTE.DECIMALPLACES).type('2', {force: true})    
        cy.wait(2000)
        cy.get(locJasmin.FORMCREATEATTRIBUTE.BTN_GUARDAR_ATTRIBUTE).click()
        cy.wait(2000)
        cy.get(locJasmin.MESSAGEAPROVACAO).should('contain', 'successfully created!')
    }) */  

    it('Apagar o atributo TipoText', () => {
        cy.xpath(locJasmin.LISTADEATRIBUTOS.SELECIONARATRIBUTO('TipoText')).click()
        cy.wait(2000)
        cy.ApagarAtributo()
    })

    it('Não deve permitir gravar um atributo com o mesmo nome', () => {
        cy.get(locJasmin.EXTENSIBILIDADE.BTN_ADD_ATTRIBUTE).click({ force: true })
        cy.get(locJasmin.FORMCREATEATTRIBUTE.ESCREVERLABEL).type('TipoLongText', {backspace: true})
        cy.wait(2000)
        cy.get(locJasmin.FORMCREATEATTRIBUTE.SELECIONARTYPE).select('LongText', { force: true })
        cy.get(locJasmin.FORMCREATEATTRIBUTE.BTN_GUARDAR_ATTRIBUTE).click({ force: true })
        cy.wait(2000)
        cy.get(locJasmin.MESSAGENEGACAO).should('contain', 'already exists')
        cy.get(locJasmin.FORMCREATEATTRIBUTE.BTN_CANCEL).click({ force: true })
        cy.get(locJasmin.FORMCREATEATTRIBUTE.BTN_CLOSED).click({ force: true })
        cy.reload()
/*         cy.get(locJasmin.EXTENSIBILIDADE.BTN_CONFIG).click()
        cy.get(locJasmin.EXTENSIBILIDADE.MANAGE_CUSTOM_ATTRIBUTE).click() */
   })  
})

describe.skip('Criar Order', () => {
    it('Criar Order', () => {
        cy.get(locJasmin.ORDER.BTN_CREATE).click()
        cy.get(locJasmin.ORDER.OPTION_ORDER).click()
        cy.get(locJasmin.ORDER.ACEDER_COMPONENTE_PESQUISA).click({force: true})
        cy.get(locJasmin.ORDER.ACEDER_LISTA).click()
        cy.get(locJasmin.ORDER.SELECIONAR_CUSTOMER).click()
        cy.get(locJasmin.ORDER.ACEDER_BTN_SECELIONAR).click()
        cy.get(locJasmin.ORDER.ACEDER_LINHA_DETAILS).click()
        cy.get(locJasmin.ORDER.ACEDER_CAMPO_ITEM).click()
        cy.get(locJasmin.ORDER.ACEDER_COMPONENTE_PESQUISA_ITEM).click()
        cy.get(locJasmin.ORDER.ACEDER_COMPONENTE_LISTA_ITEM).click()
        cy.get(locJasmin.ORDER.SELECIONAR_ITEM).click()
        cy.get(locJasmin.ORDER.BTN_SELECIONAR_ITEM).click()
        cy.get(locJasmin.ORDER.ACEDER_ROW_EXTENSIBILIDADE).click()
        cy.get(locJasmin.ORDER.PREENCHER_CUSTOM_ATRIBUTE_TIPO_MEMO).type('Programa de incentivo a inovação', {backspace: true} )
        cy.get(locJasmin.ORDER.ACEDER_COMPONENTE_OPTIONS_SAVE).click()
        cy.get(locJasmin.ORDER.ACEDER_OPTION_SAVE).click()
        cy.wait(5000)
        cy.get(locJasmin.MESSAGEAPROVACAO).should('contain', 'Operation successfully completed')
        cy.get(locJasmin.MENUJASMIN.ORDERS).click()
               //cy.get('#BuyerCustomerPartyInput').type('INDIF', {enter: true} )
    })
})
