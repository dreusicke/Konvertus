WdG
'Production Start' date plus the time for 'Technical Editing', by default 9 days.

<!-- @@Formula: 

/* if 'Production Start' is not Null, return this + 'Days for Technical Editing' */
if  (issue.get("customfield_12550") != null ) {
/* if Days for Technical Editing is empty, add 9 days as default */
	if  (issue.get("customfield_12559") == null )
	  return  org.apache.commons.lang.time.DateUtils.addDays(issue.get("customfield_12550"),9);
/* if 'Days for Technical' Editing contains a value, add the days to 'production time' */
	else 
	  return  org.apache.commons.lang.time.DateUtils.addDays(issue.get("customfield_12550"),(int)issue.get("customfield_12559"));
}

-->


<!-- @@Format: COMPLETE -->