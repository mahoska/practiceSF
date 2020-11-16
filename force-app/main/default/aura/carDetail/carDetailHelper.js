/**
 * @description       : 
 * @author            : Anna Makhovskaya
 * @group             : 
 * @last modified on  : 11-16-2020
 * @last modified by  : Anna Makhovskaya
 * Modifications Log 
 * Ver   Date         Author             Modification
 * 1.0   11-16-2020   Anna Makhovskaya   Initial Version
**/
({
    loadCarData: function (cmp) {
        var action = cmp.get("c.getCarById");
        action.setParams({
            "carId": cmp.get("v.carId")
        });
        action.setCallback(this, function (response) {
            var state = response.getState();

            if (state === "SUCCESS") {
                cmp.set("v.isCarFound", true);
                cmp.set("v.car", response.getReturnValue());
            }
            else {
                var toastEvent = $A.get("e.force:showToast");
                toastEvent.setParams({
                    "title": "Error!",
                    "message": " Something has gone wrong."
                });
                toastEvent.fire();

                cmp.set("v.isCarFound", false);
            }

        });
        $A.enqueueAction(action);
    },

    navigateToCarRecord: function (cmp) {
        console.log('in-');
        var navEvent = $A.get("e.force:navigateToSObject");
        navEvent.setParams({
            recordId: cmp.get("v.car").Id,
            slideDevName: "detail"
        });
        navEvent.fire();
    }

})
