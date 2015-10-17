WdG
'Publishing Done' is later than 'Planned Publication'.

<!-- @@Formula: 

/* if 'Days for Publishing' is not Null, return 'Dispatch Done' + 'Days for Publishing' */


  if  (issue.get("customfield_12617") > issue.get("customfield_12558") ) {

      return  issue.get("customfield_12617");
    
}

-->

<!-- @@Format: COMPLETE -->