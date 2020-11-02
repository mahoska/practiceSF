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
    doInit: function (component, event, helper) {
        helper.loadCarTypes(component);
    },

    handleSelectCarType: function (component, event, helper) {
        var selected = event.getSource().get("v.value");
        helper.fireSelectedCarType(component, selected);

        var compEvent = cmp.getEvent("strCompEvt");
        event.setParam("eventData", selected);
        compEvent.fire();
    },
})
