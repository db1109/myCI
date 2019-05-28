({
    loadOpp : function(cmp) {
        var action = cmp.get("c.getOpp");
        action.setParams({recId : cmp.get("v.recordId")});
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                cmp.set("v.ParentOpp", response.getReturnValue());
                var opp = response.getReturnValue();
                cmp.find("parentacc").set("v.value", opp.AccountId);
                cmp.find("opp").set("v.value", opp.Id);}});
        $A.enqueueAction(action); },
})