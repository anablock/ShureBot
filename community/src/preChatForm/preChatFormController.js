({
    
    /**
     * On initialization of this component, set the prechatFields attribute and render pre-chat fields.
     * 
     * @param cmp - The component for this state.
     * @param evt - The Aura event.
     * @param hlp - The helper for this state.
     */
	onInit: function(cmp, evt, hlp) {
        // Get pre-chat fields defined in setup using the prechatAPI component
		var prechatFields = cmp.find("prechatAPI").getPrechatFields();
        // Get pre-chat field types and attributes to be rendered
        var prechatFieldComponentsArray = hlp.getPrechatFieldAttributesArray(prechatFields);
        
        // Make asynchronous Aura call to create pre-chat field components
        $A.createComponents(
            prechatFieldComponentsArray,
            function(components, status, errorMessage) {
                if(status === "SUCCESS") {
                    cmp.set("v.prechatFieldComponents", components);
                }
            }
        );
    },
    
    handlecheckbox : function(cmp, evt, hlp){
        /*cmp.set("v.DisclaimerValue",true);
        cmp.set("v.disableValue",'false');*/
        var disabledvalue = cmp.get("v.DisclaimerValue");
        if(!disabledvalue){
            cmp.set("v.disableValue",'false');
            cmp.set("v.DisclaimerValue",true);
            setTimeout(function(){
            $A.util.removeClass(cmp.find("startButton"), 'startButtonDisabled');
            $A.util.addClass(cmp.find("startButton"), 'startButton');
                },200);
        } else {
            cmp.set("v.disableValue",'true');
            cmp.set("v.DisclaimerValue",false);
            setTimeout(function(){
            $A.util.removeClass(cmp.find("startButton"), "startButton");
            $A.util.addClass(cmp.find("startButton"), "startButtonDisabled");
             },200);
        } 
        
    },
    
    /**
     * Event which fires when start button is clicked in pre-note
     * 
     * @param cmp - The component for this state.
     * @param evt - The Aura event.
     * @param hlp - The helper for this state.
     */
    handleStartButtonClick: function(cmp, evt, hlp) {
        var boolHasEmptyField = false;
        const reqFields = document.getElementsByClassName("prechatContent")[0].querySelectorAll("input[required]");
        reqFields.forEach(function(elem){
            if(elem.value == ""){
                boolHasEmptyField = true;
            } else {
                //do nothing.
            }
        });
        if(boolHasEmptyField){
            return false;
        } else{
            hlp.onStartButtonClick(cmp);
        }
       
    }
});
