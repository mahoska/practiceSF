/**
 * @description       : 
 * @author            : Anna Makhovskaya
 * @group             : 
 * @last modified on  : 11-06-2020
 * @last modified by  : Anna Makhovskaya
 * Modifications Log 
 * Ver   Date         Author             Modification
 * 1.0   11-06-2020   Anna Makhovskaya   Initial Version
**/
({
    removeAddSelectedClass: function (selectedCarId) {

        var tiles = document.getElementsByClassName("selected");
        for (let i = 0; i < tiles.length; i++) {
            tiles[i].classList.remove('selected');
        }
        var selectedTile = document.getElementById(selectedCarId);
        selectedTile.classList.add('selected');

        return;
    },

    fireSelectedCarEvent: function (component, selectedCarId) {

        var compEvent = component.getEvent("setSelectedCarId");
        compEvent.setParam("eventData", selectedCarId);
        compEvent.fire();
    }

})
