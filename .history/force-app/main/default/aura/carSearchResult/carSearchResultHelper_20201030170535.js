/**
 * @description       : 
 * @author            : Anna Makhovskaya
 * @group             : 
 * @last modified on  : 10-30-2020
 * @last modified by  : Anna Makhovskaya
 * Modifications Log 
 * Ver   Date         Author             Modification
 * 1.0   10-27-2020   Anna Makhovskaya   Initial Version
**/
({
    searchCarByType: function (cmp) {
        var action = cmp.get("c.getCarsByTypeId");
        action.setParams({
            "carTypeId": cmp.get("v.carTypeId")
        });
        action.setCallback(this, function (response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                var searchResult = response.getReturnValue();
                console.log("----->", searchResult);
                if (searchResult.length > 0) {
                    cmp.set("v.carsList", searchResult);
                } else {
                    //cmp.set("v.isCarsFound", false);
                }
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