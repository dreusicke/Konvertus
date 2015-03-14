Remaining time for production until 'KP to KM'.

<!-- @@Formula: 
/* Planned To Client */
  if      (issue.get("customfield_10015") != null) {
  	return  org.apache.commons.lang.time.DateUtils.addDays(issue.get("customfield_10015"),-5);
  }
/* Default To Client */
  else if (issue.get("customfield_10015") == null && issue.get("customfield_10611") != null) {
  	return  org.apache.commons.lang.time.DateUtils.addDays(issue.get("customfield_10611"),-5);
  }
  else { return null; }
-->

<!-- @@Format: DATE -->