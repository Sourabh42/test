let definition =
      {"dataSource":{"contextVariables":[],"orderBy":{"isReverse":false,"name":""},"type":"Custom","value":{"body":"[{\n                  \"code\": \"938e78a2-59bd-ce6d-9932-008d1a117845\",\n                  \"dataType\": \"currency\",\n                  \"inputType\": \"number\",\n                  \"multiselect\": false,\n                  \"required\": false,\n                  \"readonly\": false,\n                  \"disabled\": false,\n\"enabled\": false,\n                  \"filterable\": true,\n                  \"attributeId\": \"a0cDp0000019PHuAA2\",\n                  \"label\": \"Data\",\n                  \"displaySequence\": -1,\n                  \"hasRules\": false,\n                  \"hidden\": false,\n                  \"cloneable\": true,\n                  \"isNotTranslatable\": false,\n                  \"values\": [\n                    {\n                      \"readonly\": false,\n                      \"disabled\": false\n                    }\n                  ],\n                  \"userValues\": null\n                },\n                {\n                  \"code\": \"f63e0126-a277-8568-1104-e846bd51e5fc\",\n                  \"dataType\": \"text\",\n                  \"inputType\": \"text\",\n                  \"multiselect\": false,\n                  \"required\": false,\n                  \"readonly\": false,\n                  \"disabled\": false,\n\"enabled\":false,\n                  \"filterable\": true,\n                  \"attributeId\": \"a0cDp0000019PHvAA2\",\n                  \"label\": \"Duration\",\n                  \"displaySequence\": -1,\n                  \"hasRules\": false,\n                  \"hidden\": false,\n                  \"cloneable\": true,\n                  \"isNotTranslatable\": false,\n                  \"values\": [\n                    {\n                      \"readonly\": false,\n                      \"disabled\": false\n                    }\n                  ],\n                  \"userValues\": null\n                }\n]","dsDelay":"","resultVar":""}},"enableLwc":true,"events":[],"globalCSS":false,"isFlex":true,"isRepeatable":true,"lwc":{"DeveloperName":"cfCPQAttributeConfigFields_MACDBulkChange_1_Vlocity","Id":"0RbDp000000hs3OCAS","ManageableState":"unmanaged","MasterLabel":"cfCPQAttributeConfigFields_MACDBulkChange_1_Vlocity","NamespacePrefix":"vlocity_cmt"},"multilanguageSupport":true,"selectableField":"disabled","selectableMode":"Multi","selectedCardsLabel":"cardslist","sessionVars":[],"states":[{"actions":[],"childCards":[],"components":{"layer-0":{"children":[{"class":"slds-col ","element":"flexToggle","elementLabel":"Toggle-0","name":"Toggle","property":{"action":{"actionData":{"card":"{card}","stateAction":{"displayName":"Action","eventName":"cpq_{recordId}","extraParams":{"attributecategoryid":"{Parent.attributeCategoryId}","attributecode":"{code}","attributeid":"{attributeId}","carttype":"{Parent.cartType}","enabled":"{element.checked}","hierarchypath":"{Parent.hierarchyPath}","itemid":"{Parent.itemid}"},"hasExtraParams":true,"id":"flex-action-1626619740601","message":"cpq_bulkchange_event","openUrlIn":"Current Window","subType":"PubSub","type":"Event","vlocityIcon":"standard-default"},"stateObj":"{record}"},"eventType":"onchange","iconName":"standard-default","label":"Action","name":""},"card":"{card}","checked":"\\{enabled}","data-conditions":{"group":[],"id":"state-condition-object","isParent":true},"disabled":"\\{disabled}","label":"","name":"","record":"{record}","toggleDisabledLabel":"","toggleEnabledLabel":"","type":"toggle","updateDS":true},"size":{"default":"2","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq-toggle-style","container":{"class":""},"customClass":"cpq-toggle-style","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"2","isResponsive":false},"sizeClass":"slds-size_2-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq-toggle-style","container":{"class":""},"customClass":"cpq-toggle-style","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"2","isResponsive":false},"sizeClass":"slds-size_2-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"element"},{"class":"slds-col ","element":"baseInputElement","elementLabel":"Text-2","name":"Text","property":{"card":"{card}","data-conditions":{"group":[{"field":"enabled","hasMergeField":false,"id":"state-new-condition-9","operator":"==","type":"custom","value":"false"}],"id":"state-condition-object","isParent":true},"data-preloadConditionalElement":true,"propertyObj":{"customProperties":[{"id":2,"label":"required","value":"{required}"},{"id":3,"label":"data-attributename","value":"{code}"},{"id":3,"label":"data-itemid","value":"{Parent.itemid}"},{"id":4,"label":"data-hierarchypath","value":"{Parent.hierarchyPath}"},{"id":5,"label":"data-attributecategoryid","value":"{Parent.attributeCategoryId}"},{"id":6,"label":"data-attributeId","value":"{attributeId}"},{"id":7,"label":"data-carttype","value":"{Parent.cartType}"},{"id":7,"label":"readOnly","value":"{readonly}"},{"id":8,"label":"disabled","value":"true"},{"id":10,"label":"name","value":"{Parent.vdfName}"}],"label":"{label}","name":"{Parent.vdfName}","readOnly":"","value":"{userValues}"},"record":"{record}","type":"text"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"text-attribute-title","container":{"class":""},"customClass":"text-attribute-title","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"text-attribute-title","container":{"class":""},"customClass":"text-attribute-title","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"element"},{"class":"slds-col ","element":"baseInputElement","elementLabel":"Text-3","name":"Text","property":{"card":"{card}","data-conditions":{"group":[{"field":"enabled","hasMergeField":false,"id":"state-new-condition-25","operator":"==","type":"custom","value":"true"},{"field":"enabled","hasMergeField":false,"id":"state-new-condition-34","logicalOperator":"||","operator":"==","type":"custom","value":"undefined"}],"id":"state-condition-object","isParent":true},"data-preloadConditionalElement":true,"propertyObj":{"customProperties":[{"id":2,"label":"required","value":"{required}"},{"id":3,"label":"data-attributename","value":"{code}"},{"id":3,"label":"data-itemid","value":"{Parent.itemid}"},{"id":4,"label":"data-hierarchypath","value":"{Parent.hierarchyPath}"},{"id":5,"label":"data-attributecategoryid","value":"{Parent.attributeCategoryId}"},{"id":6,"label":"data-attributeId","value":"{attributeId}"},{"id":7,"label":"data-carttype","value":"{Parent.cartType}"},{"id":7,"label":"readOnly","value":"{readonly}"},{"id":10,"label":"name","value":"{Parent.vdfName}"}],"label":"{label}","name":"{Parent.vdfName}","readOnly":"","value":"{userValues}"},"record":"{record}","type":"text"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"text-attribute-title","container":{"class":""},"customClass":"text-attribute-title","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"text-attribute-title","container":{"class":""},"customClass":"text-attribute-title","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"element"}]}},"conditions":{"group":[{"field":"inputType","hasMergeField":false,"id":"state-condition-4","operator":"==","type":"custom","value":"text"}],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"Text","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-card slds-p-around_small ","container":{"class":"slds-card"},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:small","size":"small","type":"around"}],"size":{"default":"12","isResponsive":true,"large":"2","medium":"6","small":"12"},"sizeClass":"slds-large-size_2-of-12 slds-medium-size_6-of-12 slds-small-size_12-of-12 slds-size_12-of-12 ","style":"             ","text":{"align":"","color":""}}},{"actions":[],"childCards":[],"components":{"layer-0":{"children":[{"class":"slds-col ","element":"flexToggle","elementLabel":"Toggle-0-clone-0","name":"Toggle","property":{"action":{"actionData":{"card":"{card}","stateAction":{"displayName":"Action","eventName":"cpq_{recordId}","extraParams":{"attributecategoryid":"{Parent.attributeCategoryId}","attributecode":"{code}","attributeid":"{attributeId}","carttype":"{Parent.cartType}","enabled":"{element.checked}","hierarchypath":"{Parent.hierarchyPath}","itemid":"{Parent.itemid}"},"hasExtraParams":true,"id":"flex-action-1626619704985","message":"cpq_bulkchange_event","openUrlIn":"Current Window","subType":"PubSub","type":"Event","vlocityIcon":"standard-default"},"stateObj":"{record}"},"eventType":"onchange","iconName":"standard-default","label":"Action","name":""},"card":"{card}","checked":"\\{enabled}","data-conditions":{"group":[],"id":"state-condition-object","isParent":true},"disabled":"\\{disabled}","label":"","name":"","record":"{record}","toggleDisabledLabel":"","toggleEnabledLabel":"","type":"toggle","updateDS":true},"size":{"default":"2","isResponsive":false},"stateIndex":1,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq-toggle-style","container":{"class":""},"customClass":"cpq-toggle-style","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"2","isResponsive":false},"sizeClass":"slds-size_2-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq-toggle-style","container":{"class":""},"customClass":"cpq-toggle-style","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"2","isResponsive":false},"sizeClass":"slds-size_2-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"element"},{"class":"slds-col ","element":"baseInputElement","elementLabel":"Text-1","name":"Text","property":{"card":"{card}","data-conditions":{"group":[{"field":"enabled","hasMergeField":false,"id":"state-new-condition-0","operator":"==","type":"custom","value":"false"}],"id":"state-condition-object","isParent":true},"propertyObj":{"customProperties":[{"id":2,"label":"required","value":"{required}"},{"id":3,"label":"data-attributename","value":"{code}"},{"id":3,"label":"data-itemid","value":"{Parent.itemid}"},{"id":4,"label":"data-hierarchypath","value":"{Parent.hierarchyPath}"},{"id":5,"label":"data-attributecategoryid","value":"{Parent.attributeCategoryId}"},{"id":6,"label":"data-attributeId","value":"{attributeId}"},{"id":7,"label":"data-carttype","value":"{Parent.cartType}"},{"id":7,"label":"readOnly","value":"{readonly}"},{"id":9,"label":"type","value":"range"},{"id":10,"label":"min","value":"{min}"},{"id":11,"label":"max","value":"{max}"},{"id":13,"label":"name","value":"{Parent.vdfName}"},{"id":13,"label":"disabled","value":"true"}],"disabled":"","label":"{label}","name":"{Parent.vdfName}","readOnly":"","value":"{userValues}"},"record":"{record}","type":"text"},"size":{"default":"12","isResponsive":false},"stateIndex":1,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"text-attribute-title","container":{"class":""},"customClass":"text-attribute-title","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"text-attribute-title","container":{"class":""},"customClass":"text-attribute-title","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"element"},{"class":"slds-col ","element":"baseInputElement","elementLabel":"Text-1-clone-0","name":"Text","property":{"card":"{card}","data-conditions":{"group":[{"field":"enabled","hasMergeField":false,"id":"state-new-condition-0","operator":"==","type":"custom","value":"true"},{"field":"enabled","hasMergeField":false,"id":"state-new-condition-29","logicalOperator":"||","operator":"==","type":"custom","value":"undefined"}],"id":"state-condition-object","isParent":true},"propertyObj":{"customProperties":[{"id":2,"label":"required","value":"{required}"},{"id":3,"label":"data-attributename","value":"{code}"},{"id":3,"label":"data-itemid","value":"{Parent.itemid}"},{"id":4,"label":"data-hierarchypath","value":"{Parent.hierarchyPath}"},{"id":5,"label":"data-attributecategoryid","value":"{Parent.attributeCategoryId}"},{"id":6,"label":"data-attributeId","value":"{attributeId}"},{"id":7,"label":"data-carttype","value":"{Parent.cartType}"},{"id":7,"label":"readOnly","value":"{readonly}"},{"id":9,"label":"type","value":"range"},{"id":10,"label":"min","value":"{min}"},{"id":11,"label":"max","value":"{max}"},{"id":13,"label":"name","value":"{Parent.vdfName}"},{"id":13,"label":"disabled","value":"false"}],"disabled":"","label":"{label}","name":"{Parent.vdfName}","readOnly":"","value":"{userValues}"},"record":"{record}","type":"text"},"size":{"default":"12","isResponsive":false},"stateIndex":1,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"text-attribute-title","container":{"class":""},"customClass":"text-attribute-title","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"text-attribute-title","container":{"class":""},"customClass":"text-attribute-title","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"element"}]}},"conditions":{"group":[{"field":"inputType","id":"state-condition-3","operator":"==","type":"custom","value":"range"}],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"Range","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-card slds-p-around_small ","container":{"class":"slds-card"},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:small","size":"small","type":"around"}],"size":{"default":"12","isResponsive":true,"large":"2","medium":"6","small":"12"},"sizeClass":"slds-large-size_2-of-12 slds-medium-size_6-of-12 slds-small-size_12-of-12 slds-size_12-of-12 ","style":"             ","text":{"align":"","color":""}}},{"actions":[],"childCards":[],"components":{"layer-0":{"children":[{"class":"slds-col ","element":"flexToggle","elementLabel":"Toggle-0-clone-0","name":"Toggle","property":{"action":{"actionData":{"card":"{card}","stateAction":{"displayName":"Action","eventName":"cpq_{recordId}","extraParams":{"attributecategoryid":"{Parent.attributeCategoryId}","attributecode":"{code}","attributeid":"{attributeId}","carttype":"{Parent.cartType}","enabled":"{element.checked}","hierarchypath":"{Parent.hierarchyPath}","itemid":"{Parent.itemid}"},"hasExtraParams":true,"id":"flex-action-1626619767946","message":"cpq_bulkchange_event","openUrlIn":"Current Window","subType":"PubSub","type":"Event","vlocityIcon":"standard-default"},"stateObj":"{record}"},"eventType":"onchange","iconName":"standard-default","label":"Action","name":""},"card":"{card}","checked":"\\{enabled}","data-conditions":{"group":[],"id":"state-condition-object","isParent":true},"disabled":"\\{disabled}","label":"","name":"","record":"{record}","toggleDisabledLabel":"","toggleEnabledLabel":"","type":"toggle","updateDS":true},"size":{"default":"2","isResponsive":false},"stateIndex":2,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq-toggle-style","container":{"class":""},"customClass":"cpq-toggle-style","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"2","isResponsive":false},"sizeClass":"slds-size_2-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq-toggle-style","container":{"class":""},"customClass":"cpq-toggle-style","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"2","isResponsive":false},"sizeClass":"slds-size_2-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"element"},{"class":"slds-col ","element":"baseInputElement","elementLabel":"Currency-1","name":"Currency","property":{"card":"{card}","data-conditions":{"group":[{"field":"enabled","hasMergeField":false,"id":"state-new-condition-0","operator":"==","type":"custom","value":"false"}],"id":"state-condition-object","isParent":true},"propertyObj":{"customProperties":[{"id":0,"label":"data-attributename","value":"{code}"},{"id":1,"label":"data-itemid","value":"{Parent.itemid}"},{"id":2,"label":"data-hierarchypath","value":"{Parent.hierarchyPath}"},{"id":3,"label":"data-attributecategoryid","value":"{Parent.attributeCategoryId}"},{"id":4,"label":"data-attributeId","value":"{attributeId}"},{"id":5,"label":"data-carttype","value":"{Parent.cartType}"},{"id":6,"label":"readOnly","value":"{readonly}"},{"id":7,"label":"disabled","value":"true"},{"id":8,"label":"required","value":"{required}"},{"id":10,"label":"name","value":"{Parent.vdfName}"}],"label":"{label}","name":"{Parent.vdfName}","value":"{userValues}"},"record":"{record}","type":"currency"},"size":{"default":"12","isResponsive":false},"stateIndex":2,"styleObject":{"sizeClass":"slds-size_12-of-12"},"type":"element"},{"class":"slds-col ","element":"baseInputElement","elementLabel":"Currency-1-clone-0","name":"Currency","property":{"card":"{card}","data-conditions":{"group":[{"field":"enabled","hasMergeField":false,"id":"state-new-condition-0","operator":"==","type":"custom","value":"true"},{"field":"enabled","hasMergeField":false,"id":"state-new-condition-9","logicalOperator":"||","operator":"==","type":"custom","value":"undefined"}],"id":"state-condition-object","isParent":true},"propertyObj":{"customProperties":[{"id":0,"label":"data-attributename","value":"{code}"},{"id":1,"label":"data-itemid","value":"{Parent.itemid}"},{"id":2,"label":"data-hierarchypath","value":"{Parent.hierarchyPath}"},{"id":3,"label":"data-attributecategoryid","value":"{Parent.attributeCategoryId}"},{"id":4,"label":"data-attributeId","value":"{attributeId}"},{"id":5,"label":"data-carttype","value":"{Parent.cartType}"},{"id":6,"label":"readOnly","value":"{readonly}"},{"id":7,"label":"disabled","value":"false"},{"id":8,"label":"required","value":"{required}"},{"id":10,"label":"name","value":"{Parent.vdfName}"}],"label":"{label}","name":"{Parent.vdfName}","value":"{userValues}"},"record":"{record}","type":"currency"},"size":{"default":"12","isResponsive":false},"stateIndex":2,"styleObject":{"sizeClass":"slds-size_12-of-12"},"type":"element"}]}},"conditions":{"group":[{"field":"inputType","id":"state-condition-3","operator":"==","type":"custom","value":"number"},{"field":"dataType","id":"state-new-condition-0","logicalOperator":"&&","operator":"==","type":"custom","value":"currency"}],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"Currency","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-card slds-p-around_x-small slds-m-around_none ","container":{"class":"slds-card"},"elementStyleProperties":{},"inlineStyle":"","margin":[{"label":"around:none","size":"none","type":"around"}],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":true,"large":"2","medium":"6","small":"12"},"sizeClass":"slds-large-size_2-of-12 slds-medium-size_6-of-12 slds-small-size_12-of-12 slds-size_12-of-12 ","style":"             ","text":{"align":"","color":""}}},{"actions":[],"childCards":[],"components":{"layer-0":{"children":[{"class":"slds-col ","element":"flexToggle","elementLabel":"Toggle-0-clone-0","name":"Toggle","property":{"action":{"actionData":{"card":"{card}","stateAction":{"displayName":"Action","eventName":"cpq_{recordId}","extraParams":{"attributecategoryid":"{Parent.attributeCategoryId}","attributecode":"{code}","attributeid":"{attributeId}","carttype":"{Parent.cartType}","enabled":"{element.checked}","hierarchypath":"{Parent.hierarchyPath}","itemid":"{Parent.itemid}"},"hasExtraParams":true,"id":"flex-action-1626619808283","message":"cpq_bulkchange_event","openUrlIn":"Current Window","subType":"PubSub","type":"Event","vlocityIcon":"standard-default"},"stateObj":"{record}"},"eventType":"onchange","iconName":"standard-default","label":"Action","name":""},"card":"{card}","checked":"\\{enabled}","data-conditions":{"group":[],"id":"state-condition-object","isParent":true},"disabled":"\\{disabled}","label":"","name":"","record":"{record}","toggleDisabledLabel":"","toggleEnabledLabel":"","type":"toggle","updateDS":true},"size":{"default":"2","isResponsive":false},"stateIndex":3,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq-toggle-style","container":{"class":""},"customClass":"cpq-toggle-style","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"2","isResponsive":false},"sizeClass":"slds-size_2-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq-toggle-style","container":{"class":""},"customClass":"cpq-toggle-style","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"2","isResponsive":false},"sizeClass":"slds-size_2-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"element"},{"class":"slds-col ","element":"baseInputElement","elementLabel":"Number-0","name":"Number","property":{"card":"{card}","data-conditions":{"group":[{"field":"enabled","hasMergeField":false,"id":"state-new-condition-0","operator":"==","type":"custom","value":"false"}],"id":"state-condition-object","isParent":true},"propertyObj":{"customProperties":[{"id":2,"label":"required","value":"{required}"},{"id":3,"label":"min","value":"{min}"},{"id":4,"label":"max","value":"{max}"},{"id":6,"label":"data-attributename","value":"{code}"},{"id":7,"label":"data-itemid","value":"{Parent.itemid}"},{"id":8,"label":"data-hierarchypath","value":"{Parent.hierarchyPath}"},{"id":9,"label":"data-attributecategoryid","value":"{Parent.attributeCategoryId}"},{"id":10,"label":"data-attributeId","value":"{attributeId}"},{"id":11,"label":"data-carttype","value":"{Parent.cartType}"},{"id":9,"label":"readOnly","value":"{readonly}"},{"id":10,"label":"disabled","value":"true"},{"id":12,"label":"name","value":"{Parent.vdfName}"}],"label":"{label}","name":"{Parent.vdfName}","value":"{userValues}"},"record":"{record}","type":"number"},"size":{"default":"12","isResponsive":false},"stateIndex":3,"styleObject":{"sizeClass":"slds-size_12-of-12"},"type":"element"},{"class":"slds-col ","element":"baseInputElement","elementLabel":"Number-1-clone-0","name":"Number","property":{"card":"{card}","data-conditions":{"group":[{"field":"enabled","hasMergeField":false,"id":"state-new-condition-0","operator":"==","type":"custom","value":"true"},{"field":"enabled","hasMergeField":false,"id":"state-new-condition-11","logicalOperator":"||","operator":"==","type":"custom","value":"undefined"}],"id":"state-condition-object","isParent":true},"propertyObj":{"customProperties":[{"id":2,"label":"required","value":"{required}"},{"id":3,"label":"min","value":"{min}"},{"id":4,"label":"max","value":"{max}"},{"id":6,"label":"data-attributename","value":"{code}"},{"id":7,"label":"data-itemid","value":"{Parent.itemid}"},{"id":8,"label":"data-hierarchypath","value":"{Parent.hierarchyPath}"},{"id":9,"label":"data-attributecategoryid","value":"{Parent.attributeCategoryId}"},{"id":10,"label":"data-attributeId","value":"{attributeId}"},{"id":11,"label":"data-carttype","value":"{Parent.cartType}"},{"id":9,"label":"readOnly","value":"{readonly}"},{"id":10,"label":"disabled","value":"false"},{"id":12,"label":"name","value":"{Parent.vdfName}"}],"label":"{label}","name":"{Parent.vdfName}","value":"{userValues}"},"record":"{record}","type":"number"},"size":{"default":"12","isResponsive":false},"stateIndex":3,"styleObject":{"sizeClass":"slds-size_12-of-12"},"type":"element"}]}},"conditions":{"group":[{"field":"inputType","id":"state-condition-13","operator":"==","type":"custom","value":"number"},{"field":"dataType","id":"state-condition-14","logicalOperator":"&&","operator":"!=","type":"custom","value":"currency"}],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"Number","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-card slds-p-around_x-small slds-m-around_none ","container":{"class":"slds-card"},"elementStyleProperties":{},"inlineStyle":"","margin":[{"label":"around:none","size":"none","type":"around"}],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":true,"large":"4","medium":"6","small":"12"},"sizeClass":"slds-large-size_4-of-12 slds-medium-size_6-of-12 slds-small-size_12-of-12 slds-size_12-of-12 ","style":"             ","text":{"align":"","color":""}}},{"actions":[],"childCards":[],"components":{"layer-0":{"children":[{"class":"slds-col ","element":"flexToggle","elementLabel":"Toggle-0-clone-0","name":"Toggle","property":{"action":{"actionData":{"card":"{card}","stateAction":{"displayName":"Action","eventName":"cpq_{recordId}","extraParams":{"attributecategoryid":"{Parent.attributeCategoryId}","attributecode":"{code}","attributeid":"{attributeId}","carttype":"{Parent.cartType}","enabled":"{element.checked}","hierarchypath":"{Parent.hierarchyPath}","itemid":"{Parent.itemid}"},"hasExtraParams":true,"id":"flex-action-1626619847651","message":"cpq_bulkchange_event","openUrlIn":"Current Window","subType":"PubSub","type":"Event","vlocityIcon":"standard-default"},"stateObj":"{record}"},"eventType":"onchange","iconName":"standard-default","label":"Action","name":""},"card":"{card}","checked":"\\{enabled}","data-conditions":{"group":[],"id":"state-condition-object","isParent":true},"disabled":"\\{disabled}","label":"","name":"","record":"{record}","toggleDisabledLabel":"","toggleEnabledLabel":"","type":"toggle","updateDS":true},"size":{"default":"2","isResponsive":false},"stateIndex":4,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq-toggle-style","container":{"class":""},"customClass":"cpq-toggle-style","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"2","isResponsive":false},"sizeClass":"slds-size_2-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq-toggle-style","container":{"class":""},"customClass":"cpq-toggle-style","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"2","isResponsive":false},"sizeClass":"slds-size_2-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"element"},{"class":"slds-col ","element":"baseInputElement","elementLabel":"Email-1","name":"Email","property":{"card":"{card}","data-conditions":{"group":[{"field":"enabled","hasMergeField":false,"id":"state-new-condition-0","operator":"==","type":"custom","value":"false"}],"id":"state-condition-object","isParent":true},"propertyObj":{"customProperties":[{"id":0,"label":"required","value":"{required}"},{"id":5,"label":"data-attributename","value":"{code}"},{"id":4,"label":"readOnly","value":"{readonly}"},{"id":5,"label":"disabled","value":"true"},{"id":5,"label":"name","value":"{Parent.vdfName}"}],"label":"{label}","name":"{Parent.vdfName}","value":"{userValues}"},"record":"{record}","type":"email"},"size":{"default":"12","isResponsive":false},"stateIndex":4,"styleObject":{"sizeClass":"slds-size_12-of-12"},"type":"element"},{"class":"slds-col ","element":"baseInputElement","elementLabel":"Email-1-clone-0","name":"Email","property":{"card":"{card}","data-conditions":{"group":[{"field":"enabled","hasMergeField":false,"id":"state-new-condition-9","operator":"==","type":"custom","value":"true"},{"field":"enabled","hasMergeField":false,"id":"state-new-condition-18","logicalOperator":"||","operator":"==","type":"custom","value":"undefined"}],"id":"state-condition-object","isParent":true},"propertyObj":{"customProperties":[{"id":0,"label":"required","value":"{required}"},{"id":5,"label":"data-attributename","value":"{code}"},{"id":4,"label":"readOnly","value":"{readonly}"},{"id":5,"label":"disabled","value":"false"},{"id":5,"label":"name","value":"{Parent.vdfName}"}],"label":"{label}","name":"{Parent.vdfName}","value":"{userValues}"},"record":"{record}","type":"email"},"size":{"default":"12","isResponsive":false},"stateIndex":4,"styleObject":{"sizeClass":"slds-size_12-of-12"},"type":"element"}]}},"conditions":{"group":[{"field":"inputType","id":"state-new-condition-0","operator":"==","type":"custom","value":"email"}],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"Email","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-card slds-p-around_x-small slds-m-around_none ","container":{"class":"slds-card"},"elementStyleProperties":{},"inlineStyle":"","margin":[{"label":"around:none","size":"none","type":"around"}],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":true,"large":"4","medium":"6","small":"12"},"sizeClass":"slds-large-size_4-of-12 slds-medium-size_6-of-12 slds-small-size_12-of-12 slds-size_12-of-12 ","style":"             ","text":{"align":"","color":""}}},{"actions":[],"blankCardState":false,"childCards":["CPQAttributeConfigFields_MACDBulkChange_Child"],"components":{"layer-0":{"children":[{"class":"slds-col ","element":"childCardPreview","elementLabel":"FlexCard-0","name":"FlexCard","property":{"cardName":"CPQAttributeConfigFields_MACDBulkChange_Child","cardNode":"{record}","isChildCardTrackingEnabled":false,"parentAttribute":{"attributeCategoryId":"{Parent.attributeCategoryId}","cartType":"{Parent.cartType}","hierarchyPath":"{Parent.hierarchyPath}","itemid":"{Parent.itemid}","vdfName":"{Parent.vdfName}"},"recordId":"{recordId}","selectedState":"Date"},"size":{"default":"12","isResponsive":false},"stateIndex":5,"styleObject":{"sizeClass":"slds-size_12-of-12"},"type":"element"}]}},"conditions":{"group":[],"id":"state-condition-object","isParent":true},"documents":[],"fields":[],"isSmartAction":false,"name":"CPQAttributeConfigFields_MACDBulkChange_Child","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-card ","container":{"class":"slds-card"},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":true,"large":"4","medium":"6","small":"12"},"sizeClass":"slds-large-size_4-of-12 slds-medium-size_6-of-12 slds-small-size_12-of-12 slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"theme":"slds","title":"CPQAttributeConfigFields_MACDBulkChange","tracking":{"businessEvent":""},"uniqueKey":"attributeId","Id":"a5aDp000000DB8ZAAW","vlocity_cmt__GlobalKey__c":"CPQAttributeConfigFields_MACDBulkChange/Vlocity/1/1623154174661"};
  export default definition