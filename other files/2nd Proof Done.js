WdG
'Corrections Done' date plus the time for '2nd Proof', by default 6 days.

<!-- @@Formula: 

/* if 'Production Start' is not Null */
if  (issue.get("customfield_12550") != null ) {
/* if 'Days for 2nd Proof' is empty, add 6 days as default */
    if  (issue.get("customfield_12606") == null )
      return  org.apache.commons.lang.time.DateUtils.addDays(issue.get("customfield_12612"),6);
/* if 'Days for 2nd Proof' contains a value, add these days */
    else 
      return  org.apache.commons.lang.time.DateUtils.addDays(issue.get("customfield_12612"),(int)issue.get("customfield_12606"));
}
-->

<!-- @@Format: COMPLETE -->