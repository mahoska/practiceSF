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
public with sharing class L_CarSearchController {
    @AuraEnabled
    public static List<Car_Type__c> getCarTypes() {
        List<Car_Type__c> carTypes =  [SELECT Id, Name FROM Car_Type__c LIMIT 1000];
        return carTypes;
    }
}