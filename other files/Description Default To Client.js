/* https://order.konvertus.com/secure/admin/EditCustomField!default.jspa?id=10611 */

14 days after Order Date.

<!-- @@Formula: 
  if      (issue.get("customfield_10647") != null && issue.get("customfield_10614") == null) {
  	return  org.apache.commons.lang.time.DateUtils.addDays(issue.get("customfield_10647"),14);
  }
  else if (issue.get("customfield_10647") == null && issue.get("customfield_10614") != null) {
  	return  org.apache.commons.lang.time.DateUtils.addDays(issue.get("customfield_10614"),14);
  }
  else { return null; }
-->

/* <script type="text/javascript">
  planned = document.getElementById('customfield_10015');
  if (planned) {
      default = document.getElementById('customfield_10611');
      // Hide the default field if planned exists
      if (planned.value != 2) default.style.display='none';
  
  }
 </script> */