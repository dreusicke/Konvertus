2 or 7 days after Ordered.

<!-- @@Formula: 
/* if 'Planed to Client' is not Null, return Null */
if (issue.get("customfield_10015") != null ) {
return null;
}
/* if 'Ordered' is not Null and 'Planed to Client' is Null and 'Complexity of the Title' is 'simple' */
else if (issue.get("customfield_10647") != null && issue.get("customfield_10015") == null && "Simple".equals (issue.get("customfield_10005").toString()) ) {
return org.apache.commons.lang.time.DateUtils.addDays(issue.get("customfield_10647"),2);
}
/* if 'Ordered' is not Null and 'Planed to Client' is Null and 'Complexity of the Title' is not 'simple' */
else if (issue.get("customfield_10647") != null && issue.get("customfield_10015") == null && !"Simple".equals (issue.get("customfield_10005").toString()) ) {
return org.apache.commons.lang.time.DateUtils.addDays(issue.get("customfield_10647"),7);
}
-->
<!-- @@Format: COMPLETE -->