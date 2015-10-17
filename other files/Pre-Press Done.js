WdG
'2nd Proof' date plus the time for 'Pre-Press', by default 4 days.


<!-- @@Formula: 

/* if 'Production Start' is not Null */
if  (issue.get("customfield_12550") != null ) {
/* if 'Days for Pre-Press' is empty, add 4 days as default */
    if  (issue.get("customfield_12608") == null )
      return  org.apache.commons.lang.time.DateUtils.addDays(issue.get("customfield_12613"),4);
/* if 'Days for Pre-Press' contains a value, add these days */
    else 
      return  org.apache.commons.lang.time.DateUtils.addDays(issue.get("customfield_12613"),(int)issue.get("customfield_12608"));
}
-->

<!-- @@Format: COMPLETE -->
