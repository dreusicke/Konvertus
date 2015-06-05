1 day before 'Planned To Client' or 'Default To Client' for simple titles, 2 days for medium and complex ones.


<!-- @@Formula: 
/* If 'Planned To Client' is not Null and 'Complexity of the Title' is 'simple' */
  if      (issue.get("customfield_10015") != null && "Simple".equals (issue.get("customfield_10005").toString())) {
  	return  org.apache.commons.lang.time.DateUtils.addDays(issue.get("customfield_10015"),0);
  }
/* If 'Planned To Client' is not Null and 'Complexity of the Title' is 'medium' */
  else if      (issue.get("customfield_10015") != null && "Medium".equals (issue.get("customfield_10005").toString())) {
  	return  org.apache.commons.lang.time.DateUtils.addDays(issue.get("customfield_10015"),-2);
  }
/* If 'Planned To Client' is not Null and 'Complexity of the Title' is 'complex' */
  else if      (issue.get("customfield_10015") != null && "Complex".equals (issue.get("customfield_10005").toString())) {
  	return  org.apache.commons.lang.time.DateUtils.addDays(issue.get("customfield_10015"),-1);
  }
/* If 'Planned To Client' is Null, (use 'Default To Client') and 'Complexity of the Title' is 'simple' */
  else if (issue.get("customfield_10015") == null && issue.get("customfield_10611") != null && "Simple".equals (issue.get("customfield_10005").toString())) {
  	return  org.apache.commons.lang.time.DateUtils.addDays(issue.get("customfield_10611"),0);
  }
/* If 'Planned To Client' is Null, (use 'Default To Client') and 'Complexity of the Title' is 'medium' */
  else if (issue.get("customfield_10015") == null && issue.get("customfield_10611") != null && "Medium".equals (issue.get("customfield_10005").toString())) {
  	return  org.apache.commons.lang.time.DateUtils.addDays(issue.get("customfield_10611"),-2);
  }
/* If 'Planned To Client' is Null, (use 'Default To Client') and 'Complexity of the Title' is 'complex' */
  else if (issue.get("customfield_10015") == null && issue.get("customfield_10611") != null && "Complex".equals (issue.get("customfield_10005").toString())) {
  	return  org.apache.commons.lang.time.DateUtils.addDays(issue.get("customfield_10611"),-1);
  }
  else { return null; }
-->

<!-- @@Format: COMPLETE -->