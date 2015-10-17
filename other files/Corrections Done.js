WdG
'1st Proof' date plus the time for 'Corrections', by default 4 days.

<!-- @@Formula: 

/* if 'Production Start' is not Null */
if  (issue.get("customfield_12550") != null ) {
/* if 'Days for Corrections' is empty, add 4 days as default */
    if  (issue.get("customfield_12607") == null )
      return  org.apache.commons.lang.time.DateUtils.addDays(issue.get("customfield_12603"),4);
/* if 'Days for Corrections' contains a value, add these days */
    else 
      return  org.apache.commons.lang.time.DateUtils.addDays(issue.get("customfield_12603"),(int)issue.get("customfield_12607"));
}
-->

<!-- @@Format: COMPLETE -->