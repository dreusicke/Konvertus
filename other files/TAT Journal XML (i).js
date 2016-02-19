5 calendar days after 'production ordered'.


<!-- @@Formula: 

/* If '1st Proof Production Started' is Not Null, add 5 days */
  if (issue.get("customfield_13018") != null) {
  	return  org.apache.commons.lang.time.DateUtils.addDays(issue.get("customfield_13018"),5);
  }
  else { return null; }
-->

<!-- @@Format: COMPLETE -->