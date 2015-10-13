WdG
'1st Proof' date plus the time for 'Corrections', by default 4 days.

<!-- @@Formula: 

/* if 'Days for Corrections' is not Null, return '1st Proof' + 'Days for Corrections' */



    if  (issue.get("customfield_12607") == null )
      return  org.apache.commons.lang.time.DateUtils.addDays(issue.get("customfield_12603"),4);
    else 
      return  org.apache.commons.lang.time.DateUtils.addDays(issue.get("customfield_12603"),(int)issue.get("customfield_12607"));

-->

<!-- @@Format: COMPLETE -->