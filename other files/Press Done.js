WdG
'Corrections Done' date plus the time for '2nd Proof', by default 6 days.

<!-- @@Formula: 

/* if 'Days for 2nd Proof' is not Null, return 'Corrections Done' + 'Days for 2nd proof' */



    if  (issue.get("customfield_12608") == null )
      return  org.apache.commons.lang.time.DateUtils.addDays(issue.get("customfield_12613"),10);
    else 
      return  org.apache.commons.lang.time.DateUtils.addDays(issue.get("customfield_12613"),(int)issue.get("customfield_12608"));

-->

<!-- @@Format: COMPLETE -->