WdG
'Press Done' date plus the time for 'Dispatch', by default 2 days.

<!-- @@Formula: 

/* if 'Production Start' is not Null */
if  (issue.get("customfield_12550") != null ) {
/* if 'Days for Dispatch' is empty, add 2 days as default */
    if  (issue.get("customfield_12610") == null )
      return  org.apache.commons.lang.time.DateUtils.addDays(issue.get("customfield_12615"),2);
/* if 'Days for Press' contains a value, add these days */
    else 
      return  org.apache.commons.lang.time.DateUtils.addDays(issue.get("customfield_12615"),(int)issue.get("customfield_12610"));
}

-->

<!-- @@Format: COMPLETE -->