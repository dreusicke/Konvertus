WdG
'Dispatch Done' date plus the time for 'Publishing', by default 2 days.

<!-- @@Formula: 

/* if 'Days for Publishing' is not Null, return 'Dispatch Done' + 'Days for Publishing' */



    if  (issue.get("customfield_12610") == null )
      return  org.apache.commons.lang.time.DateUtils.addDays(issue.get("customfield_12616"),2);
    else 
      return  org.apache.commons.lang.time.DateUtils.addDays(issue.get("customfield_12616"),(int)issue.get("customfield_12610"));

-->

<!-- @@Format: COMPLETE -->