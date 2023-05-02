let definition =
      {"dataSource":{"contextVariables":[],"orderBy":{},"type":null,"value":{}},"dynamicCanvasWidth":{"type":"desktop"},"enableLwc":true,"events":[{"actionList":[{"card":"{card}","draggable":false,"isOpen":true,"key":"1625913503583-4mkmdqfkr","label":"Action","stateAction":{"eventName":"setValues","fieldValues":[{"fieldName":"Parent.details","fieldValue":"{action.response.records[0].details}"}],"id":"flex-action-1625913520818","type":"cardAction"}}],"channelname":"cpq_{recordId}","displayLabel":"cpq_{recordId}:cpq_cart_updated","element":"action","eventLabel":"pubsub","eventname":"cpq_cart_updated","eventtype":"pubsub","key":"event-0","recordIndex":"0"}],"globalCSS":false,"isFlex":true,"lwc":{"DeveloperName":"cfCpqOpportunityStatusDesktop_2_Vlocity","Id":"0RbDp000000hs46CAS","ManageableState":"unmanaged","MasterLabel":"cfCpqOpportunityStatusDesktop_2_Vlocity","NamespacePrefix":"vlocity_cmt"},"multilanguageSupport":true,"sessionVars":[],"states":[{"actions":[],"childCards":[],"components":{"layer-0":{"children":[{"class":"slds-col ","element":"action","elementLabel":"Action-4","name":"Action","property":{"buttonVariant":"neutral","card":"{card}","contextId":"\\{Id}","data-conditions":{"group":[{"field":"Parent.details.records[0].discountsForSubmission","id":"state-new-condition-244","operator":"==","type":"custom","value":"true"}],"id":"state-condition-object","isParent":true},"data-preloadConditionalElement":false,"displayAsButton":true,"hideActionIcon":true,"record":"{record}","sObjectType":"Order","stateAction":{"displayName":"{Label.CPQRequestPendingApproval}","flyoutLwc":"l-w-c-c-p-q-approve-discount-items-multi-language","flyoutParams":{"ContextId":"{recordId}"},"flyoutType":"OmniScripts","hasExtraParams":true,"id":"flex-action-1627055800901","layoutType":"lightning","openFlyoutIn":"Modal","openUrlIn":"Current Window","osName":"LWCCPQ/ApproveDiscountItems/Multi-Language","type":"Flyout","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"size":{"default":"2","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"custom-btn","container":{"class":""},"customClass":"custom-btn","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"2","isResponsive":false},"sizeClass":"slds-size_2-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"type":"element"},{"class":"slds-col ","element":"action","elementLabel":"Action-5-clone-0","name":"Action","property":{"actionList":[{"actionIndex":0,"buttonVariant":"neutral","card":"{card}","contextId":"\\{Id}","data-conditions":{"group":[],"id":"state-condition-object","isParent":true},"displayAsButton":true,"draggable":false,"hideActionIcon":true,"isOpen":true,"key":"1643778000795-ygj5yqpog","label":"Action","record":"{record}","sObjectType":"Order","stateAction":{"cardName":"cpqDeleteModal","cardNode":"","channelName":"close_modal","displayName":"{Label.CPQDelete}","flyoutLwc":"cpqDeleteModal","flyoutParams":{"cartId":"{Id}","objType":"Order"},"flyoutType":"childCard","hasExtraParams":true,"id":"flex-action-1643778003461","openFlyoutIn":"Modal","openUrlIn":"Current Window","type":"Flyout","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"}],"buttonVariant":"neutral","card":"{card}","contextId":"\\{Id}","data-conditions":{"group":[],"id":"state-condition-object","isParent":true},"displayAsButton":true,"flyoutChannel":"close_modal","flyoutDetails":{"openFlyoutIn":"Modal"},"hideActionIcon":true,"iconName":"icon-v-document1-line","label":"{Label.CPQDelete}","record":"{record}","sObjectType":"Order","showSpinner":"false","stateObj":"{record}"},"size":{"default":"1","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"custom-btn","container":{"class":""},"customClass":"custom-btn","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"1","isResponsive":false},"sizeClass":"slds-size_1-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"type":"element"},{"class":"slds-col ","element":"flexMenu","elementLabel":"Menu-3-clone-0","name":"Menu","property":{"card":"{card}","iconName":"utility:down","menuItems":[{"actionConditions":null,"actionData":{"card":"{card}","contextId":"\\{Id}","sObjectType":"Order","stateAction":{"actionConditions":null,"displayName":"{Label.CPQViewRecord}","id":"flex-action-1629443242968","name":"View Record","openUrlIn":"Current Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"actionList":[{"actionIndex":0,"card":"{card}","contextId":"\\{Id}","draggable":false,"isOpen":true,"key":"1643778157190-v3hxeg9be","label":"Action","sObjectType":"Opportunity","stateAction":{"Attachments":"","ContentDocumentLinks":"","actionConditions":null,"displayName":"{Label.CPQViewRecord}","id":"flex-action-1643778159102","name":"View Record","openUrlIn":"Current Window","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"}],"iconName":"icon-v-document1-line","label":"\\{Label.CPQViewRecord}","name":"menu-item-1613651528336-0","showSpinner":"false"},{"actionList":[{"actionIndex":0,"card":"{card}","contextId":"\\{recordId}","draggable":false,"isOpen":true,"key":"1643784000719-hsurazd3r","label":"Action","sObjectType":"Opportunity","stateAction":{"Attachments":"","ContentDocumentLinks":"","displayName":"{Label.CPQEdit}","id":"flex-action-1643784000772","name":"Edit Record","openUrlIn":"Current Window","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"}}],"iconName":"icon-v-document1-line","label":"\\{Label.CPQEdit}","name":"menu-item-1643784000717-0","showSpinner":"false"},{"actionConditions":null,"actionData":{"card":"{card}","contextId":"\\{Id}","sObjectType":"Order","stateAction":{"actionConditions":null,"displayName":"{Label.CPQGenerateDocumentPDF}","id":"flex-action-1629443246247","name":"Generate Document PDF","openUrlIn":"Current Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"actionList":[{"actionIndex":0,"card":"{card}","contextId":"\\{Id}","draggable":false,"isOpen":true,"key":"1643778179558-gf60qqi3j","label":"Action","sObjectType":"Opportunity","stateAction":{"Attachments":"","ContentDocumentLinks":"","actionConditions":null,"displayName":"{Label.CPQGenerateDocumentPDF}","id":"flex-action-1643778180997","name":"Generate Document PDF","openUrlIn":"Current Window","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"}],"iconName":"icon-v-document1-line","label":"\\{Label.CPQGenerateDocumentPDF}","name":"menu-item-1613651548678-0","showSpinner":"false"},{"actionConditions":null,"actionData":{"card":"{card}","stateAction":{"Web Page":{"targetName":"/{Id}/p"},"actionConditions":null,"displayName":"{Label.CPQPrintableView}","id":"flex-action-1627055762720","openUrlIn":"New Tab/Window","parent":"menu","targetType":"Web Page","type":"Custom","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"actionList":[{"card":"{card}","stateAction":{"Web Page":{"targetName":"/{Id}/p"},"actionConditions":null,"displayName":"{Label.CPQPrintableView}","id":"flex-action-1627055762720","openUrlIn":"New Tab/Window","parent":"menu","targetType":"Web Page","type":"Custom","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"}],"iconName":"icon-v-document1-line","label":"{Label.CPQPrintableView}","name":"menu-item-1614572486167-0","showSpinner":"false"},{"actionConditions":null,"actionData":{"card":"{card}","stateAction":{"Record":{"targetAction":"clone","targetId":"{Id}","targetName":"Order"},"actionConditions":null,"displayName":"{Label.CPQClone}","id":"flex-action-1627055779159","openUrlIn":"New Tab/Window","parent":"menu","targetType":"Record","type":"Custom","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"actionList":[{"actionIndex":0,"card":"{card}","draggable":false,"isOpen":true,"key":"1643778219653-qck0elod0","label":"Action","stateAction":{"Record":{"targetAction":"clone","targetId":"{Id}","targetName":"Opportunity"},"actionConditions":null,"displayName":"{Label.CPQClone}","id":"flex-action-1643778220945","openUrlIn":"New Tab/Window","targetType":"Record","type":"Custom","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"}],"iconName":"","label":"\\{Label.CPQClone}","name":"menu-item-1615201956960-1","showSpinner":"false"},{"actionList":[{"actionIndex":0,"card":"{card}","draggable":false,"isOpen":true,"key":"1643784056633-1a3g8jqfb","label":"Action","stateAction":{"cardName":"cpqDiscount","channelName":"close_modal","displayName":"Action","flyoutLwc":"cpqDiscount","flyoutParams":{"cartId":"{recordId}"},"flyoutType":"childCard","hasExtraParams":true,"id":"flex-action-1643784115721","openFlyoutIn":"Modal","openUrlIn":"Current Window","type":"Flyout","vlocityIcon":"standard-default"}}],"iconName":"","label":"\\{Label.CPQApplyDiscount}","name":"menu-item-1643784056631-0","showSpinner":"false"},{"actionList":[{"actionIndex":0,"card":"{card}","draggable":false,"isOpen":true,"key":"1643868467263-t0wptya4v","label":"Action","reRenderFlyout":true,"stateAction":{"channelName":"close_modal","displayName":"Action","flyoutLwc":"multi-site-quote-order-flow-multi-language","flyoutParams":{"OpportunityId":"{recordId}","type":"Quote"},"flyoutType":"OmniScripts","hasExtraParams":true,"id":"flex-action-1643868612373","layoutType":"lightning","openFlyoutIn":"Modal","openUrlIn":"Current Window","osName":"MultiSite/QuoteOrderFlow/Multi-Language","type":"Flyout","vlocityIcon":"standard-default"}}],"iconName":"","iconPosition":"","label":"\\{Label.CPQNewMultisiteQuote}","name":"menu-item-1643868467260-0","showSpinner":"false","status":""},{"actionList":[{"actionIndex":0,"card":"{card}","draggable":false,"isOpen":true,"key":"1643868650335-417nd7lk6","label":"Action","reRenderFlyout":true,"stateAction":{"channelName":"close_modal","displayName":"Action","flyoutLwc":"multi-site-quote-order-flow-multi-language","flyoutParams":{"OpportunityId":"{recordId}","type":"Order"},"flyoutType":"OmniScripts","hasExtraParams":true,"id":"flex-action-1643868737737","layoutType":"lightning","openFlyoutIn":"Modal","openUrlIn":"Current Window","osName":"MultiSite/QuoteOrderFlow/Multi-Language","type":"Flyout","vlocityIcon":"standard-default"}}],"iconName":"","iconPosition":"","label":"\\{Label.CPQNewMultisiteOrder}","name":"menu-item-1643868650333-0","showSpinner":"false","status":""}],"overflow":true,"position":"right","record":"{record}","size":"small","type":"action","variant":"neutral"},"size":{"default":"1","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__opportunity-header-desktop-actions custom-btn","container":{"class":"cpq__opportunity-header-desktop-actions"},"customClass":"custom-btn","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"1","isResponsive":false},"sizeClass":"slds-size_1-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__opportunity-header-desktop-actions custom-btn","container":{"class":"cpq__opportunity-header-desktop-actions"},"customClass":"custom-btn","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"1","isResponsive":false},"sizeClass":"slds-size_1-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"element"}]}},"conditions":{"group":[],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"Order Discarded","omniscripts":[{"language":"Multi-Language","subtype":"ApproveDiscountItems","type":"LWCCPQ"}],"smartAction":{},"styleObject":{"background":{"color":"#F3F2F2","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-card  ","container":{"class":"slds-card "},"customClass":"","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"background-color:#F3F2F2;     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"theme":"slds","title":"cpqOpportunityStatusDesktop","Id":"a5aDp000000DB5BAAG","vlocity_cmt__GlobalKey__c":"cpqOpportunityStatusDesktop/Vlocity/2/1648223259697"};
  export default definition