let definition =
      {"dataSource":{"contextVariables":[],"orderBy":{"isReverse":false,"name":""},"type":"REST","value":{"dsDelay":0,"endpoint":"https://run.mocky.io/v3/f6243b69-9216-497c-80ba-59df8b35603b","methodType":"GET","resultVar":"","subType":"Web"}},"dynamicCanvasWidth":{"type":"desktop"},"enableLwc":true,"globalCSS":false,"isFlex":true,"lwc":{"DeveloperName":"cfCpqCartItemsAction_1_Vlocity","Id":"0RbDp000000hs3kCAG","ManageableState":"unmanaged","MasterLabel":"cfCpqCartItemsAction_1_Vlocity","NamespacePrefix":"vlocity_cmt"},"multilanguageSupport":true,"osSupport":true,"states":[{"actions":[],"childCards":[],"components":{"layer-0":{"children":[{"class":"slds-col ","element":"flexMenu","elementLabel":"Block-2-Menu-5","name":"Menu","property":{"card":"{card}","data-conditions":{"group":[{"field":"Parent.cartType","id":"state-new-condition-28","operator":"!=","type":"custom","value":"summaryview"},{"field":"Parent.flowType","hasMergeField":false,"id":"state-new-condition-118","logicalOperator":"&&","operator":"!=","type":"custom","value":"bulkChange"},{"field":"changesNotAllowed","hasMergeField":false,"id":"state-new-condition-0","logicalOperator":"&&","operator":"==","type":"custom","value":"undefined"},{"field":"vlocity_cmt__SupplementalAction__c.value","hasMergeField":false,"id":"state-new-condition-52","logicalOperator":"&&","operator":"!=","type":"custom","value":"Cancel"}],"id":"state-condition-object","isParent":true},"iconName":"utility:threedots_vertical","iconPosition":"","iconSize":"small","label":"","menuItems":[{"actionConditions":null,"actionData":{"card":"{card}","stateAction":{"actionConditions":null,"displayName":"{Label.CPQClone}","eventName":"cpq_{recordId}","extraParams":{"cartId":"{Parent.cartId}","cartType":"{Parent.cartType}","getInputMethod":"prepareCloneItemInCartInput","handleResponseMethod":"processCloneItemInCartResponse","hierarchyPath":"{Parent.parentPath}>{Parent.type}>{Id.value}","ipMethod":"CPQ_CloneLineItems","itemId":"{Id.value}","methodName":"cloneItemInCart","parentObject":"{Parent.parentObject}","responseEventName":"cpq_cart_line_item_clone"},"hasExtraParams":true,"id":"flex-action-1626946678798","message":"cpq_ui_event","openUrlIn":"Current Window","parent":"menu","subType":"PubSub","type":"Event","vlocityIcon":""},"stateObj":"{record}"},"actionList":[{"card":"{card}","stateAction":{"actionConditions":null,"displayName":"{Label.CPQClone}","eventName":"cpq_{recordId}","extraParams":{"cartId":"{Parent.cartId}","cartType":"{Parent.cartType}","getInputMethod":"prepareCloneItemInCartInput","handleResponseMethod":"processCloneItemInCartResponse","hierarchyPath":"{Parent.parentPath}>{Parent.type}>{Id.value}","ipMethod":"CPQ_CloneLineItems","itemId":"{Id.value}","methodName":"cloneItemInCart","parentObject":"{Parent.parentObject}","responseEventName":"cpq_cart_line_item_clone"},"hasExtraParams":true,"id":"flex-action-1626946678798","message":"cpq_ui_event","openUrlIn":"Current Window","parent":"menu","subType":"PubSub","type":"Event","vlocityIcon":""},"stateObj":"{record}"}],"iconName":"","iconPosition":"","label":"{Label.CPQClone}","name":"menu-item-1616151972492-0","showSpinner":"false","status":""},{"actionConditions":{"group":[{"field":"vlocity_cmt__RecurringCharge__c.actions.applyadjustment","hasMergeField":false,"id":"state-new-condition-9","operator":"!=","type":"custom","value":"undefined"}],"id":"state-condition-object","isParent":true},"actionData":{"card":"{card}","reRenderFlyout":true,"stateAction":{"actionConditions":null,"cardName":"cpqManualPriceAdjustments","displayName":"{Label.CPQAdjustPrice}","flyoutLwc":"cpqManualPriceAdjustments","flyoutParams":{"cartId":"{Parent.cartId}","id":"{Id.value}","lineItemName":"{Name}","type":"charge"},"flyoutType":"childCard","hasExtraParams":true,"id":"flex-action-1629977077297","openFlyoutIn":"Modal","openUrlIn":"Current Window","parent":"menu","type":"Flyout","vlocityIcon":""},"stateObj":"{record}"},"actionList":[{"actionIndex":0,"card":"{card}","draggable":false,"isOpen":true,"key":"1641580614983-y70u2q8x6","label":"Action","reRenderFlyout":true,"stateAction":{"actionConditions":null,"cardName":"cpqManualPriceAdjustments","channelName":"close_modal","displayName":"{Label.CPQAdjustPrice}","flyoutLwc":"cpqManualPriceAdjustments","flyoutParams":{"cartId":"{Parent.cartId}","cartType":"{Parent.cartType}","id":"{Id.value}","lineItemName":"{Name}","type":"charge"},"flyoutType":"childCard","hasExtraParams":true,"id":"flex-action-1641580627148","openFlyoutIn":"Modal","openUrlIn":"Current Window","type":"Flyout","vlocityIcon":""},"stateObj":"{record}"}],"iconName":"","iconPosition":"","label":"{Label.CPQAdjustPrice}","name":"menu-item-1616396437517-0","showSpinner":"false","status":""},{"actionConditions":{"group":[{"field":"actions.deleteitem","hasMergeField":false,"id":"state-new-condition-0","operator":"!=","type":"custom","value":"undefined"},{"field":"vlocity_cmt__Action__c.value","hasMergeField":false,"id":"state-new-condition-17","logicalOperator":"&&","operator":"==","type":"custom","value":"Add"}],"id":"state-condition-object","isParent":true},"actionData":{"card":"{card}","stateAction":{"actionConditions":null,"displayName":"{Label.CPQDelete}","eventName":"cpq_{recordId}","extraParams":{"cartType":"{Parent.cartType}","getInputMethod":"prepareDeleteItemFromCartInput","handleResponseMethod":"processDeleteItemFromCartResponse","hierarchyPath":"{Parent.parentPath}>{Parent.type}>{Id.value}","ipMethod":"CPQ_DeleteItemFromCart","itemId":"{Id.value}","methodName":"deleteItemFromCart","minQuantity":"{minQuantity}","parentObject":"{Parent.parentObject}"},"hasExtraParams":true,"id":"flex-action-1626946759583","message":"cpq_ui_event","openUrlIn":"Current Window","parent":"menu","subType":"PubSub","type":"Event","vlocityIcon":""},"stateObj":"{record}"},"actionList":[{"card":"{card}","stateAction":{"actionConditions":null,"displayName":"{Label.CPQDelete}","eventName":"cpq_{recordId}","extraParams":{"cartType":"{Parent.cartType}","getInputMethod":"prepareDeleteItemFromCartInput","handleResponseMethod":"processDeleteItemFromCartResponse","hierarchyPath":"{Parent.parentPath}>{Parent.type}>{Id.value}","ipMethod":"CPQ_DeleteItemFromCart","itemId":"{Id.value}","methodName":"deleteItemFromCart","minQuantity":"{minQuantity}","parentObject":"{Parent.parentObject}"},"hasExtraParams":true,"id":"flex-action-1626946759583","message":"cpq_ui_event","openUrlIn":"Current Window","parent":"menu","subType":"PubSub","type":"Event","vlocityIcon":""},"stateObj":"{record}"}],"iconName":"standard:default","iconPosition":"","label":"{Label.CPQDelete}","name":"menu-item-1617708183057-0","showSpinner":"false","status":""},{"actionConditions":{"group":[{"field":"actions.cancelcartitem","hasMergeField":false,"id":"state-new-condition-7","operator":"!=","type":"custom","value":"undefined"}],"id":"state-condition-object","isParent":true},"actionList":[{"actionIndex":0,"card":"{card}","draggable":false,"isOpen":true,"key":"1635233020776-54bjqf4v5","label":"Action","stateAction":{"displayName":"Action","eventName":"cpq_{recordId}","extraParams":{"actionObjName":"cancelcartitem","getInputMethod":"prepareCancelCartItem","handleResponseMethod":"processCancelCartItemResponse","input":"{\"ipMethod\":\"CPQ_CancelCartItem\"}","methodName":"cancelCartItem","record":"{record}"},"hasExtraParams":true,"id":"flex-action-1635248244607","message":"cpq_ui_event","openUrlIn":"Current Window","subType":"PubSub","type":"Event","vlocityIcon":"standard-default"}}],"iconName":"standard:default","iconPosition":"","label":"\\{Label.CPQCancel}","name":"menu-item-1635233020773-0","showSpinner":"false","status":""},{"actionConditions":{"group":[{"field":"actions.deleteitem","hasMergeField":false,"id":"state-new-condition-0","operator":"!=","type":"custom","value":"undefined"},{"field":"vlocity_cmt__Action__c.value","hasMergeField":false,"id":"state-new-condition-7","logicalOperator":"&&","operator":"!=","type":"custom","value":"Add"}],"id":"state-condition-object","isParent":true},"actionList":[{"actionIndex":0,"card":"{card}","draggable":false,"isOpen":true,"key":"1637259546520-uzs0vgixj","label":"Action","stateAction":{"displayName":"Action","eventName":"cpq_{recordId}","extraParams":{"cartType":"{Parent.cartType}","getInputMethod":"prepareDeleteItemFromCartInput","handleResponseMethod":"processDeleteItemFromCartResponse","hierarchyPath":"{Parent.parentPath}>{Parent.type}>{Id.value}","ipMethod":"CPQ_DeleteItemFromCart","itemId":"{Id.value}","methodName":"deleteItemFromCart","minQuantity":"{minQuantity}","parentObject":"{Parent.parentObject}"},"hasExtraParams":true,"id":"flex-action-1637259784078","message":"cpq_ui_event","openUrlIn":"Current Window","subType":"PubSub","type":"Event","vlocityIcon":"standard-default"}}],"iconName":"standard:default","label":"{Label.Disconnect}","name":"menu-item-1637259546517-0","showSpinner":"false"}],"overflow":true,"position":"right","record":"{record}","size":"xx-small","type":"action","variant":""},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_right ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"right","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_right ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"right","color":""}}}],"type":"element","userUpdatedElementLabel":true},{"children":[],"class":"slds-col ","element":"block","elementLabel":"Block-3-Block-13","name":"Block","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"data-conditions":{"group":[{"field":"Parent.flowType","hasMergeField":false,"id":"state-new-condition-13","operator":"!=","type":"custom","value":"bulkChange"},{"group":[{"field":"Parent.cartType","hasMergeField":false,"id":"state-new-condition-6","operator":"==","type":"custom","value":"summaryview"},{"field":"vlocity_cmt__Action__c.value","hasMergeField":false,"id":"state-new-condition-51","logicalOperator":"||","operator":"==","type":"custom","value":"Disconnect"},{"field":"changesNotAllowed","hasMergeField":false,"id":"state-new-condition-84","logicalOperator":"||","operator":"==","type":"custom","value":"true"}],"id":"state-new-group-7","logicalOperator":"&&"},{"field":"vlocity_cmt__SupplementalAction__c.value","hasMergeField":false,"id":"state-new-condition-68","logicalOperator":"||","operator":"==","type":"custom","value":"Cancel"}],"id":"state-condition-object","isParent":true},"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"block"}]}},"conditions":{"group":[],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"Active","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-m-around_none ","container":{"class":""},"customClass":"","elementStyleProperties":{},"inlineStyle":"","margin":[{"label":"around:none","size":"none","type":"around"}],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"theme":"slds","title":"cpqCartItemsAction","uniqueKey":"Id.value","Id":"a5aDp000000DB8uAAW","vlocity_cmt__GlobalKey__c":"cpqCartItemsAction/Vlocity/1/1637257713511"};
  export default definition