({
   handleChange : function(component, event, helper) {
      var response = event.getSource().getLocalId();
      component.set("v.value", response);
      var navigate = component.get("v.navigateFlow");
      navigate("NEXT");},
    
    handleChange1 : function(component, event, helper) {
      component.set("v.ScreenNumber", 1);
      var response = event.getSource().getLocalId();
      component.set("v.value", response);
      var navigate = component.get("v.navigateFlow");
      navigate("NEXT");},
 
    handleChange2 : function(component, event, helper) {
      component.set("v.ScreenNumber", 2);
	  var response = event.getSource().getLocalId();
      component.set("v.value", response);
      var navigate = component.get("v.navigateFlow");
      navigate("NEXT");},

   handleChange3 : function(component, event, helper) {
      component.set("v.ScreenNumber", 3);
      var response = event.getSource().getLocalId();
      component.set("v.value", response);
      var navigate = component.get("v.navigateFlow");
      navigate("NEXT");}
})