/**
 * @description       : 
 * @author            : Anna Makhovskaya
 * @group             : 
 * @last modified on  : 11-16-2020
 * @last modified by  : Anna Makhovskaya
 * Modifications Log 
 * Ver   Date         Author             Modification
 * 1.0   11-13-2020   Anna Makhovskaya   Initial Version
**/
({
    doInit: function (component, event, helper) {
        helper.loadCarData(component);
    },

    handleCarIdChange: function (component, event, helper) {
        helper.loadCarData(component);
    },


    fullDetailsHandler: function (component, event, helper) {
        console.log('in...');
        helper.navigateToCarRecord(component);
    }
})
