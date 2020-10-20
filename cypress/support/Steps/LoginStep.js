import locJasmin from '../locatorsJasmin'
import commandsJasmin from '../commandsJasmin'

Given("Que estou conectado no Jasmin", () => {
    cy.LoginJasmin('cleiber.melo@primaverabss.com','qualquer')
})
When("Acesso o form para criar um atributo", () => {
    cy.get(locJasmin.MENUJASMIN.OVERWIEW).click()
    cy.wait(5000)
    cy.xpath(locJasmin.MENUJASMIN.SALES).click()
    cy.wait(5000)
    cy.xpath(locJasmin.MENUJASMIN.ORDERS).click()
    cy.wait(5000)
    cy.get(locJasmin.EXTENSIBILIDADE.BTN_CONFIG).click()
    cy.wait(5000)
    cy.get(locJasmin.EXTENSIBILIDADE.MANAGE_CUSTOM_ATTRIBUTE).click()
    cy.wait(5000)
    cy.get(locJasmin.EXTENSIBILIDADE.BTN_ADD_ATTRIBUTE).click()
})
And("Realizo o seu cadastro na entitie order", () => {
    cy.AddAtributoTipoText()
    })
Then("Devo visualiza-lo na lista entitie order", () => {
    //cy.xpath(`//div[@class="custom-attributes"]//div[@id="attributes-list"]//div[@class="attributes-wrapper ng-star-inserted"]//following-sibling::div[@class="extensibility-name"][contains(.,"TipoText")]`)
    cy.xpath(locJasmin.LISTADEATRIBUTOS.visualizarAtributo('TipoText'))
    })