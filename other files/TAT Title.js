3 calendar days after 'Ordered'.


<!-- @@Formula: 

/* If 'Ordered' is Not Null, add 3 days */
  if (issue.get("customfield_10647") != null) {
  	return  org.apache.commons.lang.time.DateUtils.addDays(issue.get("customfield_10647"),3);
  }
  else { return null; }
-->

<!-- @@Format: COMPLETE -->