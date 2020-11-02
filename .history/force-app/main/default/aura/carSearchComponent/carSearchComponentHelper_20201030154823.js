/**
 * @description       : 
 * @author            : Anna Makhovskaya
 * @group             : 
 * @last modified on  : 10-30-2020
 * @last modified by  : Anna Makhovskaya
 * Modifications Log 
 * Ver   Date         Author             Modification
 * 1.0   10-30-2020   Anna Makhovskaya   Initial Version
**/
({
    loadCarTypes: function (cmp) {
        console.log("in...");
        // Load all contact data
        var action = cmp.get("c.getCarTypes");
        action.setCallback(this, function (response) {
            var state = response.getState();
            console.log(response);
            if (state === "SUCCESS") {
                cmp.set("v.carTypesList", response.getReturnValue());
                console.log("in.2.");
                console.log(cmp.get("v.carTypesList"));
            }
            else {
                toastEvent.setParams({
                    "title": "Error!",
                    "message": " Something has gone wrong."
                });
            }
            toastEvent.fire();
        });
        $A.enqueueAction(action);
    }
})
