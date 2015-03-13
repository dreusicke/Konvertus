5 days before 'Planned To Client' or 'Default To Client'.


<!-- @@Formula: 
  if      (issue.get("customfield_10015") != null) {
  	return  org.apache.commons.lang.time.DateUtils.addDays(issue.get("customfield_10015"),-5);
  }
  else if (issue.get("customfield_10015") == null && issue.get("customfield_10611") != null) {
  	return  org.apache.commons.lang.time.DateUtils.addDays(issue.get("customfield_10611"),-5);
  }
  else { return null; }
-->