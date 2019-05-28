({
    doInit : function(component, event, helper) {
        helper.loadOpp(component);},
    handleNewClick: function(component, event, helper) {
        component.set("v.policy", null);
        $A.get('e.force:refreshView').fire(); },
    handleLoad : function(component, event, helper) {},
    handleSubmit : function(component, event, helper) {
        component.set("v.recordsaved", true);
        component.set("v.activesection", ['A','B']);},
    handleSuccess : function(component, event, helper) {
        var payload = event.getParams().response;
        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({"title": "Success","message": "The record has been saved."});
        toastEvent.fire();
        $A.get('e.force:refreshView').fire();},
	addOnChanged : function(component, event, helper) {
         var addons = component.find("addon").get("v.value");
        if (addons!=null){component.set("v.addons", addons);}
         component.set('v.fasttrack',addons.includes('Fast Track'));
         component.set('v.workingbody',addons.includes('Working Body'));
         component.set('v.stringerminds',addons.includes('Stronger Minds'));
         component.set('v.doctor',addons.includes('Doctor@'));
         component.set('v.eap',addons.includes('EAP'));
         component.set('v.occupationalhealth',addons.includes('Occupational Health'));},
    prodChanged : function(component, event, helper) {
        var producttype = component.find("ptype").get("v.value");
        if (producttype!=null){component.set("v.producttype", producttype);}},
    policyChanged : function(component, event, helper) {
        var policytype = component.find("poltype").get("v.value");
        if (policytype!=null){component.set("v.policytype", policytype);}},
})