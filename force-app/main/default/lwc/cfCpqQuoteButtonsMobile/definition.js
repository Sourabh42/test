let definition =
      {"dataSource":{"contextVariables":[],"orderBy":{},"type":null,"value":{}},"dynamicCanvasWidth":{"type":"desktop"},"enableLwc":true,"events":[{"actionList":[{"card":"{card}","draggable":true,"isOpen":false,"key":"1625913125918-o3bbbgxuv","label":"Action","stateAction":{"eventName":"setValues","fieldValues":[{"fieldName":"Parent.details","fieldValue":"{action.response.records[0].details}"}],"id":"flex-action-1623821093875","type":"cardAction"}}],"channelname":"cpq_{recordId}","displayLabel":"cpq_{recordId}:cpq_cart_updated","element":"action","eventLabel":"pubsub","eventname":"cpq_cart_updated","eventtype":"pubsub","key":"event-0","recordIndex":"0"}],"globalCSS":false,"isFlex":true,"lwc":{"DeveloperName":"cfCpqQuoteButtonsMobile_2_Vlocity","Id":"0RbDp000000hs3nSAK","ManageableState":"unmanaged","MasterLabel":"cfCpqQuoteButtonsMobile_2_Vlocity","NamespacePrefix":"vlocity_cmt"},"multilanguageSupport":true,"sessionVars":[],"states":[{"actions":[],"childCards":[],"components":{"layer-0":{"children":[{"class":"slds-col ","element":"flexMenu","elementLabel":"Menu-4","name":"Menu","property":{"card":"{card}","data-conditions":{"group":[],"id":"state-condition-object","isParent":true},"data-preloadConditionalElement":false,"flyoutObj":{"menuItemFlyout4":{"displayName":"Request Pending Approval","flyoutLwc":"l-w-c-c-p-q-approve-discount-items-multi-language","flyoutParams":{"ContextId":"{recordId}"},"flyoutType":"OmniScripts","hasExtraParams":true,"id":"menuItemFlyout4","layoutType":"lightning","openFlyoutIn":"Modal","openUrlIn":"Current Window","osName":"LWCCPQ/ApproveDiscountItems/Multi-Language","parent":"menu","type":"Flyout","vlocityIcon":"icon-v-document1-line"},"menuItemFlyout6":{"flyoutLwc":"cpqDeleteModal","flyoutParams":{"cartId":"{Id}","objType":"Quote"},"flyoutType":"childCard","id":"menuItemFlyout6"},"menuItemFlyout9":{"flyoutLwc":"cpqDiscount","flyoutParams":{"cartId":"{Id}"},"flyoutType":"childCard","id":"menuItemFlyout9"}},"iconName":"utility:down","menuItems":[{"actionConditions":null,"actionData":{"card":"{card}","contextId":"\\{Id}","sObjectType":"Quote","stateAction":{"actionConditions":null,"displayName":"{Label.CPQViewRecord}","id":"flex-action-1629442585704","name":"View Record","openUrlIn":"Current Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"actionList":[{"card":"{card}","contextId":"\\{Id}","sObjectType":"Quote","stateAction":{"actionConditions":null,"displayName":"{Label.CPQViewRecord}","id":"flex-action-1629442585704","name":"View Record","openUrlIn":"Current Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"}],"iconName":"icon-v-document1-line","label":"{Label.CPQViewRecord}","name":"menu-item-1612100275302-0","showSpinner":"false"},{"actionConditions":null,"actionData":{"card":"{card}","contextId":"\\{Id}","sObjectType":"Quote","stateAction":{"actionConditions":null,"displayName":"{Label.CPQEdit}","id":"flex-action-1629442589218","name":"Edit Record","openUrlIn":"Current Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"actionList":[{"card":"{card}","contextId":"\\{Id}","sObjectType":"Quote","stateAction":{"actionConditions":null,"displayName":"{Label.CPQEdit}","id":"flex-action-1629442589218","name":"Edit Record","openUrlIn":"Current Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"}],"iconName":"icon-v-document1-line","label":"{Label.CPQEdit}","name":"menu-item-1613645815945-1","showSpinner":"false"},{"actionConditions":{"group":[{"field":"Parent.details.records[0].canCheckoutDiscounts","hasMergeField":false,"id":"state-new-condition-3","operator":"==","type":"custom","value":"true"},{"field":"Parent.details.records[0].frameAgreementPresent","hasMergeField":false,"id":"state-new-condition-10","logicalOperator":"&&","operator":"==","type":"custom","value":"false"}],"id":"state-condition-object","isParent":true},"actionData":{"card":"{card}","contextId":"\\{Id}","sObjectType":"Quote","stateAction":{"actionConditions":null,"displayName":"{Label.CPQCreateFrameAgreement}","id":"flex-action-1629442591833","name":"Create Frame Agreement-Quote","openUrlIn":"Current Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"actionList":[{"card":"{card}","contextId":"\\{Id}","sObjectType":"Quote","stateAction":{"actionConditions":null,"displayName":"{Label.CPQCreateFrameAgreement}","id":"flex-action-1629442591833","name":"Create Frame Agreement-Quote","openUrlIn":"Current Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"}],"iconName":"icon-v-document1-line","label":"{Label.CPQCreateFrameAgreement}","name":"menu-item-1613645988089-1","showSpinner":"false"},{"actionConditions":{"group":[{"field":"Parent.details.records[0].canCheckoutDiscounts","hasMergeField":false,"id":"state-new-condition-32","operator":"==","type":"custom","value":"true"},{"field":"Parent.details.records[0].frameAgreementPresent","hasMergeField":false,"id":"state-new-condition-39","logicalOperator":"&&","operator":"==","type":"custom","value":"false"}],"id":"state-condition-object","isParent":true},"actionData":{"card":"{card}","contextId":"\\{Id}","sObjectType":"Quote","stateAction":{"actionConditions":null,"displayName":"{Label.CPQUpdateFrameAgreement}","id":"flex-action-1629442594792","name":"Update Frame Agreement-Quote","openUrlIn":"Current Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"actionList":[{"card":"{card}","contextId":"\\{Id}","sObjectType":"Quote","stateAction":{"actionConditions":null,"displayName":"{Label.CPQUpdateFrameAgreement}","id":"flex-action-1629442594792","name":"Update Frame Agreement-Quote","openUrlIn":"Current Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"}],"iconName":"icon-v-document1-line","label":"{Label.CPQUpdateFrameAgreement}","name":"menu-item-1613648233553-1","showSpinner":"false"},{"actionConditions":{"group":[{"field":"Parent.details.records[0].discountsForSubmission","hasMergeField":false,"id":"state-new-condition-8","operator":"==","type":"custom","value":"true"}],"id":"state-condition-object","isParent":true},"actionData":{"card":"{card}","contextId":"\\{Id}","sObjectType":"Quote","stateAction":{"actionConditions":null,"displayName":"{Label.CPQRequestPendingApproval}","flyoutLwc":"l-w-c-c-p-q-approve-discount-items-multi-language","flyoutParams":{"ContextId":"{recordId}"},"flyoutType":"OmniScripts","hasExtraParams":true,"id":"flex-action-1629108589234","layoutType":"lightning","openFlyoutIn":"Modal","openUrlIn":"Current Window","osName":"LWCCPQ/ApproveDiscountItems/Multi-Language","parent":"menu","type":"Flyout","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"actionList":[{"actionIndex":0,"card":"{card}","contextId":"\\{Id}","draggable":false,"isOpen":true,"key":"1644314804895-nihq8op3w","label":"Action","sObjectType":"Quote","stateAction":{"actionConditions":null,"channelName":"close_modal","displayName":"{Label.CPQRequestPendingApproval}","flyoutLwc":"l-w-c-c-p-q-approve-discount-items-multi-language","flyoutParams":{"ContextId":"{Id}"},"flyoutType":"OmniScripts","hasExtraParams":true,"id":"flex-action-1644314806614","layoutType":"lightning","openFlyoutIn":"Modal","openUrlIn":"Current Window","osName":"LWCCPQ/ApproveDiscountItems/Multi-Language","type":"Flyout","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"}],"iconName":"icon-v-document1-line","label":"{Label.CPQRequestPendingApproval}","name":"menu-item-1613648434460-1","showSpinner":"false"},{"actionConditions":null,"actionData":{"card":"{card}","contextId":"\\{Id}","sObjectType":"Quote","stateAction":{"actionConditions":null,"displayName":"{Label.CPQGenerateDocumentPDF}","id":"flex-action-1629442600120","name":"Generate Document PDF","openUrlIn":"Current Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"actionList":[{"actionIndex":0,"card":"{card}","contextId":"\\{Id}","draggable":false,"isOpen":true,"key":"1668060911928-dz6y4w6u6","label":"Action","sObjectType":"Quote","stateAction":{"Attachments":"","ContentDocumentLinks":"","actionConditions":null,"displayName":"Generate Document PDF Quote","id":"flex-action-1668061028065","name":"Generate Document PDF Quote","openUrlIn":"Current Window","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"}],"iconName":"icon-v-document1-line","label":"\\{Label.CPQGenerateDocumentPDF}","name":"menu-item-1615284560878-1","showSpinner":"false"},{"actionConditions":null,"actionData":{"card":"{card}","stateAction":{"actionConditions":null,"cardName":"cpqDeleteModal","displayName":"{Label.CPQDelete}","flyoutLwc":"cpqDeleteModal","flyoutParams":{"cartId":"{Id}","objType":"Quote"},"flyoutType":"childCard","hasExtraParams":true,"id":"flex-action-1629108575060","openFlyoutIn":"Modal","openUrlIn":"Current Window","parent":"menu","type":"Flyout","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"actionList":[{"card":"{card}","stateAction":{"actionConditions":null,"cardName":"cpqDeleteModal","displayName":"{Label.CPQDelete}","flyoutLwc":"cpqDeleteModal","flyoutParams":{"cartId":"{Id}","objType":"Quote"},"flyoutType":"childCard","hasExtraParams":true,"id":"flex-action-1629108575060","openFlyoutIn":"Modal","openUrlIn":"Current Window","parent":"menu","type":"Flyout","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"}],"iconName":"icon-v-document1-line","label":"{Label.CPQDelete}","name":"menu-item-1615284832131-1","showSpinner":"false"},{"actionConditions":null,"actionData":{"card":"{card}","stateAction":{"Web Page":{"targetName":"/apex/QuoteCloneWithLineItems?id={Id}"},"actionConditions":null,"displayName":"{Label.CPQCloneWithProducts}","id":"flex-action-1629108557379","openUrlIn":"New Tab/Window","parent":"menu","targetType":"Web Page","type":"Custom","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"actionList":[{"card":"{card}","stateAction":{"Web Page":{"targetName":"/apex/QuoteCloneWithLineItems?id={Id}"},"actionConditions":null,"displayName":"{Label.CPQCloneWithProducts}","id":"flex-action-1629108557379","openUrlIn":"New Tab/Window","parent":"menu","targetType":"Web Page","type":"Custom","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"}],"iconName":"icon-v-document1-line","label":"{Label.CPQCloneWithProducts}","name":"menu-item-1615284866661-1","showSpinner":"false"},{"actionConditions":null,"actionData":{"card":"{card}","stateAction":{"Web Page":{"targetName":"/apex/QuoteClonePage?id={Id}"},"actionConditions":null,"displayName":"{Label.CPQCloneWithoutProducts}","id":"flex-action-1629108524335","openUrlIn":"New Tab/Window","parent":"menu","targetType":"Web Page","type":"Custom","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"actionList":[{"card":"{card}","stateAction":{"Web Page":{"targetName":"/apex/QuoteClonePage?id={Id}"},"actionConditions":null,"displayName":"{Label.CPQCloneWithoutProducts}","id":"flex-action-1629108524335","openUrlIn":"New Tab/Window","parent":"menu","targetType":"Web Page","type":"Custom","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"}],"iconName":"icon-v-document1-line","label":"{Label.CPQCloneWithoutProducts}","name":"menu-item-1615284909877-1","showSpinner":"false"},{"actionConditions":null,"actionData":{"card":"{card}","stateAction":{"actionConditions":null,"cardName":"cpqDiscount","displayName":"{Label.CPQApplyDiscount}","flyoutLwc":"cpqDiscount","flyoutParams":{"cartId":"{Id}"},"flyoutType":"childCard","hasExtraParams":true,"id":"flex-action-1629108508138","openFlyoutIn":"Modal","openUrlIn":"Current Window","parent":"menu","type":"Flyout","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"actionList":[{"actionIndex":0,"card":"{card}","draggable":false,"isOpen":true,"key":"1658215563403-ms1qry9ba","label":"Action","stateAction":{"actionConditions":null,"cardName":"cpqDiscount","channelName":"close_modal_apply_discount","displayName":"{Label.CPQApplyDiscount}","flyoutLwc":"cpqDiscount","flyoutParams":{"cartId":"{Id}"},"flyoutType":"childCard","hasExtraParams":true,"id":"flex-action-1658215564999","openFlyoutIn":"Modal","openUrlIn":"Current Window","type":"Flyout","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"}],"iconName":"icon-v-document1-line","label":"{Label.CPQApplyDiscount}","name":"menu-item-1615284958721-1","showSpinner":"false"},{"actionConditions":{"group":[{"field":"Parent.details.records[0].canCheckoutDiscounts","hasMergeField":false,"id":"state-new-condition-3","operator":"==","type":"custom","value":"true"},{"field":"Parent.details.records[0].frameAgreementPresent","hasMergeField":false,"id":"state-new-condition-10","logicalOperator":"&&","operator":"==","type":"custom","value":"true"}],"id":"state-condition-object","isParent":true},"actionData":{"card":"{card}","contextId":"\\{Id}","sObjectType":"Quote","stateAction":{"actionConditions":null,"displayName":"{Label.CPQCreateFrameAmendment}","id":"flex-action-1629442611785","name":"Create Frame Amendment-Quote","openUrlIn":"Current Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"actionList":[{"card":"{card}","contextId":"\\{Id}","sObjectType":"Quote","stateAction":{"actionConditions":null,"displayName":"{Label.CPQCreateFrameAmendment}","id":"flex-action-1629442611785","name":"Create Frame Amendment-Quote","openUrlIn":"Current Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"}],"iconName":"icon-v-document1-line","label":"{Label.CPQCreateFrameAmendment}","name":"menu-item-1627468535578-0","showSpinner":"false"},{"actionConditions":{"group":[{"field":"Parent.details.records[0].canCheckoutDiscounts","hasMergeField":false,"id":"state-new-condition-26","operator":"==","type":"custom","value":"true"},{"field":"Parent.details.records[0].frameAgreementPresent","hasMergeField":false,"id":"state-new-condition-33","logicalOperator":"&&","operator":"==","type":"custom","value":"true"}],"id":"state-condition-object","isParent":true},"actionData":{"card":"{card}","contextId":"\\{Id}","sObjectType":"Quote","stateAction":{"actionConditions":null,"displayName":"{Label.CPQUpdateFrameAmendment}","id":"flex-action-1629442618420","name":"Update Frame Amendment-Quote","openUrlIn":"Current Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"actionList":[{"card":"{card}","contextId":"\\{Id}","sObjectType":"Quote","stateAction":{"actionConditions":null,"displayName":"{Label.CPQUpdateFrameAmendment}","id":"flex-action-1629442618420","name":"Update Frame Amendment-Quote","openUrlIn":"Current Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"}],"iconName":"icon-v-document1-line","label":"{Label.CPQUpdateFrameAmendment}","name":"menu-item-1627468740723-0","showSpinner":"false"}],"overflow":true,"position":"right","record":"{record}","size":"small","type":"action","variant":"neutral"},"size":{"default":"1","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"custom-btn","container":{"class":""},"customClass":"custom-btn","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"1","isResponsive":false},"sizeClass":"slds-size_1-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"type":"element"}]}},"conditions":{"group":[{"field":"Parent.details.records[0].ObjectType","id":"state-condition-12","operator":"==","type":"custom","value":"Quote"}],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"Quote","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"#F3F2F2","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-card  ","container":{"class":"slds-card "},"customClass":"","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"background-color:#F3F2F2;     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"theme":"slds","title":"cpqQuoteButtonsMobile","Id":"a5aDp000000DB42IAS","vlocity_cmt__GlobalKey__c":"cpqQuoteButtonsMobile/Vlocity/3/1658215541041"};
  export default definition