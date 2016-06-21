WdG
'Dispatch Done' date plus the time for 'Publishing', by default 2 days.

<!-- @@Formula: 

/* if 'Production Start' is not Null */
if  (issue.get("customfield_12550") != null ) {
/* if 'Days for Publishing' is empty, add 2 days as default */
    if  (issue.get("customfield_12611") == null )
      return  org.apache.commons.lang.time.DateUtils.addDays(issue.get("customfield_12616"),2);
/* if 'Days for Press' contains a value, add these days */
    else 
      return  org.apache.commons.lang.time.DateUtils.addDays(issue.get("customfield_12616"),(int)issue.get("customfield_12611"));
}

-->

<!-- @@Format: COMPLETE -->



**** **** **** ****

KOPIERT AUS JIRA IST DIESE FELDBESCHREIBUNG, DIE MACHT ABER VIELE PROBLEME

WdG
'Dispatch Done' date plus the time for 'Publishing', by default 2 days.

<!-- @@Formula: 

/* if 'Days for Publishing' is not Null, return 'Dispatch Done' + 'Days for Publishing' */


  if  ((int)issue.get("customfield_12617") > (int)issue.get("customfield_12558") ) {

      return  issue.get("customfield_12617");
    
}

-->

<!-- @@Format: COMPLETE -->

**** **** **** ****