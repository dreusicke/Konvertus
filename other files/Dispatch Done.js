WdG
'Press Done' date plus the time for 'Dispatch', by default 2 days.

<!-- @@Formula: 

/* if 'Days for Dispatch' is not Null, return 'Press Done' + 'Days for Dispatch' */



    if  (issue.get("customfield_12610") == null )
      return  org.apache.commons.lang.time.DateUtils.addDays(issue.get("customfield_12615"),2);
    else 
      return  org.apache.commons.lang.time.DateUtils.addDays(issue.get("customfield_12615"),(int)issue.get("customfield_12610"));

-->

<!-- @@Format: COMPLETE -->