5 calendar days after 'production ordered'.

<!-- @@Formula: 

/* If '1st Proof Production Started' is Not Null, add 7 days */
  if (issue.get("customfield_13018") != null) {
  	return  org.apache.commons.lang.time.DateUtils.addDays(issue.get("customfield_13018"),5);
  }
/* If '1st Proof Production Started' is Null and 'Production Ordered' is NOT Null, add 7 days */
  else if (issue.get("customfield_13018") == null && issue.get("customfield_12506") != null) {
  	return  org.apache.commons.lang.time.DateUtils.addDays(issue.get("customfield_12506"),5);
  }
  else { return null; }
-->

<!-- @@Format: COMPLETE -->