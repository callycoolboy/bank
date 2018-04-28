
function codeAddress() {
            
  $( "div.page" ).slideUp( 100 ).delay( 5000 ).fadeIn( 2000 );
 
var duration = 6000;
    setTimeout(function() {
$("#carl").hide();
$("#carl2").show();
$("#carl2").hide( 9000 );

}, duration);  
   
	 }
        window.onload = codeAddress;
        

function signin() {
var networkState = navigator.network.connection.type;

    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.NONE]     = 'No network connection';
if (states[networkState] == 'No network connection'){
	
    alert('You are currentlly OFFLINE!! Ensure that your Network is up in order to access this page.');
}
else 	{
    alert('Current Network Status: ' + states[networkState] + ' Click OK to Continue');
window.location = "#page2";
}
return true;
}

function closeMeNow() {
    navigator.app.exitApp();
}
