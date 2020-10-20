const locJasmin = {

    LOGINJASMIN:{
        USERJASMIN: '#Email',
        PASSWORDJASMIN: '#login-password',
        BTN_LOGINJASMIN: '#login-submit',
        BTN_GRAVARDADOS: '.form-footer-group > a',
        BTN_GRAVARDADOS2: '[href="/login/rec?code=CfDJ8Ad_TSxsKMpAnPyMP02KTQvaP9Bb6-sKv9IozzIMiJ8w_F91LAt9DLXKfan3KbfOfEmSIrpKbZMD4ikXa5PnIxwEFP6DIM-szxs-NyVS-_q6ZUqTY6JbetZrMSrvyUNjGC83QvF0JiyIspQekby7MTSFEzRMR5eWACARJUaAMiLl&returnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Djasmin%26redirect_uri%3Dhttps%253A%252F%252Felevationfw-core-ii.azurewebsites.net%252Flogin%26response_type%3Dcode%2520id_token%2520token%26scope%3Dapplication%2520mvc%2520openid%2520profile%2520email%2520subscription%2520lithium-pushnotifications-hub%26state%3DOpenIdConnect.AuthenticationProperties%253DdAu6l9PyEs4Gziy0-wktVSf7CE_SberxcfXHint5mnXTpE0RZNsY9Xt4GcM6jeUr_-hVVJ14ABo-4yT3XTorWA4VUvVsMOCXix1JPbM4OjkJ2TUVV6FhDO4LUNn9boq3cI-Qtyg4jHP6zTdrZWQM1_RlUdgCNxtzxWimlzZNX8LtF0tRljZBMra0WcNf1OO5hnvq7gtJwV-EgB3JoAfEWiIVQlz9FiObX-jy_rBGiu2VOhQOftNX-kit0fYYi6ocCgahEQ%26response_mode%3Dform_post%26nonce%3D637299714052316839.MjA1YjYxMTMtZWE4ZS00NzllLWFjY2ItZWFhOTc0NjMyZDdiMDdjMTljNjQtNTBmYy00MmVlLTkzNmUtMzhkZjU5ZmQyZjY0%26x-client-SKU%3DID_NET461%26x-client-ver%3D5.6.0.0"]'
    },
    MENUJASMIN: {
        OVERWIEW: 'a[class="sidebar-link"]', 
        SALES: "//span[@class='title'][contains(.,'Sales')]",
        ORDERS: `//*[@id="menu-options-container"]/ul/li[4]/a/span[@class='title'][contains(.,'Orders')]`,
    },
    EXTENSIBILIDADE: {
        BTN_CONFIG: '.ng-star-inserted > .pri-btn-icon',
        MANAGE_CUSTOM_ATTRIBUTE: '[title="Manage Custom Attributes"] > .description',
        BTN_ADD_ATTRIBUTE: '.pri-main-actions > .pri-btn-primary'
    },
    FORMCREATEATTRIBUTE: {
        ESCREVERLABEL: '.pri-field-required > .content-wrapper > pri-wrapper-label.ng-star-inserted > :nth-child(2) > pri-field-wrapper.ng-star-inserted > .pri-field > pri-text-field.ng-star-inserted > .form-control',
        SELECIONARTYPE: ':nth-child(2) > formly-group.ng-star-inserted > .row > :nth-child(1) > formly-wrapper-fieldset.ng-star-inserted > .form-group > pri-errors-wrapper.ng-star-inserted > :nth-child(1) > .content-wrapper > pri-wrapper-label.ng-star-inserted > :nth-child(2) > pri-field-wrapper.ng-star-inserted > .pri-field > formly-field-select.ng-star-inserted > .form-control',
        VERIFICARDOMAINTYPE: ':nth-child(2) > formly-group.ng-star-inserted > .row > :nth-child(1) > formly-wrapper-fieldset.ng-star-inserted > .form-group > pri-errors-wrapper.ng-star-inserted > :nth-child(1) > .content-wrapper > pri-wrapper-label.ng-star-inserted > :nth-child(2) > pri-field-wrapper.ng-star-inserted > .pri-field > formly-field-select.ng-star-inserted > .form-control option',
        VERIFICARFIELDTYPE: ':nth-child(3) > formly-wrapper-fieldset.ng-star-inserted > .form-group > pri-errors-wrapper.ng-star-inserted > :nth-child(1) > .content-wrapper > pri-wrapper-label.ng-star-inserted > :nth-child(2) > pri-field-wrapper.ng-star-inserted > .pri-field > formly-field-select.ng-star-inserted > .form-control option',
        VERIFICARSTRATEGY: ':nth-child(4) > formly-group.ng-star-inserted > .row > .ValueListItem > formly-wrapper-fieldset.ng-star-inserted > .form-group > pri-errors-wrapper.ng-star-inserted > :nth-child(1) > .content-wrapper > pri-wrapper-label.ng-star-inserted > :nth-child(2) > pri-field-wrapper.ng-star-inserted > .pri-field > formly-field-select.ng-star-inserted > .form-control option',
        VERIFICARFORMAT: ':nth-child(3) > formly-group.ng-star-inserted > .row > .ValueListItem > formly-wrapper-fieldset.ng-star-inserted > .form-group > pri-errors-wrapper.ng-star-inserted > :nth-child(1) > .content-wrapper > pri-wrapper-label.ng-star-inserted > :nth-child(2) > pri-field-wrapper.ng-star-inserted > .pri-field > formly-field-select.ng-star-inserted > .form-control option',
        ATUALIZARNAME: '#popupView > .pri-editor-view',
        BTN_GUARDAR_ATTRIBUTE: '.pri-main-actions > .pri-btn-primary',
        BTN_APAGAR_ATTRIBUTE: '.pri-modal-footer > .pri-actions > .pri-sec-actions > .btn-group > .pri-btn-icon',
        POPUP_CONFIRMACAO_SIM: '#modal-yes',
        BTN_CANCEL: '.pri-main-actions > .pri-btn-link',
        BTN_CLOSED: '.pri-main-actions > .pri-btn-link',
        LINKORDERLINE: `//div[@class="pri-modal"]//div[@id="popupView"]//div[@class="pri-modal-body"]//div[@class="extensibility-list ng-star-inserted"]//div[@id="entities-list"]//div[@class="extensibility-entity ng-star-inserted"]//span[@class="entityName"][contains(., 'Order Line')]`,
        DECIMALPLACES: `//input[@class="pri-decimal-input form-control input-md"]`,
        SELECIONARDEFAULTVALUEBOOLEAN: ':nth-child(2) > formly-wrapper-fieldset.ng-star-inserted > .form-group > pri-errors-wrapper.ng-star-inserted > :nth-child(1) > .content-wrapper > pri-wrapper-label.ng-star-inserted > :nth-child(2) > pri-field-wrapper.ng-star-inserted > .pri-field > formly-field-select.ng-star-inserted > .form-control'
    },
    LISTADEATRIBUTOS:{
        SELECIONARATRIBUTO: nameatt => `//div[@class="custom-attributes"]//div[@id="attributes-list"]//div[@class="attributes-wrapper ng-star-inserted"]//following-sibling::div[@class="extensibility-name"][contains(., '${nameatt}')]`,
        visualizarAtributo: nameAtt => `//div[@class="custom-attributes"]//div[@id="attributes-list"]//div[@class="attributes-wrapper ng-star-inserted"]//following-sibling::div[@class="extensibility-name"][contains(.,'${nameAtt}')]`
    },
    ORDER:{
        BTN_CREATE: '.pri-btn-default-toggle',
        OPTION_ORDER: '.open > .dropdown-menu > :nth-child(1) > a',
        ACEDER_COMPONENTE_PESQUISA: '#BuyerCustomerPartyOptionsBtn',
        ACEDER_LISTA: '[title="List"] > .description',
        SELECIONAR_CUSTOMER: '.grid-column.LongText > .grid-cell',
        ACEDER_BTN_SECELIONAR: '.pri-modal-footer > .pri-btn-primary',
        ACEDER_LINHA_DETAILS: '#documentlinessalesitemline0',
        ACEDER_CAMPO_ITEM: '#SalesItemInput',
        ACEDER_COMPONENTE_PESQUISA_ITEM: '#SalesItemOptionsBtn',
        ACEDER_COMPONENTE_LISTA_ITEM: '[title="List"] > .description',
        SELECIONAR_ITEM: '.grid-column.LongText > .grid-cell',
        BTN_SELECIONAR_ITEM: '.pri-modal-footer > .pri-btn-primary',
        ACEDER_ROW_EXTENSIBILIDADE: '#extensibility > .pri-expander-header > [aria-expanded="false"] > .title',
        PREENCHER_CUSTOM_ATRIBUTE_TIPO_MEMO: '#Custom_TipoMemoInput',
        ACEDER_COMPONENTE_OPTIONS_SAVE: '#mainCommandToggle0',
        ACEDER_OPTION_SAVE: ':nth-child(2) > #mainCommandNested0'

    },

    MESSAGEAPROVACAO: '.toast-message', 
    MESSAGENEGACAO: '.message'
}
export default locJasmin;

