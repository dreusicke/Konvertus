WdG
'Production Start' date plus the time for 'Technical Editing'.

<!-- @@Formula: 

/* if 'Production Start' is not Null, return this + 'Days for Technical Editing' */
  if  (issue.get("customfield_12550") != null ) {
   return  org.apache.commons.lang.time.DateUtils.addDays(issue.get("customfield_12550"),issue.get("customfield_12559"));
  }
-->

<!-- @@Format: COMPLETE -->