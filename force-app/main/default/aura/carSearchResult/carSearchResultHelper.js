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

                if (searchResult.length > 0) {
                    cmp.set("v.isCarsFound", true);
                    cmp.set("v.carsList", searchResult);
                } else {
                    cmp.set("v.isCarsFound", false);
                }
            }
            else {
                var toastEvent = $A.get("e.force:showToast");
                toastEvent.setParams({
                    "title": "Error!",
                    "message": " Something has gone wrong."
                });
                toastEvent.fire();
                //console.log("----->Error");
            }

        });
        $A.enqueueAction(action);
    }
})
