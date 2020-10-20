///<reference types="cypress"/>

//const { isTypedArray } = require("cypress/types/lodash")

describe('Realizar a gestão e utilização de atributos personalizados', () => {
    before(() => {
        //cy.getToken('cleiber.melo@primaverabss.com','qualquer')
    })

    it('Obter Token', () => {
        cy.request({
            method: 'POST',
            url: 'https://stg-identity.primaverabss.com/connect/token', 
            //failOnStatusCode: false,
             body:{                 
                    grant_type: 'client_credentials',
                    client_id: 'invoicing-api-demo',
                    client_secret: 'OmCHfQp518eWJgcyIM0Sla6iq0bKsiWQSP6pr0xrGz4KG73t0gDI05T2Jin58125KGsh0W2p0wNREn5MeN6bIg22',
                    scope: 'application'
           }
        }).its('Form_Data.access_token').should('not.be.empty')
/*          .then(token => {
            cy.request({
                url:'https://elevationfw-core-ii.azurewebsites.net/api/DefaultTest/Azure-STG-Default/corepatterns/schemaAttributes',
                method: 'POST',
                headers: {Authorization: `Bearer ${token}`},
            body: {
                "attributeOptions": {
                    "fieldType": "Normal"
                  },
                  "validationOptions": {
                    "minLength": null,
                    "maxLength": null,
                    "format": "None",
                    "formatOptions": null
                  },
                  "defaultValue": "ReadOnly",
                  "index": 0,
                  "key": "custom_ReadOnly2",
                  "label": "ReadOnly",
                  "isRequired": true,
                  "isVisible": false,
                  "attributeType": "Text",
                  "schemaEntity": "ORDERS.SALES",
                  "isActive": true,
                  "isReadOnly": false
            }
            })
        })  */
    })

    it('Add atributo tipo Number', () => {

    })

    it('Add atributo tipo URL', () => {

    })

    it('Add atributo tipo Email', () => {

    })

    it('Permitir apagar o atributo TipoURL', () => {

    })

    it('Não deve permitir gravar um atributo com o mesmo nome', () => {

    }) 
})

