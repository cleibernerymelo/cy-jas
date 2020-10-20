import locJasmin from './locatorsJasmin'

Cypress.Commands.add('LoginJasmin', (user, passwd) => {
    cy.visit('https://st-invoicing-engine.primaverabss.com/801317/801317-0027')
    cy.get(locJasmin.LOGINJASMIN.USERJASMIN).type(user)
    cy.get(locJasmin.LOGINJASMIN.PASSWORDJASMIN).type(passwd)
    cy.get(locJasmin.LOGINJASMIN.BTN_LOGINJASMIN).click()
    cy.get(locJasmin.LOGINJASMIN.BTN_GRAVARDADOS).click()
})

Cypress.Commands.add('ValidarDomainType', () => {
    cy.get(locJasmin.FORMCREATEATTRIBUTE.VERIFICARDOMAINTYPE).should('have.length', 16)
    cy.get(locJasmin.FORMCREATEATTRIBUTE.VERIFICARDOMAINTYPE).then($arr => {
        const values = []
        $arr.each(function () {
            values.push(this.innerHTML)
        })
        expect(values).to.have.members(["ShortText","Text","LongText","Memo","Boolean","Number",
        "Decimal","Percentage","Date","DateTime","URL","Phone","Email","Entity Lookup","Enumerable","Money"])
    })
})

Cypress.Commands.add('ValidarFieldType', () => {
    cy.get(locJasmin.FORMCREATEATTRIBUTE.VERIFICARFIELDTYPE).should('have.length', 2)
    cy.get(locJasmin.FORMCREATEATTRIBUTE.VERIFICARFIELDTYPE).then($arr => {
        const values = []
        $arr.each(function () {
            values.push(this.innerHTML)
        })
        expect(values).to.have.members(["Normal","Autocomplete"])
    })
})

Cypress.Commands.add('ValidarDefaultValueStrategy', () => {
    cy.get(locJasmin.FORMCREATEATTRIBUTE.VERIFICARSTRATEGY).should('have.length', 3)
    cy.get(locJasmin.FORMCREATEATTRIBUTE.VERIFICARSTRATEGY).then($arr => {
        const values = []
        $arr.each(function () {
            values.push(this.innerHTML)
        })
        expect(values).to.have.members(["Standard","Bind to other attribute","Other attribute first value"])
    })
})

Cypress.Commands.add('ValidarFormat', () => {
    cy.get(locJasmin.FORMCREATEATTRIBUTE.VERIFICARFORMAT).should('have.length', 6)
    cy.get(locJasmin.FORMCREATEATTRIBUTE.VERIFICARFORMAT).then($arr => {
        const values = []
        $arr.each(function () {
            values.push(this.innerHTML)
        })
        expect(values).to.have.members(["None","Pattern","Upper Case", "Lower Case", "Valid Characters", "Invalid Characters"])
    })
})

Cypress.Commands.add('AddAtributoTipoShortText', () => {
    cy.get(locJasmin.FORMCREATEATTRIBUTE.ESCREVERLABEL).type('ShortText', {backspace: true})
    cy.wait(2000)
    cy.get(locJasmin.FORMCREATEATTRIBUTE.SELECIONARTYPE).select('ShortText')
    cy.get(locJasmin.FORMCREATEATTRIBUTE.BTN_GUARDAR_ATTRIBUTE).click()
    cy.wait(2000)
    cy.get(locJasmin.MESSAGEAPROVACAO).should('contain', 'successfully created!')
})

Cypress.Commands.add('AddAtributoTipoText', () => {
    cy.get(locJasmin.FORMCREATEATTRIBUTE.ESCREVERLABEL).type('TipoText', {backspace: true})
    cy.wait(2000)
    cy.get(locJasmin.FORMCREATEATTRIBUTE.SELECIONARTYPE).select('Text')
    cy.get(locJasmin.FORMCREATEATTRIBUTE.BTN_GUARDAR_ATTRIBUTE).click()
    cy.wait(2000)
    cy.get(locJasmin.MESSAGEAPROVACAO).should('contain', 'successfully created!')
})

Cypress.Commands.add('AddAtributoTipoLongText', () => {
    cy.get(locJasmin.FORMCREATEATTRIBUTE.ESCREVERLABEL).type('TipoLongText', {backspace: true})
    cy.wait(2000)
    cy.get(locJasmin.FORMCREATEATTRIBUTE.SELECIONARTYPE).select('LongText')
    cy.get(locJasmin.FORMCREATEATTRIBUTE.BTN_GUARDAR_ATTRIBUTE).click()
    cy.wait(2000)
    cy.get(locJasmin.MESSAGEAPROVACAO).should('contain', 'successfully created!')
})

Cypress.Commands.add('AddAttibutoTipoMemo', () => {
    cy.get(locJasmin.FORMCREATEATTRIBUTE.ESCREVERLABEL).type('TipoMemoNew', {backspace: true})
    cy.wait(2000)
    cy.get(locJasmin.FORMCREATEATTRIBUTE.SELECIONARTYPE).select('Memo')
    cy.get(locJasmin.FORMCREATEATTRIBUTE.BTN_GUARDAR_ATTRIBUTE).click()
    cy.wait(2000)
    cy.get(locJasmin.MESSAGEAPROVACAO).should('contain', 'successfully created!')
})

Cypress.Commands.add('AddAtributoTipoBoolean', () => {
    cy.get(locJasmin.FORMCREATEATTRIBUTE.ESCREVERLABEL).type('TipoBooleanT', {backspace: true})
    cy.wait(2000)
    cy.get(locJasmin.FORMCREATEATTRIBUTE.SELECIONARTYPE).select('Boolean')
    cy.get(locJasmin.FORMCREATEATTRIBUTE.SELECIONARDEFAULTVALUEBOOLEAN).select('True')
    cy.get(locJasmin.FORMCREATEATTRIBUTE.BTN_GUARDAR_ATTRIBUTE).click()
    cy.wait(2000)
    cy.get(locJasmin.MESSAGEAPROVACAO).should('contain', 'successfully created!')
})

Cypress.Commands.add('AddAtributoTipoNumber', () => {
    cy.get(locJasmin.FORMCREATEATTRIBUTE.ESCREVERLABEL).type('TipoNumber', {backspace: true})
    cy.wait(2000)
    cy.get(locJasmin.FORMCREATEATTRIBUTE.SELECIONARTYPE).select('Number')
    cy.get(locJasmin.FORMCREATEATTRIBUTE.BTN_GUARDAR_ATTRIBUTE).click()
    cy.wait(2000)
    cy.get(locJasmin.MESSAGEAPROVACAO).should('contain', 'successfully created!')
})

Cypress.Commands.add('AddAtributoTipoURL', () => {
    cy.get(locJasmin.FORMCREATEATTRIBUTE.ESCREVERLABEL).type('TipoURL', {backspace: true})
    cy.wait(2000)
    cy.get(locJasmin.FORMCREATEATTRIBUTE.SELECIONARTYPE).select('URL')
    cy.get(locJasmin.FORMCREATEATTRIBUTE.BTN_GUARDAR_ATTRIBUTE).click()
    cy.wait(2000)
    cy.get(locJasmin.MESSAGEAPROVACAO).should('contain', 'successfully created!')
})

Cypress.Commands.add('AddAtributoTipoEmail', () => {
    cy.get(locJasmin.FORMCREATEATTRIBUTE.ESCREVERLABEL).type('TipoEmail', {backspace: true})
    cy.wait(2000)
    cy.get(locJasmin.FORMCREATEATTRIBUTE.SELECIONARTYPE).select('Email')
    cy.get(locJasmin.FORMCREATEATTRIBUTE.BTN_GUARDAR_ATTRIBUTE).click()
    cy.wait(2000)
    cy.get(locJasmin.MESSAGEAPROVACAO).should('contain', 'successfully created!')
})

Cypress.Commands.add('ApagarAtributo', () => {
    cy.get(locJasmin.FORMCREATEATTRIBUTE.BTN_APAGAR_ATTRIBUTE).click()
    cy.get(locJasmin.FORMCREATEATTRIBUTE.POPUP_CONFIRMACAO_SIM).click()
    cy.get(locJasmin.MESSAGEAPROVACAO).should('contain', 'successfully deleted')
})

Cypress.Commands.add('ValidarDomainTypeOrderLine', () => {
    cy.get(locJasmin.FORMCREATEATTRIBUTE.VERIFICARDOMAINTYPE).should('have.length', 15)
    cy.get(locJasmin.FORMCREATEATTRIBUTE.VERIFICARDOMAINTYPE).then($arr => {
        const values = []
        $arr.each(function () {
            values.push(this.innerHTML)
        })
        expect(values).to.have.members(["ShortText","Text","LongText","Boolean","Number",
        "Decimal","Percentage","Date","DateTime","URL","Phone","Email","Entity Lookup","Enumerable","Money"])
    })
})