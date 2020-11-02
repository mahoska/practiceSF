/**
 * @description       : 
 * @author            : Anna Makhovskaya
 * @group             : 
 * @last modified on  : 10-29-2020
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
            console.log('test');
            if (state === "SUCCESS") {
                var searchResult = response.getReturnValue();
                console.log(searchResult);
                console.log('SUCCESS');
                if (searchResult.size() > 0) {
                    cmp.set("v.isCarsFound", true);
                    cmp.set("v.carsList", searchResult);
                    console.log('test' + cmp.get("v.carsList"));
                } else {
                    cmp.set("v.isCarsFound", false);
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
