/**
 * @description       : 
 * @author            : Anna Makhovskaya
 * @group             : 
 * @last modified on  : 10-15-2020
 * @last modified by  : Anna Makhovskaya
 * Modifications Log 
 * Ver   Date         Author             Modification
 * 1.0   10-15-2020   Anna Makhovskaya   Initial Version
**/
({
    loadCarTypes: function (cmp) {
        loadContacts: function(cmp) {
            // Load all contact data
            var action = cmp.get("c.getContacts");
            action.setCallback(this, function (response) {
                var state = response.getState();
                if (state === "SUCCESS") {
                    cmp.set("v.contacts", response.getReturnValue());
                    cmp.set("v.contactList", response.getReturnValue());
                    this.updateTotal(cmp);
                }

                // Display toast message to indicate load status
                var toastEvent = $A.get("e.force:showToast");
                if (state === 'SUCCESS') {
                    toastEvent.setParams({
                        "title": "Success!",
                        "message": " Your contacts have been loaded successfully."
                    });
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
        },
    }
})
