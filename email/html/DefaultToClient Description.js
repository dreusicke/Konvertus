7 days after Order Date.

<!-- @@Formula: 
/* if 'Ordered' is not Null and 'Planed to Client' is Null and 'Complexity of the Title' is not 'simple' */
  if      (issue.get("customfield_10647") != null && issue.get("customfield_10015") == null && issue.get("customfield_10005") != 10003) {
  	return  org.apache.commons.lang.time.DateUtils.addDays(issue.get("customfield_10647"),7);
  }
  else { return null; }
-->

<!-- @@Format: DATE -->