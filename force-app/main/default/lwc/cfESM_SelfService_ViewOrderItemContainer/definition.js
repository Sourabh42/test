let definition =
      {"dataSource":{"contextVariables":[],"orderBy":{"isReverse":"","name":""},"type":"IntegrationProcedures","value":{"dsDelay":"","inputMap":{"cartId":"{Parent.primaryOrderId}","fields":"vlocity_cmt__ServiceAccountId__r.Name","price":"false","validate":"false"},"ipMethod":"ESM_SelfService_GetCartItems","jsonMap":"{\"price\":\"{price}\",\"fields\":\"{fields}\",\"validate\":\"{validate}\",\"Parent.primaryOrderId\":\"{Parent.primaryOrderId}\"}","resultVar":"","vlocityAsync":false}},"enableLwc":true,"events":[{"actionList":[{"actionIndex":0,"card":"{card}","draggable":false,"isOpen":true,"key":"1659108726125-odzkuget9","label":"Action","stateAction":{"Web Page":{"targetName":"/apex"},"displayName":"Action","eventName":"updatedatasource","id":"flex-action-1659108792940","message":"{\"type\":\"IntegrationProcedures\",\"value\":{\"dsDelay\":\"\",\"ipMethod\":\"ESM_SelfService_GetCartItems\",\"vlocityAsync\":false,\"inputMap\":{\"price\":\"false\",\"validate\":\"false\",\"cartId\":\"{Parent.primaryOrderId}\",\"fields\":\"vlocity_cmt__ServiceAccountId__r.Name\"},\"jsonMap\":\"{\\\"price\\\":\\\"{price}\\\",\\\"fields\\\":\\\"{fields}\\\",\\\"validate\\\":\\\"{validate}\\\",\\\"Parent.primaryOrderId\\\":\\\"{Parent.primaryOrderId}\\\"}\",\"resultVar\":\"\"},\"orderBy\":{\"name\":\"\",\"isReverse\":\"\"},\"contextVariables\":[{\"name\":\"price\",\"val\":\"false\",\"id\":9},{\"name\":\"fields\",\"val\":\"vlocity_cmt__ServiceAccountId__r.Name\",\"id\":10},{\"name\":\"validate\",\"val\":\"false\",\"id\":11},{\"name\":\"Parent.primaryOrderId\",\"val\":\"801Dp000000PT6aYAS\",\"id\":17}]}","openUrlIn":"Current Window","targetType":"Web Page","type":"cardAction","vlocityIcon":"standard-default"}}],"channelname":"esm_selfservice_reload_ordersummary","displayLabel":"esm_selfservice_reload_ordersummary:onCartReload","element":"action","eventLabel":"pubsub","eventname":"onCartReload","eventtype":"pubsub","key":"event-0","recordIndex":"0","showSpinner":"true"}],"isFlex":true,"lwc":{"DeveloperName":"cfESM_SelfService_ViewOrderItemContainer_4_Salesforce","Id":"0RbDp000000hs4X0AQ","ManageableState":"unmanaged","MasterLabel":"cfESM_SelfService_ViewOrderItemContainer_4_Salesforce","NamespacePrefix":"vlocity_cmt"},"selectableMode":"Multi","sessionVars":[],"states":[{"actions":[],"childCards":["ESM_SelfService_ViewOrderItem"],"components":{"layer-0":{"children":[{"class":"slds-col ","element":"childCardPreview","elementLabel":"FlexCard-1","name":"FlexCard","property":{"cardName":"ESM_SelfService_ViewOrderItem","cardNode":"{record.records}","data-conditions":{"group":[{"field":"records","hasMergeField":false,"id":"state-new-condition-7","operator":"!=","type":"custom","value":"undefined"}],"id":"state-condition-object","isParent":true},"data-preloadConditionalElement":false,"isChildCardTrackingEnabled":false,"parentAttribute":{"isParent":"true","showchilds":"false"},"recordId":"{recordId}","selectedState":"Active"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"sizeClass":"slds-size_12-of-12"},"type":"element"}]}},"conditions":{"group":[],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"Active","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_xx-small slds-m-around_none ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[{"label":"around:none","size":"none","type":"around"}],"padding":[{"label":"around:xx-small","size":"xx-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"theme":"slds","title":"ESM_SelfService_ViewOrderItemContainer","Id":"a5aDp000000DBA2IAO","vlocity_cmt__GlobalKey__c":"ESM_SelfService_ViewOrderItemContainer/Salesforce/4/1669747248422"};
  export default definition