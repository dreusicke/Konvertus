14 days after Order Date.

<!-- @@Formula: 
/* if 'Ordered' is not Null and 'Planed to Client' is Null */
  if      (issue.get("customfield_10647") != null && issue.get("customfield_10015") == null) {
  	return  org.apache.commons.lang.time.DateUtils.addDays(issue.get("customfield_10647"),14);
  }
  else { return null; }
-->

<!-- @@Format: DATE -->