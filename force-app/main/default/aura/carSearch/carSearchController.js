/**
 * @description       : 
 * @author            : Anna Makhovskaya
 * @group             : 
 * @last modified on  : 11-05-2020
 * @last modified by  : Anna Makhovskaya
 * Modifications Log 
 * Ver   Date         Author             Modification
 * 1.0   10-15-2020   Anna Makhovskaya   Initial Version
**/
({
    handleStrCompEvt: function (component, event, helper) {
        helper.catchSelectedCarType(component, event);
    },

    handleGetSelectedCarIdEvt: function (component, event, helper) {
        helper.catchSelectedCarId(component, event);
    },

})
