WdG
'Technical Editing' date plus the time for '1st Proof', by default 10 days.

<!-- @@Formula: 

/* if 'Days for 1st Proof' is not Null, return 'Technical Editing' + 'Days for 1st proof' */



    if  (issue.get("customfield_12604") == null )
      return  org.apache.commons.lang.time.DateUtils.addDays(issue.get("customfield_12601"),10);
    else 
      return  org.apache.commons.lang.time.DateUtils.addDays(issue.get("customfield_12601"),(int)issue.get("customfield_12604"));

-->

<!-- @@Format: COMPLETE -->