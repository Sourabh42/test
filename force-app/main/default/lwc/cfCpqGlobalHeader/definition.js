let definition =
      {"dataSource":{"contextVariables":[],"orderBy":{"isReverse":false,"name":""},"type":"IntegrationProcedures","value":{"dsDelay":"","inputMap":{"ObjectType":"{Parent.ObjectType}","cartId":"{Parent.cartId}","pricelistId":"{Parent.pricelistId}"},"ipMethod":"CPQ_GetGlobalHeaderDetails","resultVar":"[\"response\"]","vlocityAsync":false}},"dynamicCanvasWidth":{"type":"desktop"},"enableLwc":true,"events":[],"globalCSS":false,"isFlex":true,"isRepeatable":true,"lwc":{"DeveloperName":"cfCpqGlobalHeader_6_Vlocity","Id":"0RbDp000000hs48CAG","ManageableState":"unmanaged","MasterLabel":"cfCpqGlobalHeader_6_Vlocity","NamespacePrefix":"vlocity_cmt"},"multilanguageSupport":true,"sessionVars":[{"name":"expand","val":"false"}],"states":[{"actions":[],"blankCardState":false,"childCards":["cpqGlobalHeaderOrder"],"components":{"layer-0":{"children":[{"class":"slds-col ","element":"childCardPreview","elementLabel":"FlexCard-1","name":"FlexCard","property":{"cardName":"cpqGlobalHeaderOrder","cardNode":"{record}","isChildCardTrackingEnabled":true,"parentAttribute":{"ObjectType":"Order","cartId":"{Parent.cartId}","details":"{Parent.details}","isMultisiteFlow":"{Parent.isMultisiteFlow}"},"recordId":"{recordId}","selectedState":"Order"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"sizeClass":"slds-size_12-of-12"},"type":"element"}]}},"conditions":{"group":[{"field":"Parent.ObjectType","id":"state-condition-2","operator":"==","type":"custom","value":"Order"}],"id":"state-condition-object","isParent":true},"documents":[],"fields":[],"isSmartAction":false,"name":"Order","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-card ","container":{"class":"slds-card"},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}}},{"actions":[],"blankCardState":false,"childCards":["cpqGlobalHeaderQuote"],"components":{"layer-0":{"children":[{"class":"slds-col ","element":"childCardPreview","elementLabel":"FlexCard-0","name":"FlexCard","property":{"cardName":"cpqGlobalHeaderQuote","cardNode":"{record}","isChildCardTrackingEnabled":false,"parentAttribute":{"ObjectType":"Quote","cartId":"{Parent.cartId}","details":"{Parent.details}","isMultisiteFlow":"{Parent.isMultisiteFlow}"},"recordId":"{recordId}","selectedState":"Quote"},"size":{"default":"12","isResponsive":false},"stateIndex":1,"styleObject":{"sizeClass":"slds-size_12-of-12"},"type":"element"}]}},"conditions":{"group":[{"field":"Parent.ObjectType","id":"state-condition-2","operator":"==","type":"custom","value":"Quote"}],"id":"state-condition-object","isParent":true},"documents":[],"fields":[],"isSmartAction":false,"name":"Quote","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-card ","container":{"class":"slds-card"},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}}},{"actions":[],"blankCardState":false,"childCards":["cpqGlobalHeaderOpportunity"],"components":{"layer-0":{"children":[{"class":"slds-col ","element":"childCardPreview","elementLabel":"FlexCard-0","name":"FlexCard","property":{"cardName":"cpqGlobalHeaderOpportunity","cardNode":"","isChildCardTrackingEnabled":false,"recordId":"{recordId}","selectedState":"Opportunity"},"size":{"default":"12","isResponsive":false},"stateIndex":2,"styleObject":{"sizeClass":"slds-size_12-of-12"},"type":"element"}]}},"conditions":{"group":[{"field":"Parent.ObjectType","hasMergeField":false,"id":"state-new-condition-2","operator":"==","type":"custom","value":"Opportunity"}],"id":"state-condition-object","isParent":true},"documents":[],"fields":[],"isSmartAction":false,"name":"Opportunity","omniscripts":[],"smartAction":{},"styleObject":{"class":"slds-card slds-p-around_x-small slds-m-bottom_x-small","container":{"class":"slds-card"},"margin":[{"size":"x-small","type":"bottom"}],"padding":[{"size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12"}},{"actions":[],"blankCardState":false,"childCards":[],"components":{"layer-0":{"children":[{"class":"slds-col ","element":"outputField","elementLabel":"Text-0","name":"Text","property":{"card":"{card}","mergeField":"%3Cdiv%20class=%22slds-text-color_error%20slds-text-align_center%22%3E%3Cspan%20style=%22font-size:%2012pt;%22%3E%7BLabel.CPQSomeErrorOccurred%7D%3C/span%3E%3C/div%3E","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":2,"styleObject":{"sizeClass":"slds-size_12-of-12"},"type":"text"}]}},"conditions":{"group":[{"field":"Parent.ObjectType","id":"state-condition-2","operator":"==","type":"custom","value":"undefined"}],"id":"state-condition-object","isParent":true},"documents":[],"fields":[],"isSmartAction":false,"name":"Error State","omniscripts":[],"smartAction":{},"styleObject":{"class":"slds-card slds-p-around_x-small slds-m-bottom_x-small","container":{"class":"slds-card"},"margin":[{"size":"x-small","type":"bottom"}],"padding":[{"size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12"}}],"theme":"slds","title":"cpqGlobalHeader","Id":"a5aDp000000DB5aAAW","vlocity_cmt__GlobalKey__c":"cpqGlobalHeader/Vlocity/6/1641992041585"};
  export default definition