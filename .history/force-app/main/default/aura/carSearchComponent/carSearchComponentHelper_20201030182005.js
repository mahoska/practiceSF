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

        var action = cmp.get("c.getCarTypes");
        action.setCallback(this, function (response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                cmp.set("v.carTypesList", response.getReturnValue());
                //console.log(cmp.get("v.carTypesList"));
            }
            else {
                /*var toastEvent = $A.get("e.force:showToast");
                 toastEvent.setParams({
                     "title": "Error!",
                     "message": " Something has gone wrong."
                 });
                 toastEvent.fire();*/
                console.log("----->Error");
            }

        });
        $A.enqueueAction(action);
    },


    fireSelectedCarType: function (cmp, selected) {

        var compEvent = cmp.getEvent("strCompEvt");
        compEvent.setParam("eventData", selected);
        compEvent.fire();
    }
})
