public with sharing class axa_dynamicform {
    //test23445
    @AuraEnabled
    public static Opportunity getOpp(Id recId) {
        Opportunity o =[SELECT Id, Name, AccountId FROM Opportunity where id =:recId];
        return o;}}