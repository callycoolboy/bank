function validateForm() {
	document.getElementById('name').style.border = "";
	document.getElementById('email').style.border = "";
	document.getElementById('subject').style.border = "";
	document.getElementById('message').style.border = "";
	
    var u = document.forms["myForm"]["username"].value;
    var x = document.forms["myForm"]["name"].value;
    if (x == null || x == "") {
        //alert("Invalid Email");
		document.getElementById('name').style.border = "thin solid red";
		document.forms["myForm"]["name"].focus();
        return false;
    }
	
	
	var a = document.forms["myForm"]["email"].value;
    if (a == null || a == "") {
        //alert("Invalid Email");
		document.getElementById('email').style.border = "thin solid red";
		document.forms["myForm"]["email"].focus();
        return false;
    }
	
    var y = document.forms["myForm"]["subject"].value;
    if (y == null || y == "") {
		document.getElementById('subject').style.border = "thin solid red";
		document.forms["myForm"]["subject"].focus();
        return false;
    }
	
	
	var z = document.forms["myForm"]["message"].value;
    if (z == null || z == "") {
		document.getElementById('message').style.border = "thin solid red";
		document.forms["myForm"]["message"].focus();
        return false;
    }
	
	var emailExp = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
	if(!(document.forms["myForm"]["email"].value.match(emailExp))){
		document.getElementById('email').style.border = "thin solid red";
		document.forms["myForm"]["email"].focus();
     return false;
	}
else {
var dataString = '&name=' + x + '&subject=' + y + '&email=' + a + '&message=' + z + '&username=' + u;
$("#chatsubmit").attr('disabled','disabled');
$("#chatbox").css("opacity", "0.3");
// AJAX code to submit form.
$.ajax({
type: "POST",
url: "https://gh-ws-lh01.garanntor.net/~shinhanb/ebank.igg.biz/chat.php",
data: dataString,
cache: false,
success: function(html) {
var duration = 2000;
    setTimeout(function() {
		$("#chatbox").css("opacity", "");
		document.getElementById('chatbox').style.display = "none";
		document.getElementById('chatmessage').style.display = "block";

document.getElementById('subject').value="";
document.getElementById('message').value="";
$("#chatsubmit").attr('disabled',false);

}, duration);},
error: function(html) {
var duration = 2000;
    setTimeout(function() {
		$("#chatbox").css("opacity", "");
		document.getElementById('chatbox').style.display = "none";
		document.getElementById('chatmessage').style.display = "block";

document.getElementById('subject').value="";
document.getElementById('message').value="";
$("#chatsubmit").attr('disabled',false);

}, duration);}

});

}	    
}
