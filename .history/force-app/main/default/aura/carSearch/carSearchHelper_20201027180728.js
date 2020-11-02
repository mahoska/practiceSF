/**
 * @description       : 
 * @author            : Anna Makhovskaya
 * @group             : 
 * @last modified on  : 10-27-2020
 * @last modified by  : Anna Makhovskaya
 * Modifications Log 
 * Ver   Date         Author             Modification
 * 1.0   10-15-2020   Anna Makhovskaya   Initial Version
**/
({
    loadCarTypes: function (cmp) {
        // Load all contact data
        var action = cmp.get("c.getCarTypes");
        action.setParams({
            "carTypeId": cmp.get("v.carTypeId")
        });
        action.setCallback(this, function (response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                var searchResult = response.getReturnValue();
                if (searchResult.size() > 0) {
                    cmp.set("v.carsList", searchResult);
                    cmp.set("v.carsList", searchResult);
                }
                //cmp.set("v.carTypesList", response.getReturnValue());
                //console.log(cmp.get("v.carTypesList"));
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
