let definition =
      {"dataSource":{"contextVariables":[],"orderBy":{"isReverse":false,"name":""},"type":"Custom","value":{"body":"[\n    {\n        \"actions\": {\n            \"DETAILS\": {\n                \"client\": {\n                    \"params\": {}\n                },\n                \"remote\": {\n                    \"params\": {\n                        \"cartId\": \"801Dp000000PT6GAAI\",\n                        \"id\": \"802Dp000000PPOlAAA\",\n                        \"methodName\": \"getCartsItemsById\"\n                    }\n                },\n                \"rest\": {\n                    \"link\": \"/services/apexrest/vlocity_cmt/v2/cpq/carts/801Dp000000PT6GAAI/items/802Dp000000PPOlAAA?cartId=801Dp000000PT6GAAI&id=802Dp000000PPOlAAA\",\n                    \"method\": \"GET\",\n                    \"params\": {}\n                }\n            }\n        },\n        \"message\": \"Required attribute missing for Broadband.\",\n        \"severity\": \"ERROR\",\n        \"code\": \"204\",\n        \"bundleId\": \"802Dp000000PPOlAAA\",\n        \"messageId\": \"802Dp000000PPOlAAA|01tDp000000u6tZAAM\"\n    }\n]","dsDelay":"","resultVar":""}},"enableLwc":true,"events":[],"globalCSS":false,"isFlex":true,"lwc":{"DeveloperName":"cfCpqCartInlineError_4_Vlocity","Id":"0RbDp000000hs2dCA0","ManageableState":"unmanaged","MasterLabel":"cfCpqCartInlineError_4_Vlocity","NamespacePrefix":"vlocity_cmt"},"multilanguageSupport":true,"selectableMode":"Multi","sessionVars":[],"states":[{"actions":[],"blankCardState":false,"childCards":[],"components":{"layer-0":{"children":[{"children":[{"class":"slds-col ","element":"flexIcon","elementLabel":"Block-0-Icon-0","key":"element_element_block_0_0_flexIcon_0_0","name":"Icon","parentElementKey":"element_block_0_0","property":{"card":"{card}","color":"#000000","extraclass":"slds-icon_container slds-icon__svg--default ","iconName":"utility:warning","iconType":"Salesforce SVG","imgsrc":"","record":"{record}","size":"x-small","variant":"default"},"size":{"default":"1","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_xxx-small ","container":{"class":""},"elementStyleProperties":{"color":"#000000"},"inlineStyle":"","margin":[],"padding":[{"label":"around:xxx-small","size":"xxx-small","type":"around"}],"size":{"default":"1","isResponsive":false},"sizeClass":"slds-size_1-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_xxx-small ","container":{"class":""},"elementStyleProperties":{"color":"#000000"},"inlineStyle":"","margin":[],"padding":[{"label":"around:xxx-small","size":"xxx-small","type":"around"}],"size":{"default":"1","isResponsive":false},"sizeClass":"slds-size_1-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"element"},{"class":"slds-col ","element":"outputField","elementLabel":"Block-0-Text-1","key":"element_element_block_0_0_outputField_1_0","name":"Text","parentElementKey":"element_block_0_0","property":{"card":"{card}","mergeField":"%3Cdiv%20class=%22slds-text-heading_medium%22%3E%7BLabel.CPQMissingAttributes%7D%3C/div%3E","record":"{record}"},"size":{"default":"10","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__cart-inline-error_info-popover-title slds-p-left_xxx-small ","container":{"class":"cpq__cart-inline-error_info-popover-title"},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"left:xxx-small","size":"xxx-small","type":"left"}],"size":{"default":"10","isResponsive":false},"sizeClass":"slds-size_10-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__cart-inline-error_info-popover-title slds-p-left_xxx-small ","container":{"class":"cpq__cart-inline-error_info-popover-title"},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"left:xxx-small","size":"xxx-small","type":"left"}],"size":{"default":"10","isResponsive":false},"sizeClass":"slds-size_10-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"text"},{"class":"slds-col ","element":"flexIcon","elementLabel":"Block-0-Icon-2","key":"element_element_block_0_0_flexIcon_2_0","name":"Icon","parentElementKey":"element_block_0_0","property":{"action":{"actionList":[{"actionIndex":0,"card":"{card}","draggable":false,"isOpen":true,"key":"1651478553249-3neiytdg6","label":"Close Learn More Popver","stateAction":{"displayName":"Action","eventName":"cpq_{recordId}_{Parent.id}_alerts_learn_more_close_modal","id":"flex-action-1651634472651","message":"close","openUrlIn":"Current Window","subType":"PubSub","type":"Event","vlocityIcon":"standard-default"}}],"eventType":"onclick","iconName":"standard-default","label":"Action","showSpinner":"false"},"card":"{card}","color":"#000000","extraclass":"slds-icon_container slds-icon__svg--default ","iconName":"utility:close","iconType":"Salesforce SVG","imgsrc":"","record":"{record}","size":"x-small","variant":"default"},"size":{"default":"1","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_right slds-p-top_xxx-small ","container":{"class":""},"elementStyleProperties":{"color":"#000000"},"inlineStyle":"","margin":[],"padding":[{"label":"top:xxx-small","size":"xxx-small","type":"top"}],"size":{"default":"1","isResponsive":false},"sizeClass":"slds-size_1-of-12 ","style":"      \n         ","text":{"align":"right","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_right slds-p-top_xxx-small ","container":{"class":""},"elementStyleProperties":{"color":"#000000"},"inlineStyle":"","margin":[],"padding":[{"label":"top:xxx-small","size":"xxx-small","type":"top"}],"size":{"default":"1","isResponsive":false},"sizeClass":"slds-size_1-of-12 ","style":"      \n         ","text":{"align":"right","color":""}}}],"type":"element"}],"class":"slds-col ","element":"block","elementLabel":"Block-0","name":"Block","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"#FE9339","image":"","position":"","repeat":"","size":""},"border":{"color":"#cccccc","radius":"3px 3px 0px 0px","style":"","type":"","width":""},"class":"slds-p-around_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"background-color:#FE9339;      \n    border-radius:3px 3px 0px 0px;     ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"#FE9339","image":"","position":"","repeat":"","size":""},"border":{"color":"#cccccc","radius":"3px 3px 0px 0px","style":"","type":"","width":""},"class":"slds-p-around_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"background-color:#FE9339;      \n    border-radius:3px 3px 0px 0px;     ","text":{"align":"","color":""}}}],"type":"block"},{"class":"slds-col ","element":"outputField","elementLabel":"Text-1","name":"Text","property":{"card":"{card}","data-conditions":{"group":[{"field":"objectApiName","hasMergeField":false,"id":"state-new-condition-7","operator":"==","type":"custom","value":"Opportunity"},{"field":"Params.c__cartType","hasMergeField":false,"id":"state-new-condition-6","logicalOperator":"||","operator":"==","type":"custom","value":"Opportunity"},{"field":"Parent.objectType","hasMergeField":false,"id":"state-new-condition-0","logicalOperator":"||","operator":"==","type":"custom","value":"Opportunity"}],"id":"state-condition-object","isParent":true},"mergeField":"%3Cdiv%3E%3Cspan%20style=%22background-color:%20initial;%20font-size:%200.8125rem;%22%3E%7BLabel.CPQMissingAttributesInfoMessageOppty%7D%3C/span%3E%3C/div%3E","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-vertical_x-small slds-p-horizontal_small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"vertical:x-small","size":"x-small","type":"vertical"},{"label":"horizontal:small","size":"small","type":"horizontal"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-vertical_x-small slds-p-horizontal_small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"vertical:x-small","size":"x-small","type":"vertical"},{"label":"horizontal:small","size":"small","type":"horizontal"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"text"},{"class":"slds-col ","element":"outputField","elementLabel":"Text-2","name":"Text","property":{"card":"{card}","data-conditions":{"group":[{"field":"objectApiName","hasMergeField":false,"id":"state-new-condition-7","operator":"==","type":"custom","value":"Quote"},{"field":"Params.c__cartType","hasMergeField":false,"id":"state-new-condition-32","logicalOperator":"||","operator":"==","type":"custom","value":"Quote"},{"field":"Parent.objectType","hasMergeField":false,"id":"state-new-condition-17","logicalOperator":"||","operator":"==","type":"custom","value":"Quote"}],"id":"state-condition-object","isParent":true},"mergeField":"%3Cdiv%3E%3Cspan%20style=%22background-color:%20initial;%20font-size:%200.8125rem;%22%3E%7BLabel.CPQMissingAttributesInfoMessageQuote%7D%3C/span%3E%3C/div%3E","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-vertical_x-small slds-p-horizontal_small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"vertical:x-small","size":"x-small","type":"vertical"},{"label":"horizontal:small","size":"small","type":"horizontal"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-vertical_x-small slds-p-horizontal_small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"vertical:x-small","size":"x-small","type":"vertical"},{"label":"horizontal:small","size":"small","type":"horizontal"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"text"},{"class":"slds-col ","element":"outputField","elementLabel":"Text-3","name":"Text","property":{"card":"{card}","data-conditions":{"group":[{"field":"objectApiName","hasMergeField":false,"id":"state-new-condition-14","operator":"==","type":"custom","value":"Order"},{"field":"Params.c__cartType","hasMergeField":false,"id":"state-new-condition-48","logicalOperator":"||","operator":"==","type":"custom","value":"Order"},{"field":"Parent.objectType","hasMergeField":false,"id":"state-new-condition-34","logicalOperator":"||","operator":"==","type":"custom","value":"Order"}],"id":"state-condition-object","isParent":true},"mergeField":"%3Cdiv%3E%3Cspan%20style=%22background-color:%20initial;%20font-size:%200.8125rem;%22%3E%7BLabel.CPQMissingAttributesInfoMessageOrder%7D%3C/span%3E%3C/div%3E","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-vertical_x-small slds-p-horizontal_small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"vertical:x-small","size":"x-small","type":"vertical"},{"label":"horizontal:small","size":"small","type":"horizontal"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-vertical_x-small slds-p-horizontal_small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"vertical:x-small","size":"x-small","type":"vertical"},{"label":"horizontal:small","size":"small","type":"horizontal"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"text"}]}},"conditions":{"group":[{"field":"Parent.source","hasMergeField":false,"id":"state-new-condition-0","operator":"==","type":"custom","value":"configurator"}],"id":"state-condition-object","isParent":true},"documents":[],"fields":[],"isSmartAction":false,"name":"Bulk Change Configurator : Attributes Alert Info Popover","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}}},{"actions":[],"blankCardState":false,"childCards":[],"components":{"layer-0":{"children":[{"children":[{"class":"slds-col ","element":"outputField","elementLabel":"Block-0-Text-1","key":"element_element_block_0_1_outputField_0_1","name":"Text","parentElementKey":"element_block_0_1","property":{"card":"{card}","mergeField":"%3Cdiv%20class=%22slds-text-heading_small%22%3E%7BLabel.CPQAsyncDiscount%7D%3C/div%3E","record":"{record}"},"size":{"default":"11","isResponsive":false},"stateIndex":1,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__cart-inline-error_info-popover-title slds-p-left_xxx-small ","container":{"class":"cpq__cart-inline-error_info-popover-title"},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"left:xxx-small","size":"xxx-small","type":"left"}],"size":{"default":"11","isResponsive":false},"sizeClass":"slds-size_11-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__cart-inline-error_info-popover-title slds-p-left_xxx-small ","container":{"class":"cpq__cart-inline-error_info-popover-title"},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"left:xxx-small","size":"xxx-small","type":"left"}],"size":{"default":"11","isResponsive":false},"sizeClass":"slds-size_11-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"text"},{"class":"slds-col ","element":"flexIcon","elementLabel":"Block-0-Icon-2","key":"element_element_block_0_1_flexIcon_1_1","name":"Icon","parentElementKey":"element_block_0_1","property":{"action":{"actionList":[{"actionIndex":0,"card":"{card}","draggable":false,"isOpen":true,"key":"1651478553249-3neiytdg6","label":"Close Learn More Popver","stateAction":{"displayName":"Action","eventName":"cpq_{recordId}__close_modal_discount_info_popover","id":"flex-action-1656585819178","message":"close","openUrlIn":"Current Window","subType":"PubSub","type":"Event","vlocityIcon":"standard-default"}}],"eventType":"onclick","iconName":"standard-default","label":"Action","showSpinner":"false"},"card":"{card}","color":"#000000","extraclass":"slds-icon_container slds-icon__svg--default ","iconName":"utility:close","iconType":"Salesforce SVG","imgsrc":"","record":"{record}","size":"x-small","variant":"default"},"size":{"default":"1","isResponsive":false},"stateIndex":1,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_right slds-p-top_xxx-small ","container":{"class":""},"elementStyleProperties":{"color":"#000000"},"inlineStyle":"","margin":[],"padding":[{"label":"top:xxx-small","size":"xxx-small","type":"top"}],"size":{"default":"1","isResponsive":false},"sizeClass":"slds-size_1-of-12 ","style":"      \n         ","text":{"align":"right","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_right slds-p-top_xxx-small ","container":{"class":""},"elementStyleProperties":{"color":"#000000"},"inlineStyle":"","margin":[],"padding":[{"label":"top:xxx-small","size":"xxx-small","type":"top"}],"size":{"default":"1","isResponsive":false},"sizeClass":"slds-size_1-of-12 ","style":"      \n         ","text":{"align":"right","color":""}}}],"type":"element"}],"class":"slds-col ","element":"block","elementLabel":"Block-0","name":"Block","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":1,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"#cccccc","radius":"","style":"","type":"border_bottom","width":"1"},"class":"slds-border_bottom slds-p-around_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     border-bottom: #cccccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"#cccccc","radius":"","style":"","type":"border_bottom","width":"1"},"class":"slds-border_bottom slds-p-around_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     border-bottom: #cccccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"block"},{"class":"slds-col ","element":"outputField","elementLabel":"Text-1","name":"Text","property":{"card":"{card}","data-conditions":{"group":[],"id":"state-condition-object","isParent":true},"mergeField":"%3Cdiv%3E%3Cspan%20style=%22background-color:%20initial;%20font-size:%200.8125rem;%22%3E%7BLabel.CPQAsyncDiscountPopover%7D%3C/span%3E%3C/div%3E","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":1,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-vertical_x-small slds-p-horizontal_small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"vertical:x-small","size":"x-small","type":"vertical"},{"label":"horizontal:small","size":"small","type":"horizontal"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-vertical_x-small slds-p-horizontal_small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"vertical:x-small","size":"x-small","type":"vertical"},{"label":"horizontal:small","size":"small","type":"horizontal"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"text"}]}},"conditions":{"group":[{"field":"Parent.source","hasMergeField":false,"id":"state-new-condition-0","operator":"==","type":"custom","value":"discount"}],"id":"state-condition-object","isParent":true},"documents":[],"fields":[],"isSmartAction":false,"name":"Discount: Info popover","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}}},{"actions":[],"childCards":[],"components":{"layer-0":{"children":[{"class":"slds-col ","element":"flexIcon","elementLabel":"Icon-0","name":"Icon","property":{"card":"{card}","color":"#867F7F","data-conditions":{"group":[{"field":"severity","hasMergeField":false,"id":"state-new-condition-0","operator":"==","type":"custom","value":"WARN"}],"id":"state-condition-object","isParent":true},"extraclass":"slds-icon_container slds-icon__svg--default ","iconName":"utility:info","iconType":"Salesforce SVG","imgsrc":"","record":"{record}","size":"x-small","variant":"inverse"},"size":{"default":"1","isResponsive":true,"large":"1","medium":"1","small":"1"},"stateIndex":2,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__error_icon","container":{"class":""},"customClass":"cpq__error_icon","elementStyleProperties":{"color":"#867F7F"},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"1","isResponsive":true,"large":"1","medium":"1","small":"1"},"sizeClass":"slds-large-size_1-of-12 slds-medium-size_1-of-12 slds-small-size_1-of-12 slds-size_1-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__error_icon","container":{"class":""},"customClass":"cpq__error_icon","elementStyleProperties":{"color":"#867F7F"},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"1","isResponsive":true,"large":"1","medium":"1","small":"1"},"sizeClass":"slds-large-size_1-of-12 slds-medium-size_1-of-12 slds-small-size_1-of-12 slds-size_1-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"element"},{"class":"slds-col ","element":"flexIcon","elementLabel":"Icon-0-clone-0","name":"Icon","property":{"card":"{card}","color":"#FE9339","data-conditions":{"group":[{"field":"severity","hasMergeField":false,"id":"state-new-condition-0","operator":"==","type":"custom","value":"ERROR"}],"id":"state-condition-object","isParent":true},"extraclass":"slds-icon_container slds-icon__svg--default ","iconName":"utility:warning","iconType":"Salesforce SVG","imgsrc":"","record":"{record}","size":"x-small","variant":"inverse"},"size":{"default":"1","isResponsive":true,"large":"1","medium":"1","small":"1"},"stateIndex":2,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__error_icon","container":{"class":""},"customClass":"cpq__error_icon","elementStyleProperties":{"color":"#FE9339"},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"1","isResponsive":true,"large":"1","medium":"1","small":"1"},"sizeClass":"slds-large-size_1-of-12 slds-medium-size_1-of-12 slds-small-size_1-of-12 slds-size_1-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__error_icon","container":{"class":""},"customClass":"cpq__error_icon","elementStyleProperties":{"color":"#FE9339"},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"1","isResponsive":true,"large":"1","medium":"1","small":"1"},"sizeClass":"slds-large-size_1-of-12 slds-medium-size_1-of-12 slds-small-size_1-of-12 slds-size_1-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"element"},{"class":"slds-col ","element":"outputField","elementLabel":"Text-1","name":"Text","property":{"card":"{card}","mergeField":"%3Cdiv%3E%7Bmessage%7D%3C/div%3E","record":"{record}"},"size":{"default":"11","isResponsive":true,"large":"11","medium":"11","small":"11"},"stateIndex":2,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__error_message","container":{"class":""},"customClass":"cpq__error_message","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"11","isResponsive":true,"large":"11","medium":"11","small":"11"},"sizeClass":"slds-large-size_11-of-12 slds-medium-size_11-of-12 slds-small-size_11-of-12 slds-size_11-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"isSetForDesignTime":false,"isopen":true,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__error_message","container":{"class":""},"customClass":"cpq__error_message","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"11","isResponsive":true,"large":"11","medium":"11","small":"11"},"sizeClass":"slds-large-size_11-of-12 slds-medium-size_11-of-12 slds-small-size_11-of-12 slds-size_11-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"text"}]}},"conditions":{"group":[],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"Active","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-card cpq_inline_error_container","container":{"class":"slds-card"},"customClass":"cpq_inline_error_container","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"theme":"slds","title":"cpqCartInlineError","uniqueKey":"","Id":"a5aDp000000DB4GIA4","vlocity_cmt__GlobalKey__c":"cpqCartInlineError/Vlocity/4/1661339804890"};
  export default definition