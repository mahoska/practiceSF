/**
 * @description       : 
 * @author            : Anna Makhovskaya
 * @group             : 
 * @last modified on  : 10-29-2020
 * @last modified by  : Anna Makhovskaya
 * Modifications Log 
 * Ver   Date         Author             Modification
 * 1.0   10-16-2020   Anna Makhovskaya   Initial Version
**/
({

    doInit: function (component, event, helper) {
        console.log(component.get("v.carTypeId"));
        helper.searchCarByType(component);
    },

    handleCarTypeIdChange: function (component, event, helper) {
        helper.searchCarByType(component);
    },
})
