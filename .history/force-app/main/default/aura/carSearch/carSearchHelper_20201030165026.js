/**
 * @description       : 
 * @author            : Anna Makhovskaya
 * @group             : 
 * @last modified on  : 10-30-2020
 * @last modified by  : Anna Makhovskaya
 * Modifications Log 
 * Ver   Date         Author             Modification
 * 1.0   10-15-2020   Anna Makhovskaya   Initial Version
**/
({
    catchSelectedCarType: function (cmp, event) {
        var selectedCarTypeId = event.getParam('eventData');
        cmp.set("v.selectedCarTypeId", selectedCarTypeId);
    }
})
