public with sharing class axa_dynamicform {
    //test234456
    @AuraEnabled
    public static Opportunity getOpp(Id recId) {
        Opportunity o =[SELECT Id, Name, AccountId FROM Opportunity where id =:recId];
        return o;}}