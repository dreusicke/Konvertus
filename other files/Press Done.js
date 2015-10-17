WdG
'Pre-Press Done' date plus the time for 'Press', by default 17 days.

<!-- @@Formula: 

/* if 'Production Start' is not Null */
if  (issue.get("customfield_12550") != null ) {
/* if 'Days for Press' is empty, add 17 days as default */
    if  (issue.get("customfield_12609") == null )
      return  org.apache.commons.lang.time.DateUtils.addDays(issue.get("customfield_12614"),17);
/* if 'Days for Press' contains a value, add these days */
    else 
      return  org.apache.commons.lang.time.DateUtils.addDays(issue.get("customfield_12614"),(int)issue.get("customfield_12609"));
}

-->

<!-- @@Format: COMPLETE -->