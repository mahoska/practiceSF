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
    catchSelectedCarType: function (cmp, event) {
        var selectedCarTypeId = event.getParam('eventData');
        event.stopPropagation();

        cmp.set("v.selectedCarTypeId", selectedCarTypeId);
    },

    catchSelectedCarId: function (cmp, event) {
        var selectedCarId = event.getParam('eventData');
        event.stopPropagation();

        cmp.set("v.selectedCarId", selectedCarId);
        cmp.set("v.carFound", true);

    }
})
