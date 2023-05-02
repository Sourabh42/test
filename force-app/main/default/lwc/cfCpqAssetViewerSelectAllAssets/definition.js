let definition =
      {"dataSource":{"contextVariables":[],"orderBy":{"isReverse":"","name":""},"type":"Custom","value":{"body":"{}","dsDelay":"","resultVar":""}},"enableLwc":true,"events":[{"actionList":[{"actionIndex":0,"card":"{card}","draggable":false,"isOpen":true,"key":"1637826650457-or1ghs34x","label":"Action","stateAction":{"Web Page":{"targetName":"/apex"},"displayName":"Action","eventName":"setValues","fieldValues":[{"fieldName":"Session.selectAllAssets","fieldValue":"{action.selected}"}],"id":"flex-action-1637826684706","openUrlIn":"Current Window","targetType":"Web Page","type":"cardAction","vlocityIcon":"standard-default"}}],"channelname":"cpq_{recordId}","displayLabel":"cpq_{recordId}:selectAllAssets","element":"action","eventLabel":"pubsub","eventname":"selectAllAssets","eventtype":"pubsub","key":"event-0","recordIndex":"0","showSpinner":"false"},{"actionList":[{"actionIndex":0,"card":"{card}","draggable":true,"isOpen":true,"key":"1637826726382-g4cub2b3f","label":"Action","stateAction":{"Web Page":{"targetName":"/apex"},"displayName":"Action","eventName":"setValues","fieldValues":[{"fieldName":"Session.selectedAssetIds","fieldValue":"{action.selectedAssetIds}"},{"fieldName":"Session.selectedAssets","fieldValue":"{action.selectedAssets}"}],"id":"flex-action-1637826812896","openUrlIn":"Current Window","targetType":"Web Page","type":"cardAction","vlocityIcon":"standard-default"}}],"channelname":"cpq_{recordId}","displayLabel":"cpq_{recordId}:selectallassetsinagroup","element":"action","eventLabel":"pubsub","eventname":"selectallassetsinagroup","eventtype":"pubsub","key":"event-1","recordIndex":"0","showSpinner":"false"},{"actionList":[{"actionIndex":0,"card":"{card}","draggable":true,"isOpen":true,"key":"1637826910137-n577kj7ft","label":"Action","stateAction":{"Web Page":{"targetName":"/apex"},"displayName":"Action","eventName":"setValues","fieldValues":[{"fieldName":"Session.selectedAssets","fieldValue":"{action.selectedAssets}"},{"fieldName":"Session.selectedAssetIds","fieldValue":"{action.selectedAssetIds}"}],"id":"flex-action-1637826960463","openUrlIn":"Current Window","targetType":"Web Page","type":"cardAction","vlocityIcon":"standard-default"}}],"channelname":"cpq_{recordId}","displayLabel":"cpq_{recordId}:select_record","element":"action","eventLabel":"pubsub","eventname":"select_record","eventtype":"pubsub","key":"event-2","recordIndex":"0","showSpinner":"false"},{"actionList":[{"actionIndex":0,"card":"{card}","draggable":true,"isOpen":true,"key":"1637826983725-4ppn2to6j","label":"Action","stateAction":{"Web Page":{"targetName":"/apex"},"displayName":"Action","eventName":"setValues","fieldValues":[{"fieldName":"Session.selectAll","fieldValue":"{action.checked}"},{"fieldName":"Session.selectedAssets","fieldValue":"{action.selectedAssets}"},{"fieldName":"Session.selectedAssetIds","fieldValue":"{action.selectedAssetIds}"}],"id":"flex-action-1637827061666","openUrlIn":"Current Window","targetType":"Web Page","type":"cardAction","vlocityIcon":"standard-default"}}],"channelname":"cpq_{recordId}","displayLabel":"cpq_{recordId}:selectallassets","element":"action","eventLabel":"pubsub","eventname":"selectallassets","eventtype":"pubsub","key":"event-3","recordIndex":"0","showSpinner":"false"}],"isFlex":true,"lwc":{"DeveloperName":"cfCpqAssetViewerSelectAllAssets_1_Vlocity","Id":"0RbDp000000hs3FCAW","ManageableState":"unmanaged","MasterLabel":"cfCpqAssetViewerSelectAllAssets_1_Vlocity","NamespacePrefix":"vlocity_cmt"},"selectableMode":"Multi","sessionVars":[{"name":"selectedAssetIds","val":""},{"name":"selectedAssets","val":"{}"},{"name":"selectAll","val":"false"}],"states":[{"actions":[],"childCards":[],"components":{"layer-0":{"children":[{"children":[{"class":"slds-col ","element":"outputField","elementLabel":"Block-0-Text-0","key":"element_element_block_0_0_outputField_0_0","name":"Text","parentElementKey":"element_block_0_0","property":{"card":"{card}","mergeField":"%3Cdiv%3E%7BSession.selectedAssetIds.length%7D%20%7BLabel.CPQAssetsSelected%7D%3C/div%3E","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"width: auto;","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         width: auto;","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"width: auto;","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         width: auto;","text":{"align":"","color":""}}}],"type":"text"},{"class":"slds-col ","element":"outputField","elementLabel":"Block-0-Text-1","key":"element_element_block_0_0_outputField_1_0","name":"Text","parentElementKey":"element_block_0_0","property":{"card":"{card}","data-conditions":{"group":[{"field":"Session.selectAll","hasMergeField":false,"id":"state-new-condition-0","operator":"==","type":"custom","value":"true"}],"id":"state-condition-object","isParent":true},"mergeField":"","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__assetviewer_selectAll_dot ","container":{"class":"cpq__assetviewer_selectAll_dot"},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__assetviewer_selectAll_dot ","container":{"class":"cpq__assetviewer_selectAll_dot"},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"text"},{"class":"slds-col ","element":"action","elementLabel":"Block-0-Action-2","key":"element_element_block_0_0_action_2_0","name":"Action","parentElementKey":"element_block_0_0","property":{"actionList":[{"actionIndex":0,"draggable":true,"isOpen":true,"key":"1637826016413-frbjvxr77","label":"Action","stateAction":{"eventName":"cpq_{recordId}","extraParams":{"selected":"true"},"hasExtraParams":true,"id":"flex-action-1637826069362","message":"selectAllAssets","openUrlIn":"Current Window","subType":"PubSub","type":"Event"}}],"card":"{card}","data-conditions":{"group":[{"field":"Session.selectAllAssets","hasMergeField":false,"id":"state-new-condition-7","operator":"!=","type":"custom","value":"true"},{"field":"Session.selectAll","hasMergeField":false,"id":"state-new-condition-14","logicalOperator":"&&","operator":"==","type":"custom","value":"true"}],"id":"state-condition-object","isParent":true},"flyoutDetails":{},"hideActionIcon":true,"iconName":"standard-default","label":"\\{Label.CPQSelectAllAssets}","record":"{record}","showSpinner":"false","stateObj":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__assetviewer_selectAll ","container":{"class":"cpq__assetviewer_selectAll"},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__assetviewer_selectAll ","container":{"class":"cpq__assetviewer_selectAll"},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"element"},{"class":"slds-col ","element":"action","elementLabel":"Block-0-Action-2-clone-0","key":"element_element_block_0_0_action_3_0","name":"Action","parentElementKey":"element_block_0_0","property":{"actionList":[{"actionIndex":0,"draggable":true,"isOpen":true,"key":"1637826016413-frbjvxr77","label":"Action","stateAction":{"eventName":"setValues","hasExtraParams":false,"id":"flex-action-1637826300270","message":"selectAllAssets","openUrlIn":"Current Window","subType":"PubSub","type":"cardAction"}}],"card":"{card}","data-conditions":{"group":[{"field":"Session.selectAllAssets","hasMergeField":false,"id":"state-new-condition-7","operator":"==","type":"custom","value":"true"},{"field":"Session.selectAll","hasMergeField":false,"id":"state-new-condition-14","logicalOperator":"&&","operator":"==","type":"custom","value":"true"}],"id":"state-condition-object","isParent":true},"flyoutDetails":{},"hideActionIcon":true,"iconName":"standard-default","label":"\\{Label.CPQAllAssetsSelected}","record":"{record}","showSpinner":"false","stateObj":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__assetviewer_selectAll ","container":{"class":"cpq__assetviewer_selectAll"},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__assetviewer_selectAll ","container":{"class":"cpq__assetviewer_selectAll"},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"element"}],"class":"slds-col ","element":"block","elementLabel":"Block-0","name":"Block","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"class":"slds-p-around_x-small","padding":[{"size":"x-small","type":"around"}],"sizeClass":"slds-size_12-of-12"},"type":"block"}]}},"conditions":{"group":[],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"Active","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"theme":"slds","title":"cpqAssetViewerSelectAllAssets","Id":"a5aDp000000DB8wAAW","vlocity_cmt__GlobalKey__c":"cpqAssetViewerSelectAllAssets/Vlocity/1/1637825126993"};
  export default definition