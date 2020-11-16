/**
 * @description       : 
 * @author            : Anna Makhovskaya
 * @group             : 
 * @last modified on  : 11-06-2020
 * @last modified by  : Anna Makhovskaya
 * Modifications Log 
 * Ver   Date         Author             Modification
 * 1.0   11-04-2020   Anna Makhovskaya   Initial Version
**/
({
    handleCarSelect: function (component, event, helper) {

        var selectedCarId = component.get("v.car.Id");

        helper.removeAddSelectedClass(selectedCarId);
        helper.fireSelectedCarEvent(component, selectedCarId);


    }
})
