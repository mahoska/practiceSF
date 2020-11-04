/**
 * @description       : 
 * @author            : Anna Makhovskaya
 * @group             : 
 * @last modified on  : 11-04-2020
 * @last modified by  : Anna Makhovskaya
 * Modifications Log 
 * Ver   Date         Author             Modification
 * 1.0   11-04-2020   Anna Makhovskaya   Initial Version
**/
({
    loadTabs: function (cmp, event) {
        var tab = event.getSource();
        switch (tab.get('v.id')) {
            case 'carDetails':
                this.injectComponent('c:carDetail', tab);
                break;
            case 'addCarExperience':
                this.injectComponent('c:addCarExperience', tab);
                break;
            case 'viewCarExperience':
                this.injectComponent('c:viewCarExperience', tab);
                break;
        }
    },

    injectComponent: function (name, target) {
        $A.createComponent(name, {
        }, function (contentComponent, status, error) {
            if (status === "SUCCESS") {
                target.set('v.body', contentComponent);
            } else {
                throw new Error(error);
            }
        });
    }
})
