WdG
'Technical Editing' date plus the time for '1st Proof', by default 10 days.

<!-- @@Formula: 

/* if 'Production Start' is not Null */
if  (issue.get("customfield_12550") != null ) {
/* if 'Days for 1st Proof' is empty, add 10 days as default */
    if  (issue.get("customfield_12604") == null )
      return  org.apache.commons.lang.time.DateUtils.addDays(issue.get("customfield_12601"),10);
/* if 'Days for 1st Proof' contains a value, add these days */
    else 
      return  org.apache.commons.lang.time.DateUtils.addDays(issue.get("customfield_12601"),(int)issue.get("customfield_12604"));
}

-->

<!-- @@Format: COMPLETE -->