({
    /**
	 * Map of pre-chat field label to pre-chat field name (can be found in Setup)
	 */
    fieldLabelToName: {
        "First Name": "FirstName",
        "Last Name": "LastName",
        "Email": "Email",
        "Phone":"Phone",
        "Country" : "Country__c"
    },
    
    /**
	 * Event which fires the function to start a chat request (by accessing the chat API component)
	 *
	 * @param cmp - The component for this state.
	 */
    onStartButtonClick: function(cmp) {
        var prechatFieldComponents = cmp.find("prechatField");
        var fields;
        //alert('test entered');
        var PrechatFeildFirstName =  cmp.find("prechatField")[0].get('v.value');
        var PrechatFeildLastName = cmp.find("prechatField")[1].get('v.value');
        var PrechatFeildEmail = cmp.find("prechatField")[2].get('v.value');
        if((PrechatFeildFirstName !== undefined && !$A.util.isEmpty(PrechatFeildFirstName) && PrechatFeildFirstName.length >0) && (PrechatFeildLastName!= undefined && !$A.util.isEmpty(PrechatFeildLastName) && PrechatFeildLastName.length >0) &&(PrechatFeildEmail !=undefined && !$A.util.isEmpty(PrechatFeildLastName)  && PrechatFeildEmail.length >0)) {
            var regExpEmailformat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        // Make an array of field objects for the library
        cmp.set('v.boolError',false);
        fields = this.createFieldsArray(prechatFieldComponents);
        // If the pre-chat fields pass validation, start a chat
        if(PrechatFeildEmail.match(regExpEmailformat)) {
            cmp.find("prechatAPI").startChat(fields); 
        } else {
            cmp.set('v.boolErrorEmail',true);
        }
            
        } else if( PrechatFeildFirstName == undefined || $A.util.isEmpty(PrechatFeildFirstName) ||$A.util.isEmpty(PrechatFeildLastName) || PrechatFeildLastName == undefined ||  PrechatFeildEmail== undefined || $A.util.isEmpty(PrechatFeildEmail)) {
            cmp.set('v.boolError',true);
            cmp.set('v.boolErrorEmail',false);
        }
        
    },
    
    /**
	 * Create an array of field objects to start a chat from an array of pre-chat fields
	 * 
	 * @param fields - Array of pre-chat field Objects.
	 * @returns An array of field objects.
	 */
    createFieldsArray: function(fields) {
        if(fields.length) {
            //alert(fields[0]);
            return fields.map(function(fieldCmp) {
                return {
                    label: fieldCmp.get("v.label"),
                    value: fieldCmp.get("v.value"),
                    name: this.fieldLabelToName[fieldCmp.get("v.label")]
                };
            }.bind(this));
        } else {
            return [];
        }
    },
    
    /**
     * Create an array in the format $A.createComponents expects
     * 
     * Example:
     * [["componentType", {attributeName: "attributeValue", ...}]]
     * 
	 * @param prechatFields - Array of pre-chat field Objects.
	 * @returns Array that can be passed to $A.createComponents
     */
    getPrechatFieldAttributesArray: function(prechatFields) {
        // $A.createComponents first parameter is an array of arrays. Each array contains the type of component being created, and an Object defining the attributes.
        var prechatFieldsInfoArray = [];
        // For each field, prepare the type and attributes to pass to $A.createComponents
        prechatFields.forEach(function(field) {
            if(field.label == 'First Name' || field.label == 'Phone') {
                field.maxLength = 40;
            } if(field.label == 'Last Name' || field.label == 'Email') {
                field.maxLength = 80;
            } if(field.label == 'Email') {
                field.required = true;
            }
            var componentName = (field.type === "inputSplitName") ? "inputText" : field.type;
            var componentInfoArray = ["ui:" + componentName];
            var attributes = {
                "aura:id": "prechatField",
                required: field.required,
                label: field.label,
                disabled: field.readOnly,
                maxlength: field.maxLength,
                class: field.className,
                value: field.value
            };
            
            // Special handling for options for an input:select (picklist) component
            if(field.type === "inputSelect" && field.picklistOptions) attributes.options = field.picklistOptions;
            
            // Append the attributes Object containing the required attributes to render this pre-chat field
            componentInfoArray.push(attributes);
            
            // Append this componentInfoArray to the fieldAttributesArray
            prechatFieldsInfoArray.push(componentInfoArray);
        });
        
        return prechatFieldsInfoArray;
    }
});
