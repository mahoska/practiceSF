/**
 * @description       : 
 * @author            : Anna Makhovskaya
 * @group             : 
 * @last modified on  : 10-29-2020
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


    @AuraEnabled
    public static List<Car__c> getCarsByTypeId(String carTypeId){
        try {
            if(carTypeId != null){
            List<Car__c> cars =  [SELECT Id, Name, Image__c, Picture__c FROM Car__c WHERE Car_Type__c =:carTypeId LIMIT 1000];
            }else{
                List<Car__c> cars =  [SELECT Id, Name, Image__c, Picture__c FROM Car__c  LIMIT 1000];  
            }
            return cars;

        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
